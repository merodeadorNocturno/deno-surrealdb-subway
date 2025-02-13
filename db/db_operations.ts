import Surreal, { ConnectionStatus, QueryResult } from "@surrealdb/surrealdb";
import {
  DB_DATA_OBJECT,
  EDGES_MAP,
  SCHEMA_QUERIES,
  STATIONS_MAP,
} from "../types/types_lines.ts";
import { async_iterator } from "../utils/utils_async_iterator.ts";
import { generate_station_id } from "../utils/utils_stations.ts";

export class Graph {
  private db: Surreal;
  private edges_map: EDGES_MAP;
  private schema_queries: SCHEMA_QUERIES;
  private stations_map: STATIONS_MAP;

  private query_result: QueryResult<unknown>[] | undefined;
  constructor(
    db: Surreal,
    edges_map: EDGES_MAP,
    schema_queries: SCHEMA_QUERIES,
    stations_map: STATIONS_MAP,
  ) {
    this.db = db;
    this.edges_map = edges_map;
    this.schema_queries = schema_queries;
    this.stations_map = stations_map;
  }

  private async create_schema(): Promise<void> {
    try {
      console.log("Creating Schema");
      await this.execute_queries(this.schema_queries as string[]);
    } catch (error) {
      console.error("Error creating schema:", error);
      throw new Error("Failed to create database schema."); // Custom error
    }
  }

  private async store_lines(): Promise<void> {
    const query_array_lines: string[] = [];

    for (const [line, station_name] of this.stations_map) {
      const line_id = `line:${line}`;
      const line_query = `CREATE ${line_id} SET name = 'Línea ${line} ${
        station_name[0]
      } - ${station_name[station_name.length - 1]}'`;

      query_array_lines.push(line_query);
    }
    await this.execute_queries(query_array_lines);
  }

  private async store_stations(): Promise<void> {
    const query_array_stations: string[] = [];
    const query_line_has_stations: string[] = [];

    for (const [line_id, arr_stations] of this.stations_map) {
      for (let i = 0; i < arr_stations.length; i++) {
        const station_id = generate_station_id(arr_stations[i], line_id);

        const station_creation_query = `CREATE ${station_id} SET name = '${
          arr_stations[i]
        }', line_id = line:${line_id}`;
        const relation_line_has_station = `RELATE line:${line_id}->has->${station_id}`;

        query_array_stations.push(station_creation_query);
        query_line_has_stations.push(relation_line_has_station);
      }
    }

    await this.execute_queries(query_array_stations);
    await this.execute_queries(query_line_has_stations);
  }

  private async create_relations_connects_to(): Promise<void> {
    const connections_array: string[] = [];
    for (const [_line, stations] of this.edges_map) {
      for (const station_coonection of stations) {
        const [from, to] = station_coonection.station.split("-");
        const from_to = `RELATE ${from}->connects_to->${to}`;
        const to_from = `RELATE ${to}->connects_to->${from}`;

        connections_array.push(from_to);
        connections_array.push(to_from);
      }
    }

    await this.execute_queries(connections_array);
  }

  async execute_query(query: string): Promise<unknown> {
    const query_in_array = [query];

    const result = await this.execute_queries(query_in_array);

    return result;
  }

  async generate_db(): Promise<void> {
    try {
      console.log("Creating Schema");
      await this.create_schema();
      console.log("Creating Lines");
      await this.store_lines();
      console.log("Creating Stations & Relating stations to lines");
      await this.store_stations();
      console.log("Connecting stations");
      await this.create_relations_connects_to();
    } catch (e) {
      console.error("Error generating database:", e);
      throw e;
    }
  }

  private async execute_queries(queries: string[]): Promise<void> {
    for await (const result of async_iterator(this.db, queries)) {
      this.query_result = result;
    }
  }

  get status(): ConnectionStatus {
    return this.db.status;
  }

  get result(): QueryResult<unknown>[] | undefined {
    return this.query_result;
  }
}
