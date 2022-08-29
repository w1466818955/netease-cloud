<template>
  <div class="home">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Header></Header>
      </el-header>

      <!-- 主体 -->
      <el-main>
        <!-- banner部分 -->
        <div class="banner">
          <el-carousel
            :interval="4000"
            type="card"
            indicator-position="none"
            height="320px"
          >
            <el-carousel-item v-for="item in bgImg" :key="item">
              <img :src="item" alt="" width="100%" height="100%" />
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 内容部分  -->
        <router-view></router-view>
      </el-main>

      <!-- 底部 -->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// 引入组件
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  // 注册组件
  components: {
    Header,
    Footer,
  },

  // 数据
  data() {
    return {
      // banner轮播
      bgImg: [
        require("../assets/imgs/bg1.jpg"),
        require("../assets/imgs/bg2.jpg"),
        require("../assets/imgs/bg3.jpg"),
        require("../assets/imgs/bg4.jpg"),
        require("../assets/imgs/bg5.jpg"),
        require("../assets/imgs/bg6.jpg"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  min-width: 1000px;
  height: 100%;
  /deep/.el-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .el-header,
    .el-footer {
      width: 100%;
      background-color: #0f0f0f;
      color: #fff;
      text-align: center;
      line-height: 60px;
      .wrap {
        margin: 0 auto;
        width: 1000px;
        height: 100%;
        .logo {
          float: left;
          width: 176px;
          height: 100%;
          background: url("../assets/imgs/topbar.png") no-repeat 0px -4px;
          a {
            float: left;
            width: 157px;
            height: 100%;
            padding-right: 20px;
            text-indent: -9999px;
          }
        }
      }
    }
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }
    .el-main {
      width: 100%;
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      // banner部分
      .banner {
        margin-bottom: 50px;
      }
    }
  }
}
</style>