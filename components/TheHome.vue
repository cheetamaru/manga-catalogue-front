<template>
  <v-app id="inspire">
    <v-app-bar
      app
      extended
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row v-if="error">
          Error: {{error?.data}}
        </v-row>
        <v-row v-else>
          <v-col
            v-for="(item, index) of list"
            :key="index"
            cols="3"
          >
            <v-card>
              <v-img
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
import { useMangaListApiAdapter } from '@/composables/useMangaListApiAdapter'

const { fetchList } = useMangaListApiAdapter()

const { data, error } = useAsyncData(fetchList)

const list = data.value?.results || []
</script>
