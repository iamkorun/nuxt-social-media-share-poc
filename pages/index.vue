<template>
  <img src="/images/cat.png" />
  <!-- Facebook Share Button -->
  <button @click="shareOnFacebook">Share on Facebook</button>
  <!-- Twitter Share Button -->
  <button @click="shareOnTwitter">Share on Twitter</button>
  <!-- LinkedIn Share Button -->
  <button @click="shareOnLinkedIn">Share on LinkedIn</button>
</template>

<script setup lang="ts">
const pageUrl = ref(window.location.href);

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    pageUrl.value
  )}`;
  console.log(url);
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnTwitter = () => {
  const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    pageUrl.value
  )}&text=Check%20this%20out!`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    pageUrl.value
  )}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const imageUrl = '/images/cat.png'
const imageWidth = 1200 // Image width
const imageHeight = 630 // Image height

useSeoMeta({
  title: 'This is a cat',
  ogTitle: 'This is a cat',
  description: 'Cat cat cat cat',
  title: 'This is a cat',
  meta: [
    { property: 'og:title', content: 'This is a cat' },
    { property: 'og:description', content: 'Cat cat cat cat' },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: imageWidth.toString() },
    { property: 'og:image:height', content: imageHeight.toString() },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://example.com/your-page' },
  ]
});
</script>
