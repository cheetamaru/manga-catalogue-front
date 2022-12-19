<template>
    <div>
        <v-app id="inspire">
            <v-app-bar
            app
            :model-value="true"
            style="width: 100%"
            :density="'compact'"
            >
            <v-btn icon @click="$router.push('/')">
                <v-icon>mdi-alpha-m-box</v-icon>
            </v-btn>

            <v-toolbar-title>Manga Catalogue</v-toolbar-title>
        </v-app-bar>
        <v-fade-transition leave-absolute>
            <div v-if="isExtraSpaceAdded" style="height: 48px" />
        </v-fade-transition>
        <slot />
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
