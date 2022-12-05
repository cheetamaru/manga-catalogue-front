import { $Fetch } from "nitropack";
import {
    ApiRequestPayload,
    ApiMethodRequestPayload,
    HttpMethod, 
    IApiService,
    ApiResponse,
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
    }: ApiRequestPayload): ApiResponse<T, E> {
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

    get<T, E>(payload: ApiMethodRequestPayload) {
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
