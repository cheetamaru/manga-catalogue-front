<template>
  <v-main class="bg-grey-lighten-3 consistent-height">
    <v-container v-if="pending">
      Loading...
    </v-container>
    <v-container v-else-if="error">
      <v-alert>
        {{ error }}
      </v-alert>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col
          cols="12"
          sm="3"
        >
          <MangaInfoLeftCol :manga-title="mangaTitle" />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <MangaInfoCenterCol :manga-title="mangaTitle" />
        </v-col>
        <v-col
          cols="12"
          sm="3"
        >
          <MangaInfoRightCol
            :manga-title="mangaTitle"
            :authors="authors"
            :genres="genres"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
const {
  mangaTitle,
  pending,
  error,
  authors,
  genres,
} = useMangaInfoPage()
</script>
