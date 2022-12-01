import { HttpClient } from "@/services/api/HttpClient"
import { RequestPayload, MethodRequestPayload } from "./types";

export class BaseApiService {
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

    requsest ({
        url,
        method,
        query,
        body
    }: RequestPayload) {
        return this.client[method]({
            url: this.getNamespacedUrl(url),
            query,
            body
        })
    }

    get(payload: MethodRequestPayload) {
        return this.requsest({
            method: 'get',
            ...payload
        })
    }
}