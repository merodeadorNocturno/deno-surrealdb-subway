import Surreal, { QueryResult } from "@surrealdb/surrealdb";

export function async_iterator(
  db: Surreal,
  queries: string[] = [],
  print_return_value: boolean = false,
): {
  [Symbol.asyncIterator](): {
    next(): Promise<{
      value: QueryResult<unknown>[] | undefined;
      done: boolean;
    }>;
  };
} {
  let counter = 0;
  const queriesLength = queries.length;

  return {
    [Symbol.asyncIterator]() {
      return {
        next: async (): Promise<{
          value: QueryResult<unknown>[] | undefined;
          done: boolean;
        }> => {
          if (counter < queriesLength) {
            const query = queries[counter];
            const value = await db.queryRaw(query);
            counter += 1;
            if (print_return_value) {
              console.log(query);
            }
            return {
              value,
              done: false,
            };
          }

          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}
