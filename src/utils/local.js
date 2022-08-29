/**
 * 
 * 本地存储相关
 * 
 */

export default {
    // 设置本地存储
    set(key, value) {
        return localStorage.setItem(key, JSON.stringify(value))
    },
    // 获取本地存储
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    // 移除本地存储
    remove(key) {
        return localStorage.removeItem(key)
    },
    // 移除所有
    clear(key) {
        return localStorage.clear(key)
    }
}