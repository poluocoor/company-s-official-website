import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import("../views/Home/index.vue") // 首页
    },
    {
         	path: '/about',
            name:'About', 	 
            component: () => import("../views/About/index.vue") //关于我们
    },
    {
        path: '/news',
        component: () => import("../views/News/index.vue"), //企业新闻
        children: [
            {
                path:"/news",
                redirect: "/news/newsCompany"
            },
            {
                path:"/news/newsCompany",
                component: () => import("../views/News/newsCompany")
            },
            {
                path:"/news/newsIndustry",
                component: () => import("../views/News/newsIndustry")
            }
        ]
    },
    {
        path: '/recruit',
        component: () => import("../views/Recruit/index.vue") //人才招聘
    },
    {
        path: '/sever',
        component: () => import("../views/Sever/index.vue"), //产品服务
    },
    {
        path: '/contact',
        component: () => import('../views/Contact/index.vue') // 联系我们
    },
    {
        path: '/ns101',
        component: () => import('../views/NewsTwo/ns101.vue') //新闻二级详情
    },
    {
        path: '/ns102',
        component: () => import('../views/NewsTwo/ns102.vue') //新闻二级详情
    },
    {
        path: '/ns103',
        component: () => import('../views/NewsTwo/ns103.vue') //新闻二级详情
    },
    {
        path: '/ns104',
        component: () => import('../views/NewsTwo/ns104.vue') //新闻二级详情
    },
    {
        path: '/ns105',
        component: () => import('../views/NewsTwo/ns105.vue') //新闻二级详情
    },
    {
        path: '/ns106',
        component: () => import('../views/NewsTwo/ns106.vue') //新闻二级详情
    },
    {
        path: '/ns107',
        component: () => import('../views/NewsTwo/ns107.vue') //新闻二级详情
    },
    {
        path: '/ns201',
        component: () => import('../views/NewsTwo/ns201.vue') //新闻二级详情
    },
    {
        path: '/ns202',
        component: () => import('../views/NewsTwo/ns202.vue') //新闻二级详情
    },
    {
        path: '/ns203',
        component: () => import('../views/NewsTwo/ns203.vue') //新闻二级详情
    },
    {
        path: '/ns204',
        component: () => import('../views/NewsTwo/ns204.vue') //新闻二级详情
    },
    {
        path: '/ns205',
        component: () => import('../views/NewsTwo/ns205.vue') //新闻二级详情
    },
    {
        path: '/ns206',
        component: () => import('../views/NewsTwo/ns206.vue') //新闻二级详情
    },
    {
        path: '/product',
        component: () => import('../views/Product/index.vue') //产品二级详情
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
