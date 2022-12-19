<template>
    <v-chip
        v-bind="statusChipMapper[status || 'finished']"
        size="x-small"
        class="pa-2"
        label
        pill
    >
        {{ status }}
    </v-chip>
</template>

<script setup lang="ts">
import { MangaTitle } from '~~/types/ApiTypes';

const statusChipMapper: Record<NonNullable<MangaTitle['status']>, unknown> = {
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

defineProps<{
    status: MangaTitle['status']
}>()
</script>
