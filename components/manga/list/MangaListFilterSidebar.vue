<template>
  <client-only>
    <v-navigation-drawer
      v-model="sidebar"
      location="right"
      temporary
      app
    >
      <v-list>
        <v-list-item>
          <v-form>
            <v-select
              v-model="status"
              :label="$t('mangaList.filter.placeholder.status')"
              :items="statusOptions"
              clearable
            />
            <v-select
              v-model="ordering"
              :label="$t('mangaList.filter.placeholder.sort')"
              :items="orderingOptions"
              clearable
            />
          </v-form>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<script setup lang="ts">
const {
  status,
  ordering,
  statusOptions,
  orderingOptions,
} = useMangaListFilters()

const { sidebar } = useMangaListSidebar()
</script>
