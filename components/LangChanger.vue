<template>
  <ClientOnly>
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn
          icon="mdi-cog-outline"
          v-bind="props"
        />
      </template>
      <v-list
        density="compact"
        width="200"
      >
        <v-list-item
          prepend-icon="mdi-translate"
        >
          <v-select
            :model-value="locale"
            :items="items"
            variant="underlined"
            single-line
            @update:model-value="onChangeLocale"
          />
        </v-list-item>
      </v-list>
    </v-menu>
  </ClientOnly>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const onChangeLocale = (locale: string) => {
  setLocale(locale)
}

const items = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: '日本語',
    value: 'ja',
  },
]
</script>
