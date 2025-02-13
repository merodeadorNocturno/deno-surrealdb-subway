import { SCHEMA_QUERIES } from "../types/types_lines.ts";

export const schema_queries: SCHEMA_QUERIES = [
  "DEFINE TABLE line SCHEMAFULL;",
  "DEFINE FIELD name ON TABLE line TYPE string;",
  "DEFINE TABLE station SCHEMAFULL;",
  "DEFINE FIELD name ON TABLE station TYPE string;",
  "DEFINE FIELD line_id ON TABLE station TYPE record<line>;",
  "DEFINE TABLE has TYPE RELATION IN line OUT station;",
  "DEFINE TABLE connects_to TYPE RELATION IN station OUT station;",
];
