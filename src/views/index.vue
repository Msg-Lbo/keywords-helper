<template>
  <div id="home">
    <div class="container">
      <content-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import contentView from "@/components/content.vue";
</script>

<style lang="scss" scoped>
#home {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff80;
  backdrop-filter: blur(10px);

  .container {
    max-width: 970px;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
}
</style>
