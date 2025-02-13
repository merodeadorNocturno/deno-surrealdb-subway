import { RecordId } from "@surrealdb/surrealdb";

type AUTH = {
    username: string,
    password: string,
}

type DB_PARAMS = {
    namespace: string,
    name: string,
}

export type DB_CONNECTION = {
    url: string,
    username: string,
    password: string,
    namespace: string,
    database: string,
};

export type HTTP_PARAMS = {
    db?: string,
    protocol: 'https' | 'http',
    url: string,
    port: number | undefined,
    method: METHOD,
}

export type CONNECTION_CONFIG = {
    auth: AUTH,
    db: DB_PARAMS,
    http: HTTP_PARAMS,
};

export type METHOD = 'POST' | 'GET';

export type SURREAL_HTTP_HEADERS = {
    Accept: string,
    'surreal-ns': string,
    'surreal-db': string,
};

export type TABLE_LINE = {
    id: RecordId<'line'>,
    name: string,
};

export type TABLE_STATION = {
    id: RecordId<'station'>,
    name: string,
    line_id: RecordId<'line'>,
}

export type TABLE_CONNECTS_TO = {
    in: RecordId<'station'>,
    out: RecordId<'station'>,
}

export type TABLE_HAS = {
    in: RecordId<'line'>,
    out: RecordId<'station'>,
}
