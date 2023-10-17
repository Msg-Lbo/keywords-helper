<template>
  <div id="home">
    <div class="container">
      <header-view />
      <n-scrollbar style="max-height: 100vh">
        <content-view />
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import headerView from "@/components/header.vue";
import contentView from "@/components/content.vue";
</script>

<style lang="scss" scoped>
#home {
  width: 100vw;
  height: 100vh;

  .container {
    max-width: 1200px;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;
    background-color: #ffffff80;
    backdrop-filter: blur(10px);
  }
}
</style>
