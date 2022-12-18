<template>
  <v-app id="inspire">
    <client-only>
      <v-navigation-drawer :location="'right'" :model-value="sidebar" permanent app>
      <v-list>
        <v-list-item :key="123">
          <v-form>
            <v-text-field v-model="search" variant="outlined" placeholder="Search" clearable></v-text-field>
            <v-select
              v-model="status"
              label="Select"
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
        <v-alert v-if="error">
          {{ error }}
        </v-alert>
        <v-alert v-else-if="pending">
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
                height="300px"
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
        <v-pagination v-model="page" :length="totalPages" density="comfortable" rounded />
      </v-container>
    </v-main>
  </v-app>
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
  pending,
} = useMangaListPage()

const sidebar = useState<boolean>('sidebar')
const showSearch = useState<boolean>('showSearch')
showSearch.value = true

onUnmounted(() => {
  showSearch.value = false
})

preloadRouteComponents('/manga-info/[id]')
</script>
