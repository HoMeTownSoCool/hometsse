export default defineNuxtRouteMiddleware((to) => {
  const path = to.path
  path.replace(/\/$/, '')
})
