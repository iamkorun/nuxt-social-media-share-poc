<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: `%s - Cat Site`,
  ogSiteName: 'Cat Site',
})
</script>
