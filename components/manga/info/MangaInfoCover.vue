<template>
  <v-sheet class="pa-3">
    <div class="text-h4 text-center mb-2">
      {{ mangaTitle?.title }}
    </div>
    <v-divider class="pb-2" />
    <v-card flat>
      <v-img
        v-if="mangaTitle?.firstCoverImage"
        :src="mangaTitle.firstCoverImage"
        :lazy-src="mangaTitle.firstCoverImage"
        :aspect-ratio="2/3"
      />
      <v-card-subtitle class="text-center">
        {{ $t('mangaInfo.subtitle.firstCover') }}
      </v-card-subtitle>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';

defineProps<{
    mangaTitle: MangaTitle | null
}>()
</script>
