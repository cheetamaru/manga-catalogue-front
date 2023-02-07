<template>
  <v-sheet class="pa-3">
    <div class="text-h5 font-weight-bold manga-catalogue-divider">
      {{ $t('mangaInfo.title.synopsis') }}
    </div>
    <div>{{ mangaTitle?.description }}</div>
  </v-sheet>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';

defineProps<{
    mangaTitle: MangaTitle | null
}>()
</script>
