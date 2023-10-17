<template>
  <div id="content">
    <div class="tags-content">
      <n-card title="你的tag池子" size="small">
        <div class="tips">Tips:你可以用英文逗号分隔每一个关键词,然后回车...</div>
        <div class="add-tag">
          <n-input-group>
            <n-input
              v-model:value="text"
              type="text"
              placeholder="这里输入你的关键词..."
              @keyup.enter="addTag"
            />
            <n-button type="primary" ghost @click="addTag">添加</n-button>
          </n-input-group>
        </div>
        <n-space>
          <n-tag v-for="item in tags" :key="item.value" type="info" closable @close="handleDelete(item.value)">
            {{ item.lable }}
          </n-tag>
        </n-space>
      </n-card>
      <n-card>
        <div class="get-tags">
          <div class="tips">Tips:想要几个关键词呢...</div>
          <n-space>
            <n-input-number v-model:value="tagsNum" type="text" placeholder="想要几个关键词呢..." />
            <n-button type="success" @click="getActiveTags">获取</n-button>
          </n-space>
        </div>
        <n-space>
          <n-tag type="success" v-for="item in activeTags" :key="item.value">{{ item.lable }}</n-tag>
        </n-space>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "naive-ui";
const message = useMessage();
const text = ref("");
const isTags = localStorage.getItem("tags");
const tags = ref(isTags ? JSON.parse(isTags!) : []);
const activeTags = ref<any>([]);
const tagsNum = ref(parseInt(localStorage.getItem("tagsNum")!) || 5);
// 添加tag
const addTag = () => {
  // 不可为空,也不可为空格
  if (text.value.trim() === "") {
    return;
  }
  // 用英文逗号分割
  const arr = text.value.split(",");
  arr.forEach((item) => {
    const tag = {
      lable: item,
      value: tags.value.length + 1,
    };
    tags.value.push(tag);
  });
  localStorage.setItem("tags", JSON.stringify(tags.value));
  text.value = "";
};
// 删除tag
const handleDelete = (index: number) => {
  //   删除value为index的tag
  tags.value = tags.value.filter((item: { value: number }) => item.value !== index);
  localStorage.setItem("tags", JSON.stringify(tags.value));
};

// 随机获取5个tag
const getActiveTags = () => {
  activeTags.value = [];
  const arr = tags.value;
  const len = arr.length;
  for (let i = 0; i < tagsNum.value; i++) {
    const index = Math.floor(Math.random() * len);
    activeTags.value.push(arr[index]);
  }
  if (tags.value.length === 0) {
    message.error("你还没有添加tag哦...");
  } else {
    message.success("要坚持画下来哦~");
  }
  localStorage.setItem("tagsNum", tagsNum.value.toString());
};
</script>

<style lang="scss" scoped>
#content {
  margin-top: 20px;
  .tags-content {
    display: flex;
    flex-direction: column;
    ::v-deep(.n-card) {
      margin-bottom: 20px;
    }
    .tips {
      margin-bottom: 16px;
      font-size: 12px;
      color: #00000080;
    }
    .add-tag {
      margin-bottom: 16px;
    }

    .get-tags {
      margin-bottom: 16px;
    }
  }
}
</style>
