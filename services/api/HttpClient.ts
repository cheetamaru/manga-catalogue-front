import { $Fetch } from "nitropack";
import { FetchError } from "ofetch";
import {
    RequestPayload,
    MethodRequestPayload,
    HttpMethod, 
    IApiService,
    RequestReturnValue,
} from "./types";

export class HttpClient implements IApiService {
    private readonly client: $Fetch;

    constructor(client: $Fetch) {
        this.client = client
    }

    async request<T, E>({
        method,
        url,
        query,
        body,
        options
    }: RequestPayload): RequestReturnValue<T, E> {
        try {
            const data = await this.client<T>(url,
                {
                    method,
                    query,
                    body,
                    ...options
                })
            return { data }
        } catch (e) {
            if (!(e instanceof FetchError<T>)) {
                return {
                    status: -1
                }
            }

            return {
                error: e.data,
                status: e.status,
                request: e.request
            }
        }
    }

    // post () {

    // }

    get<T, E>(payload: MethodRequestPayload) {
        return this.request<T, E>({
            method: HttpMethod.GET,
            ...payload
        })
    }

    // patch () {
        
    // }

    // delete () {
        
    // }
}
