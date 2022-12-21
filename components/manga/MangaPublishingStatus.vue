<template>
  <v-chip
    v-bind="propsToBind"
    size="x-small"
    class="pa-2"
    label
    pill
  >
    {{ getStatusNameByValue(status ?? 'ongoing') }}
  </v-chip>
</template>

<script setup lang="ts">
import { MangaPublishingStatus } from '~~/types/Types';
import { mangaPublishingStatusDomain } from '@/domains/mangaPublishingStatusDomain.ts'

const props = defineProps<{
    status?: MangaPublishingStatus | null
}>()

const { getStatusNameByValue } = useMangaPublishingStatusName()
const { chipMapper } = mangaPublishingStatusDomain

const propsToBind = computed(() => {
  return props.status ? chipMapper[props.status] : {}
})
</script>
