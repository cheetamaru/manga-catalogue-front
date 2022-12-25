import { MangaPublishingStatus } from '~~/types/Types';

type VChipMapperValue = {
  color: string,
  'prepend-icon': string
}

const chipMapper: Record<MangaPublishingStatus, VChipMapperValue> = {
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

export const mangaPublishingStatusDomain = {
  chipMapper,
}
