import index from '@/views/index.vue'
// import screen2 from '@/views/dataScreen/index2.vue'
export default [
    {
        name: 'index',
        path: '/index',
        component: index,
    },
    {
        name: 'screen',
        path: '/screen',
        component: () => import('@/views/dataScreen/index.vue'),
    },
    {
        name: 'screen1',
        path: '/screen1',
        component: () => import('@/views/dataScreen/indexp10.vue'),
    },
    {
        name: 'screen3',
        path: '/screen3',
        component: () => import('@/views/dataScreen/indexp30.vue'),
    },
    {
        name: 'screen4',
        path: '/screen4',
        component: () => import('@/views/dataScreen/indexp40.vue'),
    },
    {
        name: 'screen5',
        path: '/screen5',
        component: () => import('@/views/dataScreen/indexp50.vue'),
    },
    {
        name: 'screen6',
        path: '/screen6',
        component: () => import('@/views/dataScreen/indexp60.vue'),
    },
    {
        name: 'screen7',
        path: '/screen7',
        component: () => import('@/views/dataScreen/indexp70.vue'),
    },
    {
        name: 'screen9',
        path: '/screen9',
        component: () => import('@/views/dataScreen/indexp90.vue'),
    },
    // {
    //     name: 'screen2',
    //     path: '/screen/index2',
    //     component: screen2,
    // },
    {
        path: '*',
        redirect: '/index'
    }
]