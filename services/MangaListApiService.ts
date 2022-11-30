import { HttpClient } from "@/services/api/HttpClient"

export class MangaListApiService {
    private readonly apiNamespace: string;
    private readonly client: HttpClient;

    constructor (apiNamespace: string, client: HttpClient) {
        this.apiNamespace = apiNamespace;
        this.client = client
    }

    fetchList () {
        return this.client.get({url: this.apiNamespace + ''})
    }
}