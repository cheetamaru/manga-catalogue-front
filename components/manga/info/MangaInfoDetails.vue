<template>
  <v-sheet class="pa-3">
    <div>
      <div class="text-h5 font-weight-bold manga-catalogue-divider">
        {{ $t('mangaInfo.title.information') }}
      </div>
      <div>
        <strong>
          {{ $t('mangaInfo.label.status') }}
        </strong>: <MangaPublishingStatus :status="mangaTitle?.status" />
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
import { MangaInfoDetailsItem } from '~~/types/Types'

const props = defineProps<{
    mangaTitle: MangaTitle | null;
    authors: string;
    genres: string;
}>()

const { createDetailsItem } = useMangaInfoDetails()

const { t } = useI18n()

const detailsListRaw = computed<MangaInfoDetailsItem[]>(() => [
  createDetailsItem('mangaInfo.label.chapterCount', props.mangaTitle?.chapterCount),
  createDetailsItem('mangaInfo.label.volumeCount', props.mangaTitle?.volumeCount),
  createDetailsItem('mangaInfo.label.authors', props.authors),
  createDetailsItem('mangaInfo.label.startDate', props.mangaTitle?.startDate),
  createDetailsItem('mangaInfo.label.endDate', props.mangaTitle?.endDate || '-'),
  createDetailsItem('mangaInfo.label.genres', props.genres),
])

const mapTranslate = (el: MangaInfoDetailsItem) => ({ ...el, title: t(el.title) })

const detailsList = computed<MangaInfoDetailsItem[]>(() => detailsListRaw.value.map(mapTranslate))
</script>
