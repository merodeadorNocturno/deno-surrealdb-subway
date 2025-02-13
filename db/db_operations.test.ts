// db/db_operations.test.ts
import {
  assertEquals,
  assertRejects,
} from "https://deno.land/std@0.217.0/assert/mod.ts";
import { FakeSurreal } from "./fake_surreal.ts";
import { Graph } from "./db_operations.ts";
import Surreal, { ConnectionStatus } from "@surrealdb/surrealdb";

// Mock data
const mockEdgesMap = new Map([
  ["line1", [{ station: "station:A-station:B", distance: 10, line: ["1"] }]],
]);

const mockSchemaQueries = ["DEFINE TABLE test_table SCHEMAFULL;"];

const mockStationsMap = new Map([["1", ["A", "B"]]]);

Deno.test("Graph Class - Constructor", () => {
  const db = new FakeSurreal();
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  assertEquals(
    graph["db"],
    db as unknown as Surreal,
    "Database instance not properly set.",
  );
  assertEquals(graph["edges_map"], mockEdgesMap, "Edges map not properly set.");
  assertEquals(
    graph["schema_queries"],
    mockSchemaQueries,
    "Schema queries not properly set.",
  );
  assertEquals(
    graph["stations_map"],
    mockStationsMap,
    "Stations map not properly set.",
  );
});

Deno.test("Graph Class - execute_queries - success", async () => {
  const db = new FakeSurreal();
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  const queries = ["SELECT * FROM test_table;"];
  await graph["execute_queries"](queries);

  assertEquals(db.queries, queries, "Queries not executed correctly.");
});

Deno.test("Graph Class - create_schema - success", async () => {
  const db = new FakeSurreal();
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await graph["create_schema"]();

  assertEquals(
    db.queries,
    mockSchemaQueries,
    "Schema queries not executed correctly.",
  );
});

Deno.test("Graph Class - store_lines - success", async () => {
  const db = new FakeSurreal();
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await graph["store_lines"]();
  const expectedQuery = `CREATE line:1 SET name = 'Línea 1 A - B'`;

  assertEquals(
    db.queries[0],
    expectedQuery,
    "Line queries not executed correctly.",
  );
});

Deno.test("Graph Class - store_stations - success", async () => {
  const db = new FakeSurreal();
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await graph["store_stations"]();

  const stationA_query = `CREATE station:A_1 SET name = 'A', line_id = line:1`;
  const stationB_query = `CREATE station:B_1 SET name = 'B', line_id = line:1`;
  const relation_A = `RELATE line:1->has->station:A_1`;
  const relation_B = `RELATE line:1->has->station:B_1`;

  assertEquals(
    db.queries[0],
    stationA_query,
    "Stations query A not executed correctly.",
  );
  assertEquals(
    db.queries[1],
    stationB_query,
    "Stations query B not executed correctly.",
  );
  assertEquals(db.queries[2], relation_A, "relation_A not executed correctly.");
  assertEquals(db.queries[3], relation_B, "relation_B not executed correctly.");
});

Deno.test("Graph Class - create_relations_connects_to - success", async () => {
  const db = new FakeSurreal();
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await graph["create_relations_connects_to"]();

  const fromToQuery = `RELATE station:A->connects_to->station:B`;
  const toFromQuery = `RELATE station:B->connects_to->station:A`;

  assertEquals(
    db.queries[0],
    fromToQuery,
    "From-To relation query is incorrect",
  );
  assertEquals(
    db.queries[1],
    toFromQuery,
    "To-From relation query is incorrect",
  );
});

Deno.test("Graph Class - generate_db - success", async () => {
  const db = new FakeSurreal();
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await graph.generate_db();

  assertEquals(db.queries.length, 8, "Not all methods were executed");
});

// --- Error Cases ---
Deno.test("Graph Class - execute_queries - failure", async () => {
  const db = new FakeSurreal();
  db.shouldThrow = true;
  db.errorMessage = "Failed to execute database queries.";
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  const queries = ["SELECT * FROM test_table;"];

  await assertRejects(
    async () => {
      await graph["execute_queries"](queries);
    },
    Error,
    "Failed to execute database queries.",
    "execute_queries should reject with the correct error message.",
  );
});

Deno.test("Graph Class - create_schema - failure", async () => {
  const db = new FakeSurreal();
  db.shouldThrow = true;
  db.errorMessage = "Failed to create database schema.";
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await assertRejects(
    async () => {
      await graph["create_schema"]();
    },
    Error,
    "Failed to create database schema.",
    "create_schema should reject with the correct error message.",
  );
});

Deno.test("Graph Class - store_lines - failure", async () => {
  const db = new FakeSurreal();
  db.shouldThrow = true;
  db.errorMessage = "Failed to store lines in the database.";
  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await assertRejects(
    async () => {
      await graph["store_lines"]();
    },
    Error,
    "Failed to store lines in the database.",
    "create_schema should reject with the correct error message.",
  );
});

Deno.test("Graph Class - generate_db - failure", async () => {
  const db = new FakeSurreal();
  db.shouldThrow = true;
  db.errorMessage = "Error during database generation, rolling back:";

  const graph = new Graph(
    db as any,
    mockEdgesMap,
    mockSchemaQueries,
    mockStationsMap,
  );

  await assertRejects(
    async () => {
      await graph.generate_db();
    },
    Error,
    "Failed to create database schema.",
    "createSchema should reject with the correct error message.",
  );
});
