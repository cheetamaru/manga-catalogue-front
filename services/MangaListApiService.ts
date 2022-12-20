import { BaseApiService } from '@/shared/services/api/BaseApiService'
import type { MangaListFetchQuery, MangaListResponse } from '~~/types/Types'
import type { MangaTitle } from '~~/types/ApiTypes';

export class MangaListApiService extends BaseApiService {
  apiNamespace = ''

  fetchList(query?: MangaListFetchQuery) {
    return this.get<MangaListResponse>({url: '/list/', query})
  }

  fetchItem(id: string) {
    return this.get<MangaTitle>({url: `/getById/${id}`})
  }
}
