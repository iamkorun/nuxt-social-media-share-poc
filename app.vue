<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'This is cat title',
  description: 'A description about the cat',
  ogDescription: 'A description about the cat',
  ogTitle: 'This is cat title',
});
</script>
