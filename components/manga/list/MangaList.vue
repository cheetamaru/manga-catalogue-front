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
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :model-value="search"
                :append-inner-icon="isFilterEmpty ? undefined : 'mdi-delete-sweep'"
                :append-icon="isFilterEmpty ? 'mdi-filter-menu-outline' : 'mdi-filter-menu'"
                variant="outlined"
                placeholder="Search"
                clearable
                @update:model-value="onSearch"
                @click:append="sidebar = !sidebar"
                @click:append-inner="resetFilters"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
        
      <v-alert v-if="error">
        {{ error }}
      </v-alert>
      <v-alert v-else-if="loading">
        Loading...
      </v-alert>
      <v-alert v-else-if="!list.length">
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
            :to="{ path: `/manga-info/${item?.id}` }"
          />
        </v-col>
      </v-row>
      <v-pagination
        v-if="list.length"
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
  isFilterEmpty,
  resetFilters,
} = useMangaListPage()

const sidebar = ref(false)

preloadRouteComponents('/manga-info/[id]')
</script>
