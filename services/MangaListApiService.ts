import { BaseApiService } from '@/shared/services/api/BaseApiService'
import { FetchListQuery } from '~~/types/test'

export class MangaListApiService extends BaseApiService {
  apiNamespace = ''

  fetchList<T>(query?: FetchListQuery) {
    return this.get<T>({url: '/list/', query})
  }

  fetchItem<T>(id: string) {
    return this.get<T>({url: `/getById/${id}`})
  }
}
