<script setup lang="ts">
const route = useRoute()
const navItem = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]
</script>

<template>
  <header px4 py3 text-lg border="b base" flex="~ gap-3 items-center">
    <NuxtLink to="/" title="Nuxt">
      <HometsseLogo h1em />
    </NuxtLink>

    <div flex-auto />
    <nav flex="~ gap-4 items-center">
      <NuxtLink
        v-for="item in navItem"
        :key="item.path"
        :to="item.path" :title="item.name
        "
        :class="{
          'text-primary font-600': route.path === item.path,
        }"
        b="b 1 transparent"
        hover="b-b-dashed b-b-1 b-b-primary"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>
    <div b="l 1 inherit" h-full op="40 dark:20" />
    <div flex="~ items-center gap-4">
      <ColorSchemeToggle />
      <NuxtLink
        op="70 hover:100"
        title="GitHub"
        href="https://github.com/HoMeTownSoCool/hometsse"
        target="_blank"
      >
        <div i-carbon-logo-github text-xl />
      </NuxtLink>
    </div>
  </header>
</template>
