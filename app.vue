<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// @see parameters here https://github.com/harlan-zw/zhead/blob/main/packages/zhead/src/metaFlat.ts#L167
useSeoMeta({
  titleTemplate: `%s - Cat Site`,
  ogSiteName: 'Cat Site',
});
</script>
