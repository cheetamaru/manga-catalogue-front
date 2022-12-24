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
        <strong>Authors</strong>: {{ authors }}
      </div>
      <div>
        <strong>Start Date</strong>: {{ mangaTitle?.startDate }}
      </div>
      <div>
        <strong>End Date</strong>: {{ mangaTitle?.endDate || '-' }}
      </div>
      <div>
        <strong>Genres</strong>: {{ genres }}
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';

defineProps<{
    mangaTitle: MangaTitle | null;
    authors: string;
    genres: string;
}>()
</script>
