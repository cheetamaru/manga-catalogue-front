<template>
  <MangaListFilterSidebar />

  <v-main>
    <v-container>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :model-value="search"
                :append-inner-icon="appendInnerIcon"
                :append-icon="appendIcon"
                :placeholder="$t('global.placeholder.search')"
                variant="outlined"
                clearable
                @update:model-value="onUpdateSearch"
                @click:append="toggleSidebar"
                @click:append-inner="resetSidebarFilters"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-container v-if="error">
        <v-alert type="error">
          {{ error }}
        </v-alert>
      </v-container>
      <v-container v-else-if="loading">
        <v-alert>
          {{ $t('global.label.loading') }}
        </v-alert>
      </v-container>
      <v-container v-else-if="isListEmpty">
        <v-alert type="info">
          {{ $t('global.label.searchEmpty') }}
        </v-alert>
      </v-container>
      <v-container v-else>
        <v-row>
          <v-col
            v-for="item of list"
            :key="item.id"
            align-self="center"
            class="d-flex justify-center"
          >
            <MangaListItem
              :item="item"
              :to="getMangaInfoRoute(item?.id)"
            />
          </v-col>
        </v-row>
        <v-pagination
          v-model="page"
          :length="totalPages"
          density="comfortable"
          rounded
          class="pt-6"
        />
      </v-container>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
const {
  search,
  list,
  error,
  page,
  totalPages,
  loading,
  onUpdateSearch,
  resetSidebarFilters,
  isListEmpty,
  appendInnerIcon,
  appendIcon,
  toggleSidebar,
  getMangaInfoRoute,
} = useMangaListPage()

preloadRouteComponents('/manga-info/[id]')
</script>
