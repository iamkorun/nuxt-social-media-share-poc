<template>
  <img src="/images/cat.png" alt="A cute cat" />
  <div>
    <!-- Facebook Share Button -->
    <button @click="shareOnFacebook" aria-label="Share on Facebook">Share on Facebook</button>
    <!-- Twitter Share Button -->
    <button @click="shareOnTwitter" aria-label="Share on Twitter">Share on Twitter</button>
    <!-- LinkedIn Share Button -->
    <button @click="shareOnLinkedIn" aria-label="Share on LinkedIn">Share on LinkedIn</button>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const pageUrl = ref(config.public.WEB_URL);
const title = 'This is cat title';
const imageUrl = `${pageUrl}/images/cat.png`;

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnTwitter = () => {
  const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl.value)}&text=${encodeURIComponent(title)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl.value)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

useSeoMeta({
  titleTemplate: '',
  title: 'This is cat title',
  description: 'A description about the cat',
  ogDescription: 'A description about the cat',
  ogImage: imageUrl,
  ogTitle: 'This is cat title',
});
</script>
