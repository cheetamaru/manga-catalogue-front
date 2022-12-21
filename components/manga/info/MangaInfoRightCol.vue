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
      <div>
        <strong>Chapters</strong>: {{ mangaTitle?.chapterCount }}
      </div>
      <div>
        <strong>Volumes</strong>: {{ mangaTitle?.volumeCount }}
      </div>
      <div>
        <strong>Authors</strong>: {{ mangaTitle?.authors?.map((el) => `${el.firstName} ${el.surname}`).join(', ') }}
      </div>
      <div>
        <strong>Start Date</strong>: {{ mangaTitle?.startDate }}
      </div>
      <div>
        <strong>End Date</strong>: {{ mangaTitle?.endDate || '-' }}
      </div>
      <div>
        <strong>Genres</strong>: {{ mangaTitle?.genres?.map((el) => `${el.name}`).join(', ') }}
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';

defineProps<{
    mangaTitle: MangaTitle | null
}>()
</script>
