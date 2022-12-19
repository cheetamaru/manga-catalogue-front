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
        <div style="height: 48px"></div>
        <slot />
        </v-app>
    </div>
</template>
