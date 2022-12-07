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

    <v-main>
      <v-container>
        <v-row v-if="pending">
          Loading...
        </v-row>
        <v-row v-else>
          <v-col
            v-for="(item, index) of list"
            :key="index"
            cols="3"
          >
            <v-card>
              <v-img
                v-if="item?.firstCoverImage"
                :src="item.firstCoverImage"
                height="500px"
                cover
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

<script lang="ts" setup>
const { fetchMangaList } = useFetchMangaList()

const { data: list, error, pending } = await fetchMangaList()
</script>
