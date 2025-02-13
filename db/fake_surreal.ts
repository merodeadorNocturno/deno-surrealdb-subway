// ./db/fake_surreal.ts
import { ConnectionStatus, QueryResult } from "@surrealdb/surrealdb";

export class FakeSurreal {
  public queries: string[] = [];
  public status: ConnectionStatus = ConnectionStatus.Connected;
  public shouldThrow: boolean = false;
  public errorMessage: string = "Fake SurrealDB Error"; // Customizable error message

  async query<T>(
    sql: string,
    vars?: Record<string, unknown> | undefined,
  ): Promise<QueryResult<T>[]> {
    this.queries.push(sql);

    if (this.shouldThrow) {
      throw new Error(this.errorMessage); // Use customizable error message
    }

    return [{ result: [] as any, status: "OK", time: "0ms" }];
  }

  async queryRaw<T>(
    sql: string,
    vars?: Record<string, unknown> | undefined,
  ): Promise<QueryResult<T>[]> {
    this.queries.push(sql);

    if (this.shouldThrow) {
      throw new Error(this.errorMessage); // Use customizable error message
    }

    return [{ result: [] as any, status: "OK", time: "0ms" }];
  }

  connect(endpoint: string, params?: any): Promise<void> {
    return new Promise((resolve) => {
      console.log(`Connected to ${endpoint}`);
      this.status = ConnectionStatus.Connected;
      resolve();
    });
  }

  use(options: { namespace: string; database: string }): Promise<void> {
    return new Promise((resolve) => {
      console.log(
        `Connecting to namespace ${options.namespace} and database ${options.database}`,
      );
      resolve();
    });
  }

  signin(credentials: Record<string, unknown>): Promise<void> {
    return new Promise((resolve) => {
      console.log(`Signing in with username ${credentials.username}`);
      resolve();
    });
  }
}
