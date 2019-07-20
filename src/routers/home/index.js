export default {
    path : '/home',
    component : () => import('@/views/Home'),
    children : [
        {
            path : 'newsList',
            components : {
                default : ()=> import('@/views/Home'), 
                newsList : ()=> import('@/views/Home/newsList')
            },
            children : [
                {
                    path : 'newsInfo/:newsId',
                    components : {
                        default : () => import('@/views/Home/newsList'),
                        newsInfo : () => import('@/components/NewsInfo')
                    },
                }
            ],
           
        },
        {
            path : 'potoImg',
            components : {
                default : () => import('@/views/Home'),
                potoImg : () => import('@/components/PotoImg'),
            },
        }
    ]
}