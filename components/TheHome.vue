<template>
  <v-app id="inspire">
    <!-- <v-app-bar
      app
      floating
      :model-value="true"
      style="width: 100%"
      absolute
    >
      <v-btn icon>
        <v-icon>mdi-alpha-m-box</v-icon>
      </v-btn>

      <v-toolbar-title>Manga Catalogue</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="sidebar = !sidebar" :active="sidebar">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> -->

    <!-- <v-navigation-drawer :location="'right'" :model-value="sidebar" permanent app>
      <v-text-field v-model="search" variant="outlined" placeholder="Search"/>
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
    </v-navigation-drawer> -->

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

const sidebar = ref(false)

preloadRouteComponents('/manga-info/[id]')
</script>
