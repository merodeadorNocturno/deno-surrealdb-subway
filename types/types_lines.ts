import Surreal from "@surrealdb/surrealdb";

export type LINE = string[];
export type EDGE = {
  station: string;
  distance: number;
  line: string[];
};

export interface EDGES_MAP extends Map<string, EDGE[]> {}
export interface STATIONS_MAP extends Map<string, STATION> {};


export type EDGES = {
  line1: EDGE[];
  line2: EDGE[];
  line3: EDGE[];
  line4: EDGE[];
  line5: EDGE[];
  line6: EDGE[];
  line7: EDGE[];
  line8: EDGE[];
  line9: EDGE[];
  line12: EDGE[];
  lineA: EDGE[];
  lineB: EDGE[];
};

export type STATION = string[];

export type STATIONS = {
  line1: STATION;
  line2: STATION;
  line3: STATION;
  line4: STATION;
  line5: STATION;
  line6: STATION;
  line7: STATION;
  line8: STATION;
  line9: STATION;
  lineA: STATION;
  lineB: STATION;
  line12: STATION;
};


export type SCHEMA_QUERIES = string[];

export type DB_DATA_OBJECT = {
  db_instance: Surreal;
  edges_map: EDGES_MAP;
  schema_queries: SCHEMA_QUERIES;
  stations_map: STATIONS_MAP;
};

export type HTTP_DB_RESULTS = {
  result: {
    name: string;
    station: EDGE;
  }[];
};
