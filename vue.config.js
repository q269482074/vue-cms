module.exports = {
    publicPath : '/static/app',
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://www.lianxi.com',
                changeOrigin : true
            }
        }
    },
}