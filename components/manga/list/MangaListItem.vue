<template>
  <v-card
    hover
    elevation="2"
    width="250px"
    max-height="500px"
    :to="to"
  >
    <v-img
      v-if="item?.firstCoverImage"
      :src="item.firstCoverImage"
      :lazy-src="item.firstCoverImage"
      :aspect-ratio="2/3"
      max-height="300px"
    />

    <v-card-title>
      {{ item?.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ $t('mangaInfo.label.status') }}: <MangaPublishingStatus :status="item?.status" />
    </v-card-subtitle>

    <v-card-text>
      <span>{{ $t('mangaInfo.label.chapterCount') }}: {{ item?.chapterCount }}</span> |
      <span>{{ $t('mangaInfo.label.volumeCount') }}: {{ item?.volumeCount }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
    item: MangaTitle | null
    to: RouteLocationRaw | undefined
}>()
</script>
