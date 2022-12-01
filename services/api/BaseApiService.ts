import { HttpClient } from "@/services/api/HttpClient"
import {
    RequestPayload,
    MethodRequestPayload,
    HttpMethod,
    IApiService,
    Response
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
    }: RequestPayload): Response<T> {
        return this.client[method]({
            url: this.getNamespacedUrl(url),
            query,
            body,
            options
        })
    }

    get<T>(payload: MethodRequestPayload) {
        return this.requsest<T>({
            method: HttpMethod.GET,
            ...payload
        })
    }
}