<template>
  <v-sheet class="pa-3">
    <div class="text-h5 font-weight-bold">
      Synopsis
    </div>
    <v-divider class="pb-2" />
    <div>{{ mangaTitle?.description }}</div>
  </v-sheet>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';

defineProps<{
    mangaTitle: MangaTitle | null
}>()
</script>
