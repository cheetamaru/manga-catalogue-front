<template>
  <v-main class="bg-grey-lighten-3 h-100">
    <v-container v-if="pending">
      <v-alert>
        {{ $t('global.label.loading') }}
      </v-alert>
    </v-container>
    <v-container v-else-if="error">
      <v-alert type="error">
        {{ error }}
      </v-alert>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col
          cols="12"
          sm="3"
        >
          <MangaInfoCover :manga-title="mangaTitle" />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <MangaInfoMain :manga-title="mangaTitle" />
        </v-col>
        <v-col
          cols="12"
          sm="3"
        >
          <MangaInfoDetails
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
