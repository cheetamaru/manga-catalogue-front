<template>
    <v-app id="inspire">
      <v-main class="bg-grey-lighten-3">
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
                min-height="268"
              >
                <div class="text-h4">{{mangaTitle?.title}}</div>
                <div>
                  <v-img
                    v-if="mangaTitle?.firstCoverImage"
                    :src="mangaTitle.firstCoverImage"
                    :lazy-src="mangaTitle.firstCoverImage"
                    width="100%"
                    height="300px"
                />
                </div>
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="9"
            >
            <v-progress-circular v-if="pending" indeterminate :size="60" :width="10" class="v-progress-circular--visible" />
              <v-sheet
                v-else
                min-height="70vh"
                rounded="lg"
              > 
                <div class="text-h5">Description</div>
                <v-divider />
                <div>{{mangaTitle?.description}}</div>
                <v-divider :thickness="4" />

                <div>
                  <div class="text-h5">Information</div>
                  <v-divider />
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
                    <strong>Authors</strong>: {{ mangaTitle?.authors?.map((el) => `${el.firstName} ${el.surname}`).join(',') }}
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
    </v-app>
  </template>

<script setup lang="ts">
const {
  mangaTitle,
  pending,
  error,
} = useMangaInfoPage()
</script>
