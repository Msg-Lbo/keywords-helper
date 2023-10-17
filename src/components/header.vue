<template>
  <div id="header">
    <div class="container">
      <div class="title">
        <div class="title-h1">Keywords-Helper</div>
        <div class="description">你只是缺少一点点灵感...</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#header {
  .container {
    .title {
      text-align: center;
      color: #fff;
      // 文字阴影
      text-shadow: 0 0 10px #00000050;

      .title-h1 {
        font-size: 3rem;
        font-weight: bold;
      }

      .description {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
}
</style>
