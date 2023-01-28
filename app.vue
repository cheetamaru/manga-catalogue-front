<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { branding } from './constants';

useHead({
  title: branding.appTitle,
})
</script>
