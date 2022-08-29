<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="box">
            <!-- <img
              src="@/assets/imgs/bg4.jpg"
              ref="img"
              class="palyImg"
              @click="palyAudio"
            /> -->
            <div ref="img" class="palyImg" @click="palyAudio"></div>
            <p>
              <audio ref="audio" :src="palyData[0].url"></audio>
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light">
          <h3 class="title">
            <span>热门留言</span>

            <el-badge :value="total" :max="99" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
          </h3>
          <el-table
            :data="tableData"
            style="width: 100%; text-align: center"
            :show-header="false"
          >
            <!-- 头像名字 -->
            <el-table-column width="180">
              <template slot-scope="scope">
                <img
                  :src="scope.row.user.avatarUrl"
                  alt="用户头像"
                  width="50px;"
                />
                <span class="uname">{{ scope.row.user.nickname }}</span>
              </template>
            </el-table-column>
            <!-- 评论留言 -->
            <el-table-column>
              <template slot-scope="scope">
                {{ scope.row.content }}
              </template>
            </el-table-column>
            <!-- 时间 -->
            <el-table-column prop="address" width="120">
              <template slot-scope="scope">
                {{ scope.row.timeStr }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入接口
import { palySong, comments } from "@/api/songDetails.js";

export default {
  // 数据
  data() {
    return {
      isPaly: false, // 是否播放
      // 播放音乐
      palyData: [
        {
          url: "",
        },
      ],
      // 音乐评论
      tableData: [],
      // 评论数
      total: null,
    };
  },

  // 生命周期
  async created() {
    // 获取列表页传过来的id
    let id = this.$route.query.id;
    // 根据id发送请求---播放音乐
    let { code, data } = await palySong({ id });
    if (code == 200) {
      this.palyData = data;
    }

    // 根据id发送请求---播放音乐评论
    let res = await comments({ type: 0, id: id });
    if (res.code == 200) {
      this.tableData = res.hotComments;
      this.total = res.hotComments.length;
    }
  },

  mounted() {
    let audio = document.querySelector("audio");
    audio.addEventListener("ended", () => {
      this.$refs.img.style.animationPlayState = "paused";
    });
  },

  // 方法
  methods: {
    // 点击播放或暂停
    palyAudio() {
      this.isPaly = !this.isPaly;
      if (this.isPaly) {
        //播放音乐
        this.$refs.audio.play();
        this.$refs.img.style.animationPlayState = "running";
      } else {
        //暂停音乐
        this.$refs.audio.pause();
        this.$refs.img.style.animationPlayState = "paused";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.grid-content {
  width: 100%;
  height: 100%;
}
.bg-purple {
  height: 100%;
}
.bg-purple-light {
  height: 100%;
}

// 播放音乐盒
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vw;
  margin-top: 55px;
  background: url(../assets/imgs/songBg.png) no-repeat center;
  background-size: 65%;
}
.palyImg {
  width: 14vw;
  height: 14vw;
  background: url(../assets/imgs/bg4.jpg) no-repeat -40px 0px;
  background-size: cover;
  border-radius: 100%;
  animation: run 15s linear infinite paused;
}
@keyframes run {
  100% {
    border-radius: 100%;
    transform: rotate(720deg);
  }
}
// 热门留言
.title {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px;
}
// 头像名字
/deep/.cell {
  display: flex;
  justify-content: left;
  align-items: center;
}
.uname {
  display: inline-block;
  margin-left: 15px;
}
.item {
  margin-left: 10px;
}
</style>