<template>
  <v-app id="inspire">
    <!-- <v-app-bar
      v-if="!pending"
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Manga Catalogue</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-navigation-drawer :expand-on-hover="true" :location="'right'" permanent>
      <v-text-field v-model="search" variant="outlined" placeholder="Search"/>
      <v-select
        v-model="status"
        label="Select"
        :items="statusOptions"
        clearable
      ></v-select>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-alert v-if="error">
          {{ error }}
        </v-alert>

        <v-row v-if="pending">
          Loading...
          <v-progress-circular indeterminate :size="60" :width="10" class="v-progress-circular--visible" />
        </v-row>
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
                {{item && item.description}}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const {
  initPage,
  status,
  search,
  list,
  pending,
  error,
  statusOptions,
  refresh
} = useMangaListPage()

initPage()
</script>
