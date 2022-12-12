<template>
    <v-app id="inspire">
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <div>Error: {{error}}</div>
                <div>Pending: {{pending}}</div>
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="8"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
              > 
                <div>{{mangaTitle?.title}}</div>
                <div>{{mangaTitle?.status}}</div>
                <v-img
                    v-if="mangaTitle?.firstCoverImage"
                    :src="mangaTitle.firstCoverImage"
                    height="500px"
                ></v-img>

              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <!--  -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>

<script setup lang="ts">
const {
    mangaTitle,
    pending,
    error,
    fetchByRoute,
    initPage
} = useMangaInfoPage()

initPage()
</script>