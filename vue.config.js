module.exports = {
    devServer: { // 环境配置
        host: '0.0.0.0',
        public: '192.168.124.9:8080',
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        open: true // 配置自动启动浏览器
    },
}