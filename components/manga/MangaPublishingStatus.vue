<template>
  <v-chip
    v-bind="propsToBind"
    size="x-small"
    class="pa-2"
    label
    pill
  >
    {{ status }}
  </v-chip>
</template>

<script setup lang="ts">
import { MangaPublishingStatus } from '~~/types/Types';

const props = defineProps<{
    status?: MangaPublishingStatus | null
}>()

type VChipMapperValue = {
  color: string,
  'prepend-icon': string
}

const propsToBind = computed(() => {
  return props.status ? statusChipMapper[props.status] : {}
})

const statusChipMapper: Record<MangaPublishingStatus, VChipMapperValue> = {
  finished: {
    color: 'indigo',
    'prepend-icon': 'mdi-check-circle',
  },
  ongoing: {
    color: 'green',
    'prepend-icon': 'mdi-chevron-right-circle',
  },
  hiatus: {
    color: 'orange',
    'prepend-icon': 'mdi-circle-slice-3',
  },
  canceled: {
    color: 'red',
    'prepend-icon': 'mdi-close-circle',
  },
  notstarted: {
    color: 'teal',
    'prepend-icon': 'mdi-circle-outline',
  },
}
</script>
