import { $Fetch } from "nitropack";
import { FetchError } from "ofetch";
import {
    RequestPayload,
    MethodRequestPayload,
    HttpMethod, 
    IApiService,
    Response,
} from "./types";

export class HttpClient implements IApiService {
    private readonly client: $Fetch;

    constructor(client: $Fetch) {
        this.client = client
    }

    request<T, E>({
        method,
        url,
        query,
        body,
        options
    }: RequestPayload): Response<T, E> {
        return this.client<T>(url,
            {
                method,
                query,
                body,
                ...options
            })
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
