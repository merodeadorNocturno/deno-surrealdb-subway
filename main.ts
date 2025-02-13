import { connect_to_db, db } from "./db/index.ts";
import { CONNECTION_CONFIG, DB_CONNECTION } from "./types/types_db.ts";
import { Graph } from "./db/db_operations.ts";
import { edges_map } from "./lines/lines_edges.ts";
import { lines as stations_map } from "./lines/lines_create_lines.ts";
import { schema_queries } from "./db/schema_queries.ts";
// import { SURREAL_HTTP_QUERY } from "./fetch/http_query.ts";
// import { HTTP_DB_RESULTS } from "./types/types_lines.ts";

const my_db_connection: DB_CONNECTION = {
  url: "http://127.0.0.1:8000/rpc",
  username: "yay_root",
  password: "yay_root",
  namespace: "yay_leads",
  database: "yay_leads",
};

const http_db_connection: CONNECTION_CONFIG = {
  auth: {
    username: my_db_connection.username,
    password: my_db_connection.password,
  },
  db: {
    name: my_db_connection.database,
    namespace: my_db_connection.namespace,
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

      // const shq = new SURREAL_HTTP_QUERY(http_db_connection);
      // const r = await shq.fetch_database(query) as HTTP_DB_RESULTS[];

      // console.log(g.result);
    } else {
      console.error("Failed to connect to DB");
    }
  } catch (e) {
    console.error("An error occurred:", e);
  }
}

await main();
