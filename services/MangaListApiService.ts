import { BaseApiService } from '@/shared/services/api/BaseApiService'
import { MangaListFetchQuery } from '~~/types/Types'

export class MangaListApiService extends BaseApiService {
  apiNamespace = ''

  fetchList<T>(query?: MangaListFetchQuery) {
    return this.get<T>({url: '/list/', query})
  }

  fetchItem<T>(id: string) {
    return this.get<T>({url: `/getById/${id}`})
  }
}
