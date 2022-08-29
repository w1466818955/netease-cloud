<template>
  <div>
    <div class="wrap">
      <h1 class="logo">
        <router-link to="/">网易云音乐</router-link>
      </h1>
      <div class="find">
        <router-link to="/">发现音乐</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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

  .find {
    float: left;
    width: 176px;
    height: 100%;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>