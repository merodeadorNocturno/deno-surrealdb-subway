import { CONNECTION_CONFIG, HTTP_PARAMS, METHOD, SURREAL_HTTP_HEADERS } from "../types/types_db.ts";
// import { LINE_EDGE } from "../types/types_lines.ts"; 

export class SURREAL_HTTP_QUERY {
    private username: string;
    private password: string;
    private namespace: string;
    private database: string;
    private http: HTTP_PARAMS;
    // private metho
    private headers: SURREAL_HTTP_HEADERS = {
        Accept: 'application/json',
        "surreal-ns": '',
        'surreal-db': '',
    }
    constructor(http_connection: CONNECTION_CONFIG) {
        this.username = http_connection.auth.username;
        this.password = http_connection.auth.password;
        this.database = http_connection.db.name;
        this.namespace = http_connection.db.namespace;
        this.http = http_connection.http;

        this.headers["surreal-db"] = this.database;
        this.headers["surreal-ns"] = this.namespace;
    }

    async fetch_database<T>(query: string, method: METHOD = 'POST'): Promise<unknown> {
        try {
            const db_request_url = `${this.http.protocol}://${this.username}:${this.password}@${this.http.url}${this.http?.port ? ':' + this.http.port : ''}/sql`;

        const response: Response = await fetch(
            db_request_url,
            {
                headers: {
                    Accept: this.headers.Accept,
                    'surreal-db': this.headers["surreal-db"],
                    'surreal-ns': this.headers["surreal-ns"],
                },
                method,
                body: query,
            }

        );
        const raw_db_data = await response.json();

        if (typeof raw_db_data === 'string') {
            return raw_db_data;
        }

        return raw_db_data;
        } catch (error) {
            console.log('ERR ::', error);
        }
    }
}