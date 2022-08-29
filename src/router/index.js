import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入home组件 
import Home from "@/views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/home/serach-song',
    component: Home,
    children: [
      // 搜索页面
      {
        path: "/home/serach-song",
        component: () => import("@/views/SerachSong.vue")
      },
      // 歌曲列表页
      {
        path: "/home/song-list",
        component: () => import("@/views/SongList.vue")
      },
      // 歌曲详情页
      {
        path: "/home/song-details",
        component: () => import("@/views/SongDetails.vue")
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
