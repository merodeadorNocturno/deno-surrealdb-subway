# Deno, SurrealDB, and the Subway: A Graph Database Example

This repository demonstrates how to connect to SurrealDB from a Deno application and use SurrealDB's graph database features to model a subway system.

## Prerequisites

*   [Deno](https://deno.land/) installed
*   [Docker](https://www.docker.com/) installed
*   Git installed

## Setup

1.  **Clone the repository:**

```bash
git clone https://github.com/merodeadorNocturno/deno-surrealdb-subway.git
cd deno-surrealdb-subway
```
(Replace with your actual repository URL)

2.  **Start SurrealDB (using Docker):**

```bash
docker run --rm -p 8000:8000 surrealdb/surrealdb:latest start --user yay_root --pass yay_root file:subway.db
```
Modify `main.ts` to connect to `subway.db` file:
```typescript
const my_db_connection: DB_CONNECTION = {
url: "file:subway.db",
username: "yay_root",
password: "yay_root",
namespace: "test",
database: "test",
};
```

3.  **Run the Deno application:**

```bash
deno run --allow-net --allow-read --allow-write main.ts
```
Or you can execute
```bash
deno task dev
```

The `--allow-net` flag is required for network access (connecting to SurrealDB).  `--allow-read` and `--allow-write` are needed to read/write from the database.

## Code Overview

*   **`db/`:** Contains files related to database connection and operations.
    *   `db/index.ts`:  Establishes the connection to SurrealDB.
    *   `db/db_operations.ts`:  Defines the `Graph` class, which handles creating the schema, storing lines and stations, and creating relationships.
    *   `db/schema_queries.ts`:  Contains the SurrealQL schema definition.
    *   `db/fake_surreal.ts`: Contains a fake implementation of SurrealDb, used to write unit tests.
    *   `db/db_operations.test.ts`: Unit tests using FakeSurreal class.
*   **`lines/`:** Contains data representing the subway lines and stations.
    *   `lines/lines_create_lines.ts`:  Defines the stations for each line.
    *   `lines/lines_edges.ts`:  Defines the connections (edges) between stations, including distances.
*   **`types/`:**  TypeScript type definitions.
*   **`utils/`:** Utility functions.
    *    `utils/utils_async_iterator.ts`: Creates a SurrealDb query iterator.
    *    `utils/utils_stations.ts`: Generates the station id.
*   **`main.ts`:** The main application file that connects to the database and builds the graph.
*   **`deno.json`:** Configuration for the deno project.

## Key Concepts

*   **Graph Database:**  SurrealDB is a multi-model database that excels at representing relationships between data points.  We use this to model the connections between subway stations.
*   **Records and Relationships:** In SurrealDB, nodes are represented as records, and edges are represented as relationships.
*   **SurrealQL:** SurrealDB's query language, which is similar to SQL but with extensions for working with graphs.
*   **Schemafull vs. Schemaless:** SurrealDB allows you to define a strict schema (as we do here) or work in a more flexible, schemaless way.

## Running the Tests
```bash
deno test --allow-all
```

*   **Stage, commit and upload `README.md` file**
 ```bash
   git add .
   git commit -m "Add README.md"
   git push
```

