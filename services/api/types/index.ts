import { FetchOptions, FetchError, FetchRequest } from "ofetch";

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

export type Response<T, E = FetchError<T>> = {
    data?: T;
    status?: number;
    request?: FetchRequest;
    error?: E
}

export type RequestReturnValue<T, E> = Promise<Response<T, E>>

export type ApiServiceMethod = <T, E>(payload: MethodRequestPayload) => RequestReturnValue<T, E>

export interface IApiService {
    get: ApiServiceMethod
}