<script lang="ts" setup>
const username = ref('')

console.log(username.value)

const time = useTimeAgo(useNow())

onMounted(() => {
  setTimeout(() => {
    username.value = 'hello world'
  }, 1000);
})
</script>
<template>
  <div class="wrap">
    <p class="username">{{ username }}</p>
    <div btn>{{ time }}</div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  .username {
    color: red;
  }
}
</style>
