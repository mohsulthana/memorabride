<template>
  <div id="app">
    <Nav />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    Nav,
    NotificationContainer
  }
}
</script>
