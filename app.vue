<script lang="ts" setup>
const username = ref('')

const time = useTimeAgo(useNow())

onMounted(() => {
  setTimeout(() => {
    username.value = 'hello world! 123! 你好世界'
  }, 1000)
})
</script>

<template>
  <div class="wrap">
    <p class="username">
      {{ username }}
    </p>
    <div btn>
      {{ time }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  font-family: 'Roboto';
  .username {
    color: red;
  }
}
</style>
