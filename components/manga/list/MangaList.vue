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
              label="Status"
              :items="statusOptions"
              clearable
            />
            <v-select
              v-model="ordering"
              label="Sort"
              :items="orderingOptions"
              clearable
            />
          </v-form>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </client-only>

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
        v-if="!isListEmpty"
        v-model="page"
        :length="totalPages"
        density="comfortable"
        rounded
      />
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
const {
  status,
  search,
  list,
  error,
  statusOptions,
  page,
  totalPages,
  ordering,
  orderingOptions,
  loading,
  onSearch,
  resetFilters,
  sidebar,
  isListEmpty,
  appendInnerIcon,
  appendIcon,
  toggleSidebar,
  getToPath,
} = useMangaListPage()

preloadRouteComponents('/manga-info/[id]')
</script>
