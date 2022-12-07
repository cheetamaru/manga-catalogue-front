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

    request<T>({
        method,
        url,
        query,
        body,
        options
    }: ApiRequestPayload): ApiResponse<T> {
        // try {
            return this.client<T>(url,
                {
                    method,
                    query,
                    body,
                    ...options
                })
                // .then((response): response is T => {
                //     return response
                // })
                // .catch((e): e is ApiError<E> => {
                //     return e
                // })
            // return response
        // } catch (e) {
        //     return e as ApiError<E>
        // }
        
    }

    // post () {

    // }

    get<T>(payload: ApiMethodRequestPayload) {
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
