import { Surreal } from "@surrealdb/surrealdb";
import { CONNECTION_CONFIG } from "../types/types_db.ts";

export const db = new Surreal();

export async function connect_to_db(db: Surreal, conn: CONNECTION_CONFIG): Promise<Surreal> {
    const { db: db_params, auth, http} = conn;
    const { username, password } = auth;

    const db_request_url = `${http.protocol}://${http.url}${http?.port ? ':' + http.port : ''}/rpc`;
    const { namespace, name: database } = db_params;
    
    await db.connect(db_request_url);

    await db.use({
        namespace,
        database,
    });

    await db.signin({
        username,
        password,
    });

    return db;
}