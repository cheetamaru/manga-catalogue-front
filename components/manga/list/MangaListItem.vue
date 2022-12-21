<template>
  <v-card
    max-height="500px"
    hover
    elevation="2"
    ripple
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
      Status: <MangaPublishingStatus :status="item?.status" />
    </v-card-subtitle>
              
    <v-card-text>
      <span>Chapters: {{ item?.chapterCount }}</span> | 
      <span>Volumes: {{ item?.volumeCount }}</span> 
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
