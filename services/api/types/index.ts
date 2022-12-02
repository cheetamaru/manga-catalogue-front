import { FetchOptions, FetchError } from "ofetch";

export enum HttpMethod {
    GET = 'get'
}

export type RequestPayload = {
    method: HttpMethod,
    url: string,
    query?: FetchOptions["query"],
    body?: FetchOptions['body'],
    options?: Omit<FetchOptions, "method" | "url" | "query" | "params" | "body">
}

export type MethodRequestPayload = Omit<RequestPayload, "method">

export type Response<T, E> = Promise<T | FetchError<E>>

export type ApiServiceMethod = <T, E>(payload: MethodRequestPayload) => Response<T, E>

export interface IApiService {
    get: ApiServiceMethod
}