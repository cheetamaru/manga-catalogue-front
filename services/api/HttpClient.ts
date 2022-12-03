import { $Fetch } from "nitropack";
import { BaseApiService } from "./BaseApiService";
import {
    RequestPayload,
    MethodRequestPayload,
    HttpMethod, 
    IApiService,
    Response,
} from "./types";

export class HttpClient implements IApiService {
    private readonly client: $Fetch;
    [prop: string]: any

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

    setSubClient (name: string, subclient: BaseApiService) {
        this[name] = subclient
    }
}
