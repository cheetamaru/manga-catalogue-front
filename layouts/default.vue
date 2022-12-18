<template>
    <div>
        <v-app id="inspire">
            <v-app-bar
            app
            :model-value="true"
            style="width: 100%"
            >
            <v-btn icon @click="$router.push('/')">
                <v-icon>mdi-alpha-m-box</v-icon>
            </v-btn>

            <v-toolbar-title>Manga Catalogue</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- <v-btn icon @click="sidebar = !sidebar" :active="sidebar">
                <v-icon>mdi-magnify</v-icon>
            </v-btn> -->
        </v-app-bar>
        <div style="height: 64px"></div>
        <slot />
        </v-app>
    </div>
</template>
