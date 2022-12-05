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

export type ApiResponse<T, E> = Promise<T | ApiError<E>>

export type ApiServiceMethod = <T, E>(payload: ApiMethodRequestPayload) => ApiResponse<T, E>

export interface IApiService {
    get: ApiServiceMethod
}