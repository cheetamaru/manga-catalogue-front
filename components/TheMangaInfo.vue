<template>
      <v-main class="bg-grey-lighten-3" style="height: max(100%, 100vh)">
        <v-container v-if="pending">
          Loading...
        </v-container>
        <v-container v-else>
          <v-row>
            <v-col
              cols="12"
              sm="3"
            >
              <v-sheet
                class="pa-3"
              >
                <div class="text-h4 text-center mb-2">{{mangaTitle?.title}}</div>
                <v-card flat>
                  <v-img
                    v-if="mangaTitle?.firstCoverImage"
                    :src="mangaTitle.firstCoverImage"
                    :lazy-src="mangaTitle.firstCoverImage"
                    :aspect-ratio="2/3"
                />
                <v-card-subtitle class="text-center">
                  First volume cover
                </v-card-subtitle>
                </v-card>
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="6"
            >
              <v-sheet
                class="pa-3"
              > 
                <div class="text-h5 font-weight-bold">Synopsis</div>
                <v-divider class="pb-2" />
                <div>{{mangaTitle?.description}}</div>
              </v-sheet>
            </v-col>
            <v-col
            cols="12"
              sm="3"
              >
              <v-sheet
                class="pa-3"
                >
                <div>
                  <div class="text-h5 font-weight-bold">Information</div>
                  <v-divider class="pb-2" />
                  <div>
                    <strong>Status</strong>: {{ mangaTitle?.status }}
                  </div>
                  <div>
                    <strong>Chapters</strong>: {{ mangaTitle?.chapterCount }}
                  </div>
                  <div>
                    <strong>Volumes</strong>: {{ mangaTitle?.volumeCount }}
                  </div>
                  <div>
                    <strong>Authors</strong>: {{ mangaTitle?.authors?.map((el) => `${el.firstName} ${el.surname}`).join(', ') }}
                  </div>
                  <div>
                    <strong>Start Date</strong>: {{ mangaTitle?.startDate }}
                  </div>
                  <div>
                    <strong>End Date</strong>: {{ mangaTitle?.endDate || '-' }}
                  </div>
                  <div>
                    <strong>Genres</strong>: {{ mangaTitle?.genres?.map((el) => `${el.name}`).join(', ') }}
                  </div>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  </template>

<script setup lang="ts">
const {
  mangaTitle,
  pending,
  error,
} = useMangaInfoPage()
</script>
