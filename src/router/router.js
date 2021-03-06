/**
 * Created by linhaifeng.
 */

import Vue from 'vue';
import App from '../pages/App';
import VueRouter from 'vue-router';

//vue组件
const Home = r => require.ensure([], () => r(require('../pages/page/home.vue')), 'Home');
const optionList = r => require.ensure([], () => r(require('../pages/page/optionList.vue')), 'optionList');
const proTrading = r => require.ensure([], () => r(require('../pages/page/proTrading.vue')), 'proTrading');
const Login = r => require.ensure([], () => r(require('../pages/page/login.vue')), 'Login');
const curretOrder = r => require.ensure([], () => r(require('../pages/page/curretOrder.vue')), 'curretOrder');
const historyOrder = r => require.ensure([], () => r(require('../pages/page/orderHistory.vue')), 'historyOrder');
const discover = r => require.ensure([], () => r(require('../pages/page/discover.vue')), 'discover');
const my = r => require.ensure([], () => r(require('../pages/page/my.vue')), 'my');
const timeline = r => require.ensure([], () => r(require('../pages/page/timeline.vue')), 'timeline');
const friend = r => require.ensure([], () => r(require('../pages/page/friends.vue')), 'friend');
const newTrade = r => require.ensure([], () => r(require('../pages/page/newTrade.vue')), 'newTrade');
const orderShare = r => require.ensure([], () => r(require('../pages/page/orderShare')), 'orderShare');
const profile = r => require.ensure([], () => r(require('../pages/page/profile')), 'profile');
const account = r => require.ensure([], () => r(require('../pages/page/account')), 'account');
const personalSetting = r => require.ensure([], () => r(require('../pages/page/personalSetting')), 'personalSetting');

Vue.use(VueRouter);

const routes = [
    {
        path: '', component: Login,
    },
    {
        path: '/login', component: Login,
    },
    { path: '/my', component: my,
        children: [

            { path: '/my', name:'my', component: my }

            // { path: '/page1', name:'page1', component: Page1 },

            // { path: '/home', name:'home', component: Home},

            // { path: '/HomeUserInfo/:uid', name:'homeUserInfo', component: HomeUserInfo },

            // { path:'/article/:id', name:'article', component : Article},

            // { path:'/home/mypet', name:'myPet', component : MyPet},

            // { path:'/home/mypet/addpet', name:'addPet', component : AddPet},

        ]
    },
    { path: '/home', component: Home,
        children: [
            {   path: '/option',
                name:'option', 
                component: optionList,
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                    requireStomp: true,
                }, 
            },
            {
                path: '/curretOrder',
                name:'curretOrder', 
                component: curretOrder,
                meta: {
                    requireAuth: true,
                    requireStomp: true,
                }
            },
            {
                path: '/historyOrder',
                name:'historyOrder', 
                component: historyOrder,
                meta: {
                    requireAuth: true,
                    requireStomp: true,
                }
            },
        ]   
    },
    { path: '/discover', component: discover,
        children: [
        ]
    },
    { path: '/proTrading', component: proTrading,
        meta: {
            requireAuth: true,
            requireStomp: true,
        },
        children: [
        ]
    },
    { path: '/timeline', component: timeline,
        children: [
        ]
    },
    { path: '/friend', component: friend,
        children: [
        ]
    },
    { path: '/newTrade', component: newTrade,
        children: [
        ]
    },
    { path: '/orderShare', component: orderShare,
        meta: {
            requireAuth: true,
            requireStomp: true,
        },
        children: [
        ]
    },
    { path: '/profile', component: profile,
        children: [
        ]
    },
    { path: '/account', component: account,
        children: [
        ]
    },
    { path: '/personalSetting', component: personalSetting,
        children: [
        ]
    }

];

const router = new VueRouter({
    //mode:'history', //这样url就没有/#/XXX,而是常见的url形式
    routes:routes, // short for routes: routes
    linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
    history:true
});


export  default router