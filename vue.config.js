// module.exports = {
//     configureWebpack: {
//         resolve: {
//             alias: {
//                 common: "@/common",
//                 components: '@/components',
//                 views: '@/views',
//                 img: '@/assets/img',
//                 assets: '@/assets'
//             }
//         }
//     },
// }

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //这里配置了components文件的路径别名
                'common': "@/common",
                'components': '@/components',
                'views': '@/views',
                'assets': '@/assets'
            }
        }
    }
}