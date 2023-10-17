<template>
  <n-message-provider>
    <div id="app">
      <router-view />
    </div>
  </n-message-provider>
</template>
<script setup lang="ts">
// 修改网页标题
import { onMounted } from "vue";
onMounted(() => {
  document.title = "Keywords-Helper"
});
</script>

<style lang="scss" scoped>
#app {
  background-image: url("@/assets/images/bg.png");
  background-size: cover;
  background-position: 50% 50%;
  position: fixed;
  // 灰色遮罩
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00000030;
  }
}
</style>
