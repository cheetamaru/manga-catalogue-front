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
                variant="outlined"
                :placeholder="$t('global.placeholder.search')"
                clearable
                @update:model-value="onUpdateSearch"
                @click:append="toggleSidebar"
                @click:append-inner="resetSidebarFilters"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-alert v-if="error">
        {{ error }}
      </v-alert>
      <v-alert v-else-if="loading">
        {{ $t('global.label.loading') }}
      </v-alert>
      <v-alert v-else-if="isListEmpty">
        {{ $t('global.label.searchEmpty') }}
      </v-alert>
      <v-container v-else>
        <v-row>
          <v-col
            v-for="item of list"
            :key="item.id"
            cols="3"
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
