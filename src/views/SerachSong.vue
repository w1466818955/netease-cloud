<template>
  <div>
    <h1 class="title">请搜索您想要的音乐</h1>
    <el-input
      placeholder="请输入内容"
      v-model="keywords"
      class="input-with-select"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="sendkeywords"
      ></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  // 数据
  data() {
    return {
      keywords: null,
    };
  },

  // 方法
  methods: {
    sendkeywords() {
      this.$router.push({
        path: "/home/song-list",
        query: {
          keywords: this.keywords,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  height: 45px;
  margin-bottom: 10px;
  color: #9c9c9c;
}
.input-with-select {
  width: 300px;
}
</style>