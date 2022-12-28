<template>
  <v-chip
    v-bind="propsToBind"
    size="x-small"
    class="pa-2"
    label
    pill
  >
    {{ statusName }}
  </v-chip>
</template>

<script setup lang="ts">
import { MangaPublishingStatus } from '~~/types/Types';
import { mangaPublishingStatusDomain } from '@/domains/mangaPublishingStatusDomain'

const props = defineProps<{
    status?: MangaPublishingStatus | null
}>()

const { getStatusNameByValue } = useMangaPublishingStatusName()
const { chipPropsMapper } = mangaPublishingStatusDomain

const statusName = computed(() => {
  return getStatusNameByValue(props.status ?? 'ongoing')
})

const propsToBind = computed(() => {
  return props.status ? chipPropsMapper[props.status] : {}
})
</script>
