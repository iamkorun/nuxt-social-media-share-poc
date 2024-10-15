<template>
  <!-- Facebook Share Button -->
  <button @click="shareOnFacebook">share</button>
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

useSeoMeta({
  title: 'This is a cat',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage:
    'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRZcmlaOZxV_nbS5cWjzzCB1i3PnTRqawOv0-EzUWZ15gTTCyaua_Ngv5hutODmYy7y',
  twitterCard: 'summary_large_image',
});
</script>
