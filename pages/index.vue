<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" :content="imageUrl" />
    <Meta property="og:url" :content="pageUrl" />
    <Meta property="og:type" content="website" />
    <Style type="text/css" children="body { background-color: green; }"></Style>
  </Head>
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
const description = 'A description about the cat'; // Dynamic description
const imageUrl = `${pageUrl.value}/images/cat.png`;

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
</script>