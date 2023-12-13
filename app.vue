<script lang="ts" setup>
const username = ref('')

console.log(username.value)

const time = useTimeAgo(new Date())

onMounted(() => {
  setTimeout(() => {
    username.value = 'hello world'
  }, 1000);
})
</script>
<template>
  <div>
    {{ username }}
    {{ time }}
  </div>
</template>
