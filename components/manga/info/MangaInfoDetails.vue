<template>
  <v-sheet class="pa-3">
    <div>
      <div class="text-h5 font-weight-bold">
        Information
      </div>
      <v-divider class="pb-2" />
      <div>
        <strong>Status</strong>: <MangaPublishingStatus :status="mangaTitle?.status" />
      </div>
      <div
        v-for="item of detailsList"
        :key="item.title"
      >
        <strong>{{ item.title }}</strong>: {{ item.value }}
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';

type DetailsItem = {
  title: string;
  value: string | number
}

const props = defineProps<{
    mangaTitle: MangaTitle | null;
    authors: string;
    genres: string;
}>()

const createDetailsItem = (
  title: DetailsItem['title'],
  value?: DetailsItem['value'] | null) => {
  return {
    title,
    value: value || 'unknown',
  }
}

const detailsList = computed<DetailsItem[]>(() => [
  createDetailsItem('Chapters', props.mangaTitle?.chapterCount),
  createDetailsItem('Volumes', props.mangaTitle?.volumeCount),
  createDetailsItem('Authors', props.authors),
  createDetailsItem('Start Date', props.mangaTitle?.startDate),
  createDetailsItem('End Date', props.mangaTitle?.endDate || '-'),
  createDetailsItem('Genres', props.genres),
])
</script>
