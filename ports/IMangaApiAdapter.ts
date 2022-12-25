import type { AsyncData, AsyncDataOptions } from 'nuxt/dist/app/composables/asyncData'
import type { MangaTitle } from '~~/types/ApiTypes';
import type { MangaListFetchQuery, ResponseError, MangaListResponse } from '~~/types/Types'
import type { ComputedRef } from 'vue'

export type IMangaApiAdapter = {
    fetchList: (
        query: ComputedRef<MangaListFetchQuery>,
        asyncDataOptions?: AsyncDataOptions<MangaListResponse>
    ) => AsyncData<MangaListResponse, ResponseError | null>;
    fetchItem: (
        id: string,
        asyncDataOptions?: AsyncDataOptions<MangaTitle>
    ) => AsyncData<MangaTitle, ResponseError | null>
}
