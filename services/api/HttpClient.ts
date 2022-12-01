import { $Fetch } from "nitropack";
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

    async request<T>({
        method,
        url,
        query,
        body,
        options
    }: RequestPayload): Response<T> {
        // try {
            const data = await this.client(url,
                {
                    method,
                    query,
                    body,
                    ...options
                })
            return data as Response<T> // TODO: remove as
        // } catch (error) {
        //     return error.data
        // }
    }

    // post () {

    // }

    get<T>(payload: MethodRequestPayload) {
        return this.request<T>({
            method: HttpMethod.GET,
            ...payload
        })
    }

    // patch () {
        
    // }

    // delete () {
        
    // }
}