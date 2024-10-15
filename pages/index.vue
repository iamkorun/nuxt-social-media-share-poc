<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Meta name="og:title" :content="title" />
    <Style type="text/css" children="body { background-color: green; }"></Style>
  </Head>
  <img src="/images/cat.png" />
  <!-- Facebook Share Button -->
  <button @click="shareOnFacebook">Share on Facebook</button>
  <!-- Twitter Share Button -->
  <button @click="shareOnTwitter">Share on Twitter</button>
  <!-- LinkedIn Share Button -->
  <button @click="shareOnLinkedIn">Share on LinkedIn</button>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const pageUrl = ref(config.public.WEB_URL);

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

const title = 'This is cat title';
const imageUrl = `${pageUrl}/images/cat.png`;
const imageWidth = 1200; // Image width
const imageHeight = 630; // Image height
</script>
