<template>
  <MangaListFilterSidebar />

  <v-main>
    <v-container>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field
              :model-value="search"
              :append-inner-icon="appendInnerIcon"
              :append-icon="appendIcon"
              variant="outlined"
              placeholder="Search"
              clearable
              @update:model-value="onSearch"
              @click:append="toggleSidebar"
              @click:append-inner="resetFilters"
            />
          </v-col>
        </v-row>
      </v-form>

      <v-alert v-if="error">
        {{ error }}
      </v-alert>
      <v-alert v-else-if="loading">
        Loading...
      </v-alert>
      <v-alert v-else-if="isListEmpty">
        Search is empty!
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
              :to="getToPath(item?.id)"
            />
          </v-col>
        </v-row>
        <v-pagination
          v-model="page"
          :length="totalPages"
          density="comfortable"
          rounded
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
  onSearch,
  resetFilters,
  isListEmpty,
  appendInnerIcon,
  appendIcon,
  toggleSidebar,
  getToPath,
} = useMangaListPage()

preloadRouteComponents('/manga-info/[id]')
</script>
