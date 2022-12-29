<template>
  <div>
    <v-app id="inspire">
      <v-app-bar
        app
        :model-value="true"
        density="compact"
        class="workaround-app-bar-width"
      >
        <v-btn
          icon
          @click="$router.push('/')"
        >
          <v-icon>mdi-alpha-m-box</v-icon>
        </v-btn>

        <v-toolbar-title>Manga Catalogue</v-toolbar-title>
      </v-app-bar>
      <v-fade-transition leave-absolute>
        <div
          v-if="isExtraSpaceAdded"
          class="workaround-temporary-height"
        />
      </v-fade-transition>
      <slot />
      <v-footer
        app
        inset
        absolute
        border
      >
        <v-row
          justify="center"
          class="pa-3"
        >
          Manga Catalogue - 2022 © Cheetamaru
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script setup>
// for fixing bug in vuetify: https://github.com/vuetifyjs/vuetify/issues/15202
const isExtraSpaceAdded = ref(true)

onMounted(() => {
  isExtraSpaceAdded.value = false
})
</script>

<style scoped>
.workaround-app-bar-width {
  width: 100%;
}

.workaround-temporary-height {
  height: 48px;
}
</style>
