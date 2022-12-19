<template>
    <client-only>
      <v-navigation-drawer :location="'right'" v-model="sidebar" temporary app>
      <v-list>
        <v-list-item :key="123">
          <v-form>
            <v-select
              v-model="status"
              label="Status"
              :items="statusOptions"
              clearable
            ></v-select>
            <v-select
              v-model="ordering"
              label="Sort"
              :items="orderingOptions"
              clearable
            ></v-select>
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
                <v-col
                  cols="12"
                >
                <v-text-field
                  :model-value="search"
                  @update:model-value="onSearch"
                  variant="outlined"
                  placeholder="Search"
                  clearable
                  :append-inner-icon="isFilterEmpty ? undefined : 'mdi-delete-sweep'"
                  :append-icon="isFilterEmpty ? 'mdi-filter-menu-outline' : 'mdi-filter-menu'"
                  @click:append="sidebar = !sidebar"
                  @click:append-inner="resetFilters"
                ></v-text-field>
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
            v-for="(item, index) of list"
            :key="index"
            cols="3"
          >
            <v-card max-height="500px" hover elevation="2" ripple :to="{ path: `/manga-info/${item.id}` }">
              <v-img
                v-if="item?.firstCoverImage"
                :src="item.firstCoverImage"
                :lazy-src="item.firstCoverImage"
                :aspect-ratio="2/3"
                max-height="300px"
              >
            </v-img>

              <v-card-title>
                  {{item && item.title}}
              </v-card-title>

              <v-card-subtitle>
                Status: {{item && item.status}}
              </v-card-subtitle>
              
              <v-card-text>
                <span>Chapters: {{ item?.chapterCount }}</span> | 
                <span>Volumes: {{ item?.volumeCount }}</span> 
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination v-if="list.length" v-model="page" :length="totalPages" density="comfortable" rounded />
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
