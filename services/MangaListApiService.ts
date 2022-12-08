import { BaseApiService } from "@/shared/services/api/BaseApiService"
import { FetchListQuery } from "~~/types/test"

export class MangaListApiService extends BaseApiService {
    apiNamespace = '/list/'

    fetchList<T>(query?: FetchListQuery) {
        return this.get<T>({url: '', query})
    }
}