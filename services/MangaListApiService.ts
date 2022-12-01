import { BaseApiService } from "./api/BaseApiService"

export class MangaListApiService extends BaseApiService {
    apiNamespace = '/list/'

    fetchList () {
        return this.get({url: ''})
    }
}