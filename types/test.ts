import { MangaTitle } from "./ApiTypes"

export type TestError = { data: {status: string[]} }
export type TestType = { results: MangaTitle[]}
export type FetchListQuery = {
    search?: string;
    ordering?: string;
    authors?: string;
    genres?: string;
    status?: string;
    page?: number;
  }