/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MangaAuthor {
  /** ID */
  id?: number;
  /**
   * FirstName
   * @minLength 1
   * @maxLength 100
   */
  firstName?: string;
  /**
   * Surname
   * @minLength 1
   * @maxLength 100
   */
  surname?: string;
}

export interface Genre {
  /** ID */
  id?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 50
   */
  name: string;
}

export interface MangaTitle {
  /** ID */
  id?: number;
  authors?: MangaAuthor[];
  genres?: Genre[];
  /**
   * CreatedAt
   * @format date-time
   */
  createdAt?: string;
  /**
   * UpdatedAt
   * @format date-time
   */
  updatedAt?: string;
  /**
   * Title
   * @minLength 1
   * @maxLength 200
   */
  title: string;
  /** Description */
  description?: string | null;
  /** ChapterCount */
  chapterCount?: number;
  /** VolumeCount */
  volumeCount?: number;
  /**
   * StartDate
   * @format date
   */
  startDate?: string | null;
  /**
   * EndDate
   * @format date
   */
  endDate?: string | null;
  /**
   * FirstCoverImage
   * @format uri
   */
  firstCoverImage?: string | null;
  /** Status */
  status?: "finished" | "ongoing" | "hiatus" | "canceled" | "notstarted" | null;
}
