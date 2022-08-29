/**
 * 
 *  接口层---获取歌单列表
 * 
 * 
 */

// 引入requst.js
import req from "@/utils/request";

// 获取歌单列表
export const getSongList = (data) => {
    return req.get('/search', data)
}
