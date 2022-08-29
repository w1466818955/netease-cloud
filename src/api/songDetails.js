/**
 * 
 * 接口层---播放页面接口
 * 
 */
// 引入工具层
import req from "@/utils/request"

// 播放音乐接口
export const palySong = (data) => {
    return req.get("/song/url", data)
}

// 播放音乐评论
export const comments = (data) => {
    return req.get("/comment/hot", data)
}