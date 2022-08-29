<template>
  <div class="song-list">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%; padding: 20px"
      @row-click="rowClick"
    >
      <el-table-column label="搜索的歌曲">
        <!-- 序号 -->
        <el-table-column type="index" label="序号" width="120">
        </el-table-column>
        <!-- 歌名 -->
        <el-table-column prop="name" label="歌名" width="250">
        </el-table-column>
        <!-- 歌手 -->
        <el-table-column prop="artists" label="歌手">
          <template slot-scope="scope">
            {{ scope.row.artists[0].name }}
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 引入接口
import { getSongList } from "@/api/songList.js";

export default {
  // 数据
  data() {
    return {
      tableData: [],
    };
  },

  // 生命周期
  created() {
    // 页面一加载就获取数据
    this.init();
  },

  // 方法
  methods: {
    // 获取数据
    async init() {
      // 接收搜索页传过来的关键字
      let keywords = this.$route.query.keywords;
      // 发送请求
      let { code, result } = await getSongList({
        keywords,
      });
      if (code == 200) {
        this.$message({
          message: "搜索成功",
          type: "success",
        });
        this.tableData = result.songs;
      }
    },

    rowClick(row) {
      this.$router.push({
        path: "/home/song-details",
        query: {
          id: row.id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>