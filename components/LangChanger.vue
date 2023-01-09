<template>
  <ClientOnly>
    <v-menu
      v-model="isOpened"
      :close-on-content-click="false"
    >
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
            :items="langChangerOptions"
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
import { langChangerOptions } from '~~/locales';

const { locale, setLocale } = useI18n()

const isOpened = ref(false)

const onChangeLocale = (locale: string) => {
  setLocale(locale)
  isOpened.value = false
}
</script>
