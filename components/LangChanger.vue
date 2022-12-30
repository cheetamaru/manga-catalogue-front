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
            v-model="locale"
            label="Lang"
            :items="items"
            variant="underlined"
            single-line
          />
        </v-list-item>
      </v-list>
    </v-menu>
  </ClientOnly>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const items = computed(() => [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: '日本語',
    value: 'ja',
  },
])
</script>
