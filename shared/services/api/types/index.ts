import { FetchOptions, FetchError } from "ofetch";

export enum HttpMethod {
    GET = 'get'
}

export type ApiRequestPayload = {
    method: HttpMethod,
    url: string,
    query?: FetchOptions["query"],
    body?: FetchOptions['body'],
    options?: Omit<FetchOptions, "method" | "url" | "query" | "params" | "body">
}

export type ApiMethodRequestPayload = Omit<ApiRequestPayload, "method">

export type ApiError<E> = FetchError<E>

export type ApiResponse<T> = Promise<T>

export type ApiServiceMethod = <T>(payload: ApiMethodRequestPayload) => ApiResponse<T>

export interface IApiService {
    get: ApiServiceMethod
}