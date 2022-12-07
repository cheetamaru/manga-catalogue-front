import { HttpClient } from "@/shared/services/api/HttpClient"
import {
    ApiRequestPayload,
    ApiMethodRequestPayload,
    HttpMethod,
    IApiService,
    ApiResponse,
} from "./types";

export class BaseApiService implements IApiService {
    protected apiNamespace: string = '';
    private readonly client: HttpClient;

    constructor (client: HttpClient) {
        this.client = client
    }

    private getNamespacedUrl (url: string) {
        if (!url) {
          return this.apiNamespace;
        }

        return this.apiNamespace ? `${this.apiNamespace}${url}` : url;
    }

    requsest<T>({
        url,
        method,
        query,
        body,
        options
    }: ApiRequestPayload): ApiResponse<T> {
        return this.client[method]({
            url: this.getNamespacedUrl(url),
            query,
            body,
            options
        })
    }

    get<T>(payload: ApiMethodRequestPayload) {
        return this.requsest<T>({
            method: HttpMethod.GET,
            ...payload
        })
    }
}