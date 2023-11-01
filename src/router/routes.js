import index from '@/views/index.vue'
import dataScreen from '@/views/dataScreen/index.vue'
// import productionInput from '@/pages/productionInput.vue'
// import baogong from '@/pages/baogong.vue'
export default [
    {
        name: 'index',
        path: '/index',
        component: index,
    },
    {
        name: 'screen',
        path: '/screen/index',
        component: dataScreen,
    },
    {
        path: '*',
        redirect: '/index'
    }
]