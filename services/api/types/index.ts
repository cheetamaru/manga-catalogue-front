import { FetchResponse, SearchParameters, FetchOptions } from "ofetch";

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

export type Response<T> = Promise<FetchResponse<T>>

export type ApiServiceMethod = <T>(payload: MethodRequestPayload) => Response<T>

export interface IApiService {
    get: ApiServiceMethod
}