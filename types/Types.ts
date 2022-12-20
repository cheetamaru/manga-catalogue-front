import { MangaTitle } from './ApiTypes'

export type ResponseError = { data: unknown }
export type MangaListResponse = { results: MangaTitle[], count: number }

export type MangaPublishingStatus = NonNullable<MangaTitle['status']>

export type MangaListFetchQuery = {
    search?: string;
    ordering?: string;
    authors?: string;
    genres?: string;
    status?: string;
    page?: number;
  }
