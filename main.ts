import { connect_to_db, db } from "./db/index.ts";
import { CONNECTION_CONFIG, DB_CONNECTION } from "./types/types_db.ts";
import { Graph } from "./db/db_operations.ts";
import { edges_map } from "./lines/lines_edges.ts";
import { lines as stations_map } from "./lines/lines_create_lines.ts";
import { schema_queries } from "./db/schema_queries.ts";
import { Surreal_HTTP_Query } from "./fetch/http_query.ts";
import { HTTP_DB_RESULTS } from "./types/types_lines.ts";

const http_db_connection: CONNECTION_CONFIG = {
  auth: {
    username: "root",
    password: "root_password",
  },
  db: {
    name: "subway_db",
    namespace: "subway_ns",
  },
  http: {
    protocol: "http",
    url: "127.0.0.1",
    port: 8000,
    method: "POST",
  },
};

async function main() {
  const index_connects_to =
    "DEFINE INDEX IF NOT EXISTS unique_relationships ON TABLE connects_to FIELDS in, out UNIQUE;";
  const index_connects_to_in =
    "DEFINE INDEX IF NOT EXISTS connects_to_in_index ON TABLE connects_to FIELDS in;";
  const index_connects_to_out =
    "DEFINE INDEX IF NOT EXISTS connects_to_out_index ON TABLE connects_to FIELDS out;";

  try {
    const db_instance = await connect_to_db(db, http_db_connection);

    if (db_instance.status === "connected") {
      const g = new Graph(db_instance, edges_map, schema_queries, stations_map);

      // Perform RPC query
      await g.execute_query("INFO FOR TABLE has;");

      const fields = (
        g.result?.[0]?.result as { fields: Record<string, unknown> }
      )?.fields;

      if (Object.keys(fields).length === 0) {
        await g.generate_db();
      }

      await g.execute_query(index_connects_to);
      await g.execute_query(index_connects_to_in);
      await g.execute_query(index_connects_to_out);

      // Perform HTTP query
      const query_http = "SELECT * FROM station WHERE line_id = line:4";
      const shq = new Surreal_HTTP_Query(http_db_connection);
      const res = (await shq.fetch_database(query_http)) as HTTP_DB_RESULTS[];

      // Perform RPC query
      const query_rpc = "SELECT * FROM station WHERE line_id = line:5";

      await g.execute_query(query_rpc);

      console.log("RESULT HTTP QUERY, line_id = line:4 :: ", res);
      console.log("RESULT HTTP QUERY, line_id = line:5 :: ", g.result);
    } else {
      console.error("Failed to connect to DB");
    }
  } catch (e) {
    console.error("An error occurred:", e);
  }
}

await main();
