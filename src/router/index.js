import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home1/HelloWorld'
import zuo_pin_xq from '@/components/home1/zuo_pin_xq.vue'

import information from '@/components/home2/information.vue'
import wen_zhang_xq from '@/components/home2/wen_zhang_xq.vue'

import zp_fb from '@/components/fabu/zp_f.vue'

import questions_and_answers from '@/components/home3/questions_and_answers.vue'
import leisure from '@/components/home4/leisure.vue'
import store from '@/components/home5/store.vue'
import video from '@/components/home6/video.vue'
import Senior_Year from '@/components/home7/Senior_Year.vue'
import big_data from '@/components/home8/big_data.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/zp_fb',component: zp_fb},//发布作品
    
    {path: '/home',component: home},//首页-作品
     {path: '/zuo_pin_xq',component: zuo_pin_xq},//作品（闲情）详情
    
    {path: '/information',component: information},//首页-咨询  
    {path: '/wen_zhang_xq',component: wen_zhang_xq}, //文章（咨询、问答）详情
    
    {path: '/questions_and_answers',component: questions_and_answers},// 首页-问答  
    
    {path: '/leisure',component: leisure},//首页-闲情   
    
    //依次往后推
    {path: '/store',component: store},   
    {path: '/video',component: video},   
    {path: '/Senior_Year',component: Senior_Year},   
    {path: '/big_data',component: big_data},   
    
     {path: '/',component: home},
    
    
    
  ]
})
