<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <main>
    {{ $route.params.slug }}
  </main>
</template>
