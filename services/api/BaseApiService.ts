import { HttpClient } from "@/services/api/HttpClient"
import {
    RequestPayload,
    MethodRequestPayload,
    HttpMethod,
    IApiService,
    Response,
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

    requsest<T, E>({
        url,
        method,
        query,
        body,
        options
    }: RequestPayload): Response<T, E> {
        return this.client[method]({
            url: this.getNamespacedUrl(url),
            query,
            body,
            options
        })
    }

    get<T, E>(payload: MethodRequestPayload) {
        return this.requsest<T, E>({
            method: HttpMethod.GET,
            ...payload
        })
    }
}