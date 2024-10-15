<template>
  <img :src="imageUrl" alt="A cute cat" />
  <div>
    <!-- Facebook Share Button -->
    <button @click="shareOnFacebook" aria-label="Share on Facebook">
      Share on Facebook
    </button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const pageUrl = ref(config.public.WEB_URL);
const imageUrl = '/images/kitten.jpg';

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    pageUrl.value
  )}`;
  window.open(url, '_blank', 'width=600,height=400');
};

useSeoMeta({
  titleTemplate: '',
  title: `This is cat title #${route.params.id}`,
  description: `A description about the cat #${route.params.id}`,
  ogUrl: pageUrl.value,
  ogTitle: `This is cat title #${route.params.id}`,
  ogDescription: `A description about the cat #${route.params.id}`,
  ogImageUrl: '/images/kitten.jpg',
  ogImageSecureUrl: '/images/kitten.jpg',
  ogImageType: 'image/jpeg',
  ogType: 'website',
});
</script>
