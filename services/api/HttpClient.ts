import { FetchResponse } from "ofetch";
import type { RequestPayload, MethodRequestPayload } from "./types";

type ReturnValue<T> = Promise<FetchResponse<T>>

type ActionMethodSignature = <T>(payload: MethodRequestPayload) => ReturnValue<T>


interface ApiSignature {
    get: ActionMethodSignature
}

export class HttpClient implements ApiSignature {
    private readonly client: typeof $fetch;

    constructor(client: typeof $fetch) {
        this.client = client
    }

    async request<T>({
        method,
        url,
        query,
        body
    }: RequestPayload): ReturnValue<T> {
        // try {
            const data = await this.client(url,
                {
                    method,
                    query,
                    body
                })
            return data as ReturnValue<T> // TODO: remove as
        // } catch (error) {
        //     return error.data
        // }
    }

    // post () {

    // }

    get<T>(payload: MethodRequestPayload) {
        return this.request<T>({
            method: 'get',
            ...payload
        })
    }

    // patch () {
        
    // }

    // delete () {
        
    // }
}