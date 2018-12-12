<template>
  <div @click.stop="sx" class="hello" style="cursor: pointer;position: relative;">
      <div id="shai" style="width: 100%;border-bottom: 1px solid #EEEEEE;height: 77px;">
          <div class="zhong" :class="{xuan:index==daer,xuan1:index!=daer}" v-for="(i,index) in shai" @click="shai_click(index)" style="">
          	   <div class="beijing"></div>
          	  <p class="zhongs1" style="font-family:'Microsoft YaHei';">{{i.name}}</p>
          	 <img v-show="index==daer" style="height:11.5px;width:130%;position: absolute;bottom: -1px;left:-15%;" src="../../../static/img_1/icon_chosen.png"/> 
          </div>
      </div>
    
    <div style="width: 100%;height:42px;margin-top:20px;background: #F4F5F6;position: relative;padding-left: 14px;">
    <!--描述：左边筛选-->   
    	 <div @click="shai_click_2(index)" v-for="(i,index) in shai2" :class="{xian2:index!=aer,xian2_s:index==aer}" style="width: 60px;height: 100%;float: left;margin-right: 1.5%;">
    	 	   <p class="ps_12"  style="font-size: 16px;line-height:45px;float:left;margin: 0;font-family:'Microsoft YaHei';">{{i}}</p>
    	 	   <img v-show="index==aer" style="margin-top:17px;float: left;margin-left: 4px;" src="../../../static/img_1/icon_tag_chosen.png" alt="" />
    	     <div v-show="index!=aer" style="margin-top:17px;" id="xian_s"></div>
    	 </div>
    	 
<!------------------------------------------------------------------------------------------------------------------------------------------>  	 
    <!--描述：筛选-->   	
 	     <div @click.stop="shai_clicks" style="position: relative;"  :class="{shai_s:shai_x,shai:shai_x==false}">
 	     	  <div v-show="shai_x" id="sh"></div>
 	     	 <!-- <p class="ps_12" style="font-size: 13px;line-height:30px;float:left;margin: 0;font-family:'fz';">筛选</p>-->
 	     	  <img style="width:16px;height:18px;float: left;margin-top:25%;margin-left:35%;" :src="(shai_x)?img_sx_x.imgs:img_sx_x.img"/>
 	     </div>
 	     
 	   <div class="shai_c_xa" :class="{shai_c_xx:shai_x,shai_cs_xx:shai_x==false}">  
 	   	
 	     <div @click.stop class="shai_ss" :class="{shai_cs:shai_x,shai_c:shai_x==false}" style="">
 	    <!--<div @click.stop class="shai_cs" >-->    
 	     	  <div style="" v-show="shai_x">
 	     	  
 	     	  <!--sx-版权-->  	
 	     	  <div style="width:100%;margin-top:1.5%;float: left;margin-top: 16px;">
 	     	  	   
 	     	   	   <p style="font-size: 12px;color: #666666;float: left;margin-left:4%;">版权</p>
 	     	   	   <div style="width:85.47%;background: #F7F8FA;border-radius: 4px;float: left;margin-left:3%;padding-bottom: 8px;padding-top: 8px;position: relative;">
 	     	   	   	  	<div class="r_top_s"></div>
 	     	   	   	  <!--版权-选项-->  
 	     	   	   	    <div v-for="(i,index) in sx_bq_act" @click.stop = 'sx_bq_click(index)' class="sx_bq_cs" :class="{sx_bq_c:sx_bq_x!=index,sx_bq_c_s:sx_bq_x==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div> 
 	     	   
 	     	  <!--sx-形式-->  	
 	     	  <div style="width:100%;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">形式</p>
 	     	   	   <div style="width:85.47%;border-radius: 4px;float: left;margin-left:3%;padding-bottom: 8px;padding-top: 8px;">
 	     	   	   	  <!--形式-选项-->  
 	     	   	   	    <div v-for="(i,index) in sx_bq_act1" @click.stop = 'sx_bq_click1(index)' class="sx_bq_cs1" :class="{sx_bq_c1:sx_bq_x1!=index,sx_bq_c_s1:sx_bq_x1==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div> 
 	     	  <!--sx-形状-->  	
 	     	  <div style="width:100%;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">形状</p>
 	     	   	   <div style="width:85.47%;background: #F7F8FA;border-radius: 4px;float: left;margin-left:3%;padding-bottom: 8px;padding-top: 8px;position: relative;">
 	     	   	   	  
 	     	   	   	  	<div class="r_top_s"></div>
 	     	   	   	  <!--形状-选项-->  
 	     	   	   	    <div v-for="(i,index) in sx_bq_act2" @click.stop = 'sx_bq_click2(index)' class="sx_bq_cs2" :class="{sx_bq_c2:sx_bq_x2!=index,sx_bq_c_s2:sx_bq_x2==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div> 
 	     	  <!--sx-材料-->  	
 	     	  <div style="width:100%;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">材料</p>
 	     	   	   <div style="width:85.47%;border-radius: 4px;float: left;margin-left:3%;padding-bottom: 8px;padding-top: 8px;position: relative;">
 	     	   	   	  <!--材料-选项-->  
 	     	   	   	    <div v-for="(i,index) in sx_bq_act3" @click.stop = 'sx_bq_click3(index)' class="sx_bq_cs3" :class="{sx_bq_c3:sx_bq_x3!=index,sx_bq_c_s3:sx_bq_x3==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div> 
 	     	  
 	     	  <!--sx-题材-->  	
 	     	  <div style="width:100%;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">题材</p>
 	     	   	   <div style="width:85.47%;background: #F7F8FA;border-radius: 4px;float: left;margin-left:3%;padding-bottom: 8px;padding-top: 8px;position: relative;">
 	     	   	   	  
 	     	   	   	  	<div class="r_top_s"></div>
 	     	   	   	  <!--题材-选项-->  
 	     	   	   	    <div v-for="(i,index) in sx_bq_act4" @click.stop = 'sx_bq_click4(index)' class="sx_bq_cs4" :class="{sx_bq_c4:sx_bq_x4!=index,sx_bq_c_s4:sx_bq_x4==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div> 
 	     	  
 	     	  <!--sx-风格-->  	
 	     	  <div style="width:100%;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">风格</p>
 	     	   	   <div style="width:85.47%;border-radius: 4px;float: left;margin-left:3%;padding-bottom: 8px;padding-top: 8px;">
 	     	   	   	  <!--风格-选项-->  
 	     	   	   	    <div v-for="(i,index) in sx_bq_act5" @click.stop = 'sx_bq_click5(index)' class="sx_bq_cs5" :class="{sx_bq_c5:sx_bq_x5!=index,sx_bq_c_s5:sx_bq_x5==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div> 
 	     	  
 	     	  <!--sx-价格-->  	
 	     	  <div style="width:100%;height: 47px;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">价格</p>
 	     	   	   <div style="width:85.47%;background: #F7F8FA;border-radius:4px;float:left;margin-left:3%;padding-bottom:10px;height: 48px;position: relative;">
 	     	   	   	  <div class="r_top_s"></div>
 	     	   	   	  <div style="width: 94%;height: 10px;margin-left: 3%;margin-top: -3px;">
 	     	   	   	 	  <el-slider  v-model="value9" range show-stops :show-tooltip="false" :max="1000"></el-slider>
 	     	   	   	  </div>
                   <p style=" left: 3%;" class="x_dian">0</p>
                   <p style="left: 21%;" class="x_dian" >¥1，000</p>
                   <p style="left: 44%;" class="x_dian" >¥2，000</p>
                   <p style="left: 68%;" class="x_dian" >¥30，000</p>
                    <p style="left: 93%;" class="x_dian" >max</p>
 	     	   	   </div>
 	     	  </div> 
 	     	  <!--sx-尺寸-->  	
 	     	  <div style="width:100%;height: 47px;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">尺寸</p>
 	     	   	   <div style="width:85.47%;border-radius:4px;float:left;margin-left:3%;padding-bottom:10px;height: 48px;position: relative;">
 	     	   	   	  <div style="width: 94%;height: 10px;margin-left: 3%;margin-top: -3px;">
 	     	   	   	 	  <el-slider  v-model="value10" range show-stops :show-tooltip="false" :max="1000"></el-slider>
 	     	   	   	  </div>
                   <p style=" left: 3%;" class="x_dian">0</p>
                   <p style="left: 21%;" class="x_dian" >50cm</p>
                   <p style="left: 44%;" class="x_dian" >100cm</p>
                   <p style="left: 68%;" class="x_dian" >150cm</p>
                    <p style="left: 93%;" class="x_dian" >max</p>
 	     	   	   </div>
 	     	   </div> 
 	     	  
 	     	   <!--sx-颜色-->  	
 	     	  <div style="width:100%;float: left;">
 	     	   	   <p style="font-size: 12px;color: #666666;float:left;margin-left:4%;margin-top: 16px;">颜色</p>
 	     	   	   <div style="width:85.47%;background: #F7F8FA;border-radius:4px;float:left;margin-left:3%;padding-bottom:10px;height: 48px;position: relative;padding-left: 5px;">
 	     	   	   	  <div class="r_top_s"></div>
 	     	   	   	  <div @click.stop='ys_click(index)' v-for="(i,index) in ys_xss" class="ys_x">
 	     	   	   	  	  <img style="width: 100%;height: 100%;" :src="(ys_xs==index)?i.imgs:i.img"/>
 	     	   	   	  </div>
 	     	   	   	  
 	     	   	   </div>
 	     	  </div> 
 	     	   <div style="width: 100%;height: 35px;float: left;margin-top: 20px;">
 	     	 	    <div class="btns">确认</div>
 	     	 	    <div class="btns1">重置</div>
 	     	 </div>
 	     	  
 	     	  </div>
 	     </div>
 	   </div>  
 	     
<!------------------------------------------------------------------------------------------------------------------------------------------->  	      
 	     <div  @click.stop="diqu_click"  :class="{diqu_s:diqu_x,diqu:diqu_x==false}" style="">
 	     	   <div v-show="diqu_x" id="qu"></div>
 	     	  <!--<p class="ps_12" style="font-size: 13px;line-height:30px;float:left;margin: 0;font-family:'fz';">地区</p>-->
 	     	  <img style="width:15px;height:20px;float: left;margin-top:11.5px;margin-left:35%;" :src="(diqu_x)?img_dq_x.imgs:img_dq_x.img"/>
 	     </div>
 	  <!--描述：点击地区详细选项-->
 	  
 	  <div class="diqu_cs_xa" :class="{diqu_cs_xx:diqu_x,diqu_c_xx:diqu_x==false}">
 	  	
 	  <div @mouseenter='hai_x=false' style="overflow: hidden;" @click.stop class="diqu_css_x" :class="{diqu_cs:diqu_x,diqu_c:diqu_x==false}">
 	     <!--<div @click.stop class="diqu_cs" >-->    
 	     	<!--国家-->
 	     	 <div v-show="diqu_x">
 	     	  <div style="width: 100%;height:40px;margin-top:4%;" >
 	     	  	 <p style="font-size: 12px;color: #666666;float: left;margin-left:4%;">国家</p>  
 	     	  	  <div id="dq_1" style="position: relative;">
 	     	  	  	 <div class="r_top_s"></div>
 	     	  	  	 <!--国家：下面的具体选项-->
 	     	  	  	   <!--<div v-for="(i,index) in dq_guojia" @click.stop="dq_guo_click(index)" class="dq_1_cs" :class="{dq_1_c:dq_guojia_x!=index,dq_1_c_s:dq_guojia_x==index}">-->
 	     	  	  	  	   <!--{{i}}-->
 	     	  	  	   <!--</div>-->
 	     	  	  	   <div @mouseenter='hai_x=false' @click.stop="dq_guo_click" class="dq_1_cs" :class="{dq_1_c:dq_guojia_x==true,dq_1_c_s:dq_guojia_x==false}">
 	     	  	  	   	       中国
 	     	  	  	   </div>
 	     	  	  	   <div @mouseenter.stop='hai_x=true'   @click.stop="dq_guo_click" class="dq_1_cs" :class="{dq_1_c:dq_guojia_x==false,dq_1_c_s:dq_guojia_x==true}">
 	     	  	  	   	       海外
 	     	  	  	   </div>
 	     	  	  	   
 	     	  	  </div>
 	     	  </div>
 	     	      
 	     	     <div class="hai_s" :class="{hai_wai:hai_x==false,hai_wais:hai_x}">
 	     	     	  <div v-show="hai_x">
 	     	     	     <img   class="img_t" src="../../../static/img_1/icon_select_trangle.png"/>
 	     	     	     <div  v-for="(i,index) in hai_act" @click.stop ='hai_click(index)' class="hai_sf_cs" :class="{hai_sf_c:hais_x!=index,hai_sf_c_s:hais_x==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	   </div>
 	     	   	   	 </div>
 	     	     </div>
 	     	      
 	     	      
 	     	<!--省份-->  
 	     	   <div style="width:100%;margin-top:1.5%;height:133px;" @mouseenter='hai_x=false'>
 	     	   	   <p style="font-size: 12px;color: #666666;float: left;margin-left:4%;">省份</p>
 	     	   	   <div style="width:85.47%;margin-left:10.5%;position: relative;">
 	     	   	   	  
 	     	   	   	  	 
 	     	   	   	  <!--省份-选项-->  
 	     	   	   	    <div v-for="(i,index) in dq_sf_act" @click.stop = 'dq_sf_click(index)' class="dq_sf_cs" :class="{dq_sf_c:dq_sf_x!=index,dq_sf_c_s:dq_sf_x==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div>
 	     	<!--地区--> 
 	     	<div style="width:100%;margin-top:1.5%;" @mouseenter='hai_x=false'>
 	     	   	   <p style="font-size: 12px;color: #666666;float: left;margin-left:4%;">地区</p>
 	     	   	   <div style="width:85.47%;background: #F7F8FA;border-radius: 4px;float: left;margin-left:3%;padding-bottom: 10px;position: relative;">
 	     	   	   	  
 	     	   	   	  	 <div class="r_top_s"></div>
 	     	   	   	  <!--省份-选项-->  
 	     	   	   	    <div v-for="(i,index) in dq_dq_act" @click.stop = 'dq_dq_click(index)' class="dq_dq_cs" :class="{dq_dq_c:dq_dq_x!=index,dq_dq_c_s:dq_dq_x==index}">
 	     	   	   	    	      {{i}}
 	     	   	   	    </div>
 	     	   	   </div>
 	     	   </div>
 	     	 <div style="width: 100%;height: 35px;float: left;margin-top: 20px;">
 	     	 	    <div class="btns">确认</div>
 	     	 	    <div class="btns1">重置</div>
 	     	 </div>
 	    </div> 	
 	  </div>
 	  
 	 </div>
<!-------------------------------------------------------------------------------------------------------------------------------------------->  	      
 	     
     <!--描述：清空-->   	  
       <p style="font-size: 12px;line-height:42px;float:right;margin: 0;color:#2A52FF;margin-right: 1.5%;">清空</p>
    	 
    	 <div class="s_box_c">
    	 	  <p style="font-size:12px;line-height:24px;float:left;margin:0;">纸张</p>
    	 	  <img style="width: 14px;height: 14px;position: absolute;top: 20%;right:9%;" src="../../../static/img_1/icon_tag_delete.png"/>
    	 </div>
    </div>
    
    <div style="width: 100%;height:400px;">
    	 <div class="box_ss" v-for="(i,index) in actives" style="width:18.7%;height: auto;padding-bottom: 20px;float: left;margin-right: 1.6%;transition: 2s;">
    	 	    
    	 	    
    	 	    <div v-for="(j,indexs) in i" @click="zp_x(i)" v-show="j.picUrl" class="box_f" style="margin-top: 20px;">
    	 	    	  <div class="san_jiao"></div>
    	 	    	  <img style="width: 100%;height: auto;" :src="j.picUrl"/>
    	 	    	 
    	 	    	 <div style="width: 100%;height: 50px;position: absolute;bottom:59px;overflow: hidden;z-index: 2;">
    	 	    	 	   
    	 	    	 	   <div class="box_topx">
    	 	    	  	     <img style="width:25px;height:25px;border-radius:50%;margin-left:12px;margin-top:17px;float:left;" src="../../../static/img/app20180808105747.jpg"/>
    	 	    	         <p style="font-size:13px;color: white;float:left;margin-left: 8px;line-height:35px;">苏伟</p>
    	 	    	          <!--收藏-->
                        <img style="width:17px;height:17px;float:right;margin-right:9px;margin-top:20.5px;" src="../../../static/img_1/icon_collect.png"/>       	
                        <!--喜欢-->
                        <img style="width:17px;height:17px;float:right;margin-right:17px;margin-top:22px;" src="../../../static/img_1/icon_like.png"/>    
    	 	    	 	   </div>
    	 	    	  </div>
    	 	    	  
    	 	    	  <div style="width:100%;height:43px;">
    	 	    	  	  <p class="p_artTitle" style="">{{j.artTitle}}</p>
    	 	    	  	  <p class="box_px" style="">{{((j.artType.split("|")).join('—')).replace(" ","")}}，12x32cm,1980年</p>
    	 	    	  	  <!--<p class="box_px" style="">{{tatil(j.artType)}}，12x32cm,1980年</p>-->
    	 	    	  </div>
    	 	    </div>
    	 	    
    	 	    
    	 </div>
    	
    	 
    	 <div class="box_ss"  style="width:18.7%;height: auto;padding-bottom: 20px;float: left;margin: 0;transition: 2s;">
    	 	    <div v-for="(i,index) in actives_v" @click="zp_x(i)" v-show="i.picUrl" class="box_f" style="margin-top: 20px;">
    	 	    	  <div class="san_jiao"></div>
    	 	    	  <img style="width: 100%;height: auto;" :src="i.picUrl"/>
    	 	    	      
    	 	    	  <div style="width: 100%;height: 50px;position: absolute;bottom:59px;overflow: hidden;z-index: 2;">
    	 	    	 	    
    	 	    	 	   <div class="box_topx">
    	 	    	  	     <img style="width:25px;height:25px;border-radius:50%;margin-left:12px;margin-top:17px;float:left;" src="../../../static/img/app20180808105747.jpg"/>
    	 	    	         <p style="font-size:13px;color: white;float:left;margin-left: 8px;line-height:35px;">苏伟</p>
    	 	    	         <!--收藏-->
                        <img style="width:17px;height:17px;float:right;margin-right:9px;margin-top:20.5px;" src="../../../static/img_1/icon_collect.png"/>       	
                       <!--喜欢-->
                        <img style="width:17px;height:17px;float:right;margin-right:17px;margin-top:22px;" src="../../../static/img_1/icon_like.png"/>    
    	 	    	 	   </div>
    	 	    	 </div>
    	 	    	  
    	 	    	  <div style="width:100%;height:43px;">
    	 	    	  	  <p class="p_artTitle">{{i.artTitle}}</p>
    	 	    	  	  <p class="box_px" style="">油画，12x32cm,1980年</p>
    	 	    	  </div>
    	 	    </div>
    	 </div>
    	 
    </div>
    
    
  </div>
</template>

<script>
	import store from '../../vuex/store'
	import router from '../../router/index.js'
  import md5 from 'js-md5';
export default {
	store,
	
  data (){

    return {
    	//海外数据
    	hai_act:['美国','英国','法国','意大利','韩国 ','日本','荷兰','巴西','印度尼西亚','意大利 ','韩国 ','山东','日本'],
    	hais_x:0,
    	
    	
    	hai_x:false,
    	
       shai:[{name:'全部',id:0},{name:'全部',id:1},{name:'全部',id:2},{name:'全部',id:3},
             {name:'全部',id:4},{name:'全部',id:5},{name:'全部',id:6},{name:'全部',id:7},
             {name:'全部',id:8},{name:'全部',id:9},{name:'全部',id:10},{name:'更多',id:11}],
       daer:0,
       aer:0,
       shai2:['推荐','最新','最热','我的','收藏'],
       act:[],
       actives:[[],[],[],[]],//瀑布流数据储存
       actives_v:[],//瀑布流数据储存
       
       diqu_x:false,   
       shai_x:false,
       
//     dq_guojia:['中国','海外'],//地区筛选，顶部《国家》选项数据
       dq_guojia_x:false,
       //地区筛选，《省份》选项数据
       dq_sf_act:['山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东','山东'],
       dq_sf_x:0,
       //地区筛选，《地区》选项数据
       dq_dq_act:['梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州','梅州'],
      
       dq_dq_x:0,
       
       //筛选，《版权》选项数据
       sx_bq_act:['RF','RM','PE'],
       sx_bq_x:0,
        //筛选，《形式》选项数据
       sx_bq_act1:['视频','图片'],
       sx_bq_x1:0,
        //筛选，《形状》选项数据
       sx_bq_act2:['正方','正方','正方','正方'],
       sx_bq_x2:0,
        //筛选，《材料》选项数据
       sx_bq_act3:['纸张','亚克力','木材','玻璃','木材','玻璃','木材','玻璃'],
       sx_bq_x3:0,
        //筛选，《题材》选项数据
       sx_bq_act4:['人物','风景','静物','动物','卡通','其他'],
       sx_bq_x4:0,
       //筛选，《风格》选项数据
       sx_bq_act5:['抽象','写实','古典','印象','卡通','其他'],
       sx_bq_x5:0,
       
       
       value9: [400, 800],
       value10: [400, 800],
       
       ys_xss:[//颜色选择器---》数据存储
          {
          	img:'static/img_2/icon_red_normal.png',
          	imgs:'static/img_2/icon_red_active.png',
          },
          {
          	img:'static/img_2/icon_orange_normal.png',
          	imgs:'static/img_2/icon_orange_active.png',
          },
          {
          	img:'static/img_2/icon_yellow_normal.png',
          	imgs:'static/img_2/icon_yellow_active.png',
          },
          {
          	img:'static/img_2/icon_green_normal.png',
          	imgs:'static/img_2/icon_green_active.png',
          },
         {
          	img:'static/img_2/icon_blue_normal.png',
          	imgs:'static/img_2/icon_blue_active.png',
          },
          {
          	img:'static/img_2/icon_purple_normal.png',
          	imgs:'static/img_2/icon_purple_active.png',
          },
          {
          	img:'static/img_2/icon_black_normal.png',
          	imgs:'static/img_2/icon_black_active.png',
          },
       ],
       ys_xs:0,     
        
       ye_shu:1,//页数
       tiao_shu:20,//条数
      
       img_dq_x:{
      	  img:'static/img_1/icon_address_normal.png',
      	  imgs:'static/img_1/icon_address_active.png',
       },
       img_sx_x:{
      	  img:'static/img_1/icon_select_normal.png',
      	  imgs:'static/img_1/icon_select_active.png',
       },
      
    }
  },
  mounted(){
  	$('.beijing').css('border-radius',$(window).width()*0.040104/2+'px');
  	this.huoqu()
  	
   $('#shai').css('padding-left',($(window).width()*0.9375)*0.1505+'px')
	 $('.zhong').css('margin-left',($(window).width()*0.9375)*0.0302+'px')
  	
  	
  	var thit = this
   $('.hello').on("mousewheel DOMMouseScroll", function (e){//判断鼠标滚轮向下滚动
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
         if (delta < 0){
         	     thit.shai_x =false;
  	 	   	     thit.diqu_x = false
               let a = $('.box_f').length-1
               var  mTop = $('.box_f')[a].offsetTop;
               var  sTop = $(window).scrollTop();
               var  result = mTop - sTop;
               
//             console.log(result,'滑轮滑动距离')
            if(result<80){
            	  thit.ye_shu+=1;
            	  thit.huoqu();
             }
          }
       });	
  	
  },
  methods:{
  	zp_x(i){
  		  if(localStorage.memid){
  		  	 router.push({
					   path: '../zuo_pin_xq'
				   })
  		  }else{
  		  	 this.$message('需要登录之后才能操作(点击头像即可登录)');
  		  }
  		  
  	},
  	show_s(){
       
  	},
  	
  	hai_click(index){
  		   this.hais_x=index
  	},
  	
  	
  	//瀑布流数据请求
    huoqu(){
    	   this.$http({
					url: this.$store.state.url + "/api/mapFreeVerification/touristsGetDisplayArtList.do",
					headers: {
						"content-type": "application/json;charset=UTF-8",
					},
					emulateJSON: false,
					method: 'post',
					body: JSON.stringify({
//						artType: ['全部'],
						rows: this.tiao_shu,
						page: this.ye_shu,
//						max:100,
//						min:16,
//						gander:'全部',
//						typesOf:['全部'],
//						area:null
//						opId: this.$store.state.data.memId
					})
				}).then(function(response) {
					if(response.body.meta.res == '00000'){
//						console.log('游客状态数据',response)
						if(response.body.data.artHone.length!=0){
							  for(var i=0;i<response.body.data.artHone.length;i++){
							  	     this.act.push(response.body.data.artHone[i])
							        }
							        this.act=this.sz_qc(this.act);
                      this.fen_liu(this.act)
						    }
					 }else{
					 	  this.$message({
                message:response.body.meta.msg ,
                type: 'warning'
              });
					 }
				}).catch(function(err) {
					 console.log(err)
					  this.$message({
                message:'网络错误',
                type: 'warning'
              });
				})
    },
    fen_liu(act){
    	     	       var a1 = 0,a2=1,a3=2,a4=3,a5=4;
                   for(var i=0;i<act.length;i++){
                   	  if(act[a1]!=undefined){
                   	  	this.actives[0].push(act[a1])
                   	  }
                   	  if(act[a2]!=undefined){
                   	  	 this.actives[1].push(act[a2])
                   	  }
                   	  if(act[a3]!=undefined){
                   	  	 this.actives[2].push(act[a3])
                   	  }
                   	  if(act[a4]!=undefined){
                   	  	 this.actives[3].push(act[a4])
                   	  }
                   	  if(act[a5]!=undefined){
                   	  	 this.actives_v.push(act[a5])
                   	  }
                   	   a1+=5;a2+=5;a3+=5;a4+=5;a5+=5
                   }
                  //执行数组去重
                  this.actives[0] = this.sz_qc(this.actives[0]);
                  this.actives[1] = this.sz_qc(this.actives[1]);
                  this.actives[2] = this.sz_qc(this.actives[2]); 
                  this.actives[3] = this.sz_qc(this.actives[3]); 
                  this.actives_v = this.sz_qc(this.actives_v);  
                  
                 console.log(this.actives,'7777777777');
                 console.log(this.actives_v,'7777777777')
    },
    
    sz_qc(arr){//数组去重函数
    	          var a= arr//需要处理的数组
             	  var res = [];//最后的结果
                 var json = {};
                 for(var i = 0; i < a.length; i++){
                    if(!json[a[i].artId]){
                       res.push(a[i]);
                          json[a[i].artId] = 1;
                      }
                   } 
                return res  
     },
    
  	ys_click(index){
  		 this.ys_xs = index
  	},
  	
  	sx_bq_click5(index){//筛选，《材料》选项
  		 this.sx_bq_x5 = index;
  	},
  	sx_bq_click4(index){//筛选，《材料》选项
  		 this.sx_bq_x4 = index;
  	},
  	sx_bq_click3(index){//筛选，《材料》选项
  		 this.sx_bq_x3 = index;
  	},
  	sx_bq_click2(index){//筛选，《形状》选项
  		 this.sx_bq_x2 = index;
  	},
  	sx_bq_click1(index){//筛选，《形式》选项
  		 this.sx_bq_x1 = index;
  	},
  	sx_bq_click(index){//筛选，《版权》选项
  		 this.sx_bq_x = index;
  	},
  	
  	dq_dq_click(index){
  		 this.dq_dq_x = index;
  	},
  	dq_sf_click(index){
  		 this.dq_sf_x = index;
  	},
  	dq_guo_click(){
//		  this.dq_guojia_x = index;
        this.dq_guojia_x=(this.dq_guojia_x)?false:true;
  	},
  	
  	 shai_click(index){
  	 	   this.daer = index;
  	 },
  	 shai_click_2(index){
  	 	  this.aer = index;
  	 },
  	 diqu_click(){
  	 	   if(this.diqu_x){
  	 	   	  this.diqu_x = false
  	 	   }else{
  	 	   	  this.diqu_x =true;
  	 	   	  this.shai_x = false
  	 	   }
  	 },
  	 
  	 shai_clicks(){
  	 	   if(this.shai_x){
  	 	   	  this.shai_x = false
  	 	   }else{
  	 	   	  this.shai_x =true;
  	 	   	  this.diqu_x = false
  	 	   }
  	 	   
  	 },
  	 sx(){
  	 	      this.shai_x =false;
  	 	   	  this.diqu_x = false
  	 }
  	 
  },
  computed:{//计算属性
//		   tatil(a){
//		   	  return a.split("|").join('—').replace(" ","")
//		   },
	},
  
}
</script>

<style scoped>
	.hello{
		width: 93.5%;
		margin: auto;
	}
	*{
		
	}
	.p_artTitle{
		font-size:14px;font-family: 'Microsoft YaHei';margin: 0;margin-left: 11px;margin-top:7px;font-weight: 600;
		overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 320px;
	}
	.r_top_s{
		width: 0;
    height: 0;
    border-top: 16px solid white;
    border-left: 16px solid transparent; 
    position: absolute;top: 0rem;
    right: -0.015rem;
	}
	
	.hai_sf_cs{
		 transition: 0.5s;
	}
	.hai_sf_c{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 17px 0px 0px 30px;
		 transition: 0.5s;
	}
	.hai_sf_c_s{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 17px 0px 0px 30px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.hai_sf_c:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	.img_t{
		 width: 25px;
		 height: 13px;
		 position: absolute;
		 top: -13px;
		 left:25px;
	}
	.hai_s{
		   transition: 0.5s;
	}
	.hai_wai{
		  width: 0;
		  height: 0;
		  background: rgba(255,255,255,1);
     -moz-box-shadow:0px 0px 6px #4A4A4A; -webkit-box-shadow:0px 0px 6px #DFDFDF; box-shadow:0px 0px 6px #DFDFDF;
		  position: absolute;
		  top: 70px;
		  left: 130px;
		  transition: 0.5s;
	}
	.hai_wais{
		  /*display:block;*/
		  width: 77%;
		  /*height: 140px;*/
		  padding-bottom: 20px;
		  transition: 0.5s;
		  background: rgba(255,255,255,1);
     -moz-box-shadow:0px 0px 6px #4A4A4A; -webkit-box-shadow:0px 0px 6px #DFDFDF; box-shadow:0px 0px 6px #DFDFDF;
		  position: absolute;
		  top: 70px;
		  left: 130px;
		  transition: 0.5s;
		  z-index: 500;
	}
	
	.ys_x{
		  width:11.7%;
      height:42%;
      float: left;
      margin: 2.5% 0 0 2%;
	}
	.x_dian{
		  font-size: 10px;
		  color: #9C9C9C;
		  position: absolute;
		  bottom: -6px;
	}
	
	
	.sx_bq_cs5{
		 transition: 0.5s;
	}
	.sx_bq_c5{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
	}
	.sx_bq_c_s5{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.sx_bq_c5:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	.sx_bq_cs4{
		 transition: 0.5s;
	}
	.sx_bq_c4{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
	}
	.sx_bq_c_s4{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.sx_bq_c4:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	
	.sx_bq_cs3{
		 transition: 0.5s;
	}
	.sx_bq_c3{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
	}
	.sx_bq_c_s3{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.sx_bq_c3:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	
	.sx_bq_cs2{
		 transition: 0.5s;
	}
	.sx_bq_c2{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
	}
	.sx_bq_c_s2{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.sx_bq_c2:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	
	
	.sx_bq_cs1{
		 transition: 0.5s;
	}
	.sx_bq_c1{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
	}
	.sx_bq_c_s1{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.sx_bq_c1:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	
	.sx_bq_cs{
		 transition: 0.5s;
	}
	.sx_bq_c{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
	}
	.sx_bq_c_s{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 4px 7px 4px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.sx_bq_c:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	.btns1{
		 width: 13%;
		 height: 100%;
		 background: red;
		 float: right;
		 margin-right:2.5%;
		 background: url(../../../static/img_2/icon_btn_reset.png) ;
		 background-size:100% 100%;
		 font-size: 12px;
		 color: black;
		 line-height: 35px;
		 text-align: center;
	}
	
	.btns{
		 width: 13%;
		 height: 100%;
		 background: red;
		 float: right;
		 margin-right:4%;
		 background: url(../../../static/img_2/icon_btn_ensure.png) ;
		 background-size:100% 100%;
		 font-size: 12px;
		 color: white;
		 line-height: 35px;
		 text-align: center;
	}
	
	
	.dq_dq_cs{
		 transition: 0.5s;
	}
	.dq_dq_c{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 8px 7px 0px 8px;
		 transition: 0.5s;
	}
	.dq_dq_c_s{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 8px 7px 0px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.dq_dq_c:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	
	
	.dq_sf_cs{
		 transition: 0.5s;
	}
	.dq_sf_c{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 8px 7px 0px 8px;
		 transition: 0.5s;
	}
	.dq_sf_c_s{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 8px 7px 0px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.dq_sf_c:hover{
		  background: #EFEFEF;
		  transition: 0.5s;
	}
	.dq_1_cs{
		  transition: 0.5s;
	}
	.dq_1_c_s{
		 padding: 0 12px;
		 height: 24px;
		 background: #EFEFEF;
		 float: left;
		 border-radius: 12px;
		 color: black;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 8px 7px 0px 8px;
		 transition: 0.5s;
		 font-weight: 600;
	}
	.dq_1_c{
		 padding: 0 12px;
		 height: 24px;
		 /*background: #EFEFEF;*/
		 float: left;
		 border-radius: 12px;
		 color: #9C9C9C;
		 font-size: 12px;
		 line-height: 24px;
		 margin: 8px 7px 0px 8px;
		 transition: 0.5s;
	}
	.dq_1_c:hover{
		 background: #EFEFEF;
		  transition: 0.5s;
	}
	
	 #dq_1{
	 	  width:85.47%;
	 	  height: 40px;
	 	  border-radius: 4px;
	 	  background: #F7F8FA;
	 	  float: left;
	 	  margin-left:3%;
	 }
	#sh{
		 width: 100%;
    height: 15px;
    background: white;
    position: absolute;
    left: 0;
    bottom: -25%;
    z-index: 503;
	}
	.shai_css{
		transition: 0.5s;
		background: white;
	}
	
	
	.shai_c_xa{
		 transition: 0.5s;
		 width:800px;
		 height:800px;
     /*min-height:80%;*/
     padding-bottom: 20px;
     border-radius:4px;
     /*border: 1px solid blue;*/
     /*background: red;*/
     position: absolute;
     right: -57px;
     /*z-index:500;*/
     top:35px;
     overflow: hidden;
	}
	
	.shai_c_xx{
     z-index:500;
	}
	 .shai_cs_xx{
     z-index:-1;
	 }
	
	
	
	.shai_cs{
		 /*transition: 0.5s;*/
		 width:700px;
		 height: 541px;
     /*min-height:80%;*/
     padding-bottom: 20px;
     padding-top: 20px;
     border-radius:4px;
     background: white;
     position: absolute;
     /*right: 0;*/
     z-index:500;
     top:7px;
     -webkit-transform: translateX(43px); transform: translateX(43px);
     -moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;
	  
	}
	 .shai_c{
	 	 /*transition: 0.5s;*/
	 	 width:700px;
	 	 height: 541px;
     border-radius:4px;
     background: white;
     position: absolute;
     /*right: 0;*/
     z-index:500;
     top:7px;
     /*-moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;*/
	   -webkit-transform: translateX(820px); transform: translateX(820px);
	 }
	 .shai_ss{
	 	  transition: 0.5s;
	 }
	 
	 .shai_s{
	 	  height: 100%;
	 	  float: right;
	 	   width: 54px;
	 	  /*padding:0 15px;*/
	 	  background: white;
	 	  position: relative;
	 	  z-index: 501;
	 	 -moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;
	 	  border-radius:3px 3px 0 0;
	 }
	 
	.shai{
		 transition: 0.5s;
		 width: 54px;height: 100%;float: right;
	}
	
/*----------------------------------------------------------------------------------------------------------------------------------------------*/	
	
	#qu{
		width: 100%;
    height: 15px;
    background: white;
    position: absolute;
    left: 0;
    bottom: -25%;
    z-index: 503;
	}
	.diqu_css{
		transition: 0s;
	}
	.diqu_css_x{
		transition: 0.8s;
	}
	.diqu_cs_xa{
		 transition: 0.5s;
		 width:800px;
		 height:600px;
     /*min-height:80%;*/
     padding-bottom: 20px;
     border-radius:4px;
     /*border: 1px solid blue;*/
     /*background: red;*/
     position: absolute;
     right: -57px;
     top:35px;
     overflow: hidden;
	}
	
	.diqu_cs_xx{
     z-index:500;
	}
	 .diqu_c_xx{
     z-index:-1;
	 }
	
	
	.diqu_cs{
		 transition: 0.5s;
		 width:700px;
		 /*height:403px;*/
     /*min-height:80%;*/
     padding-bottom: 20px;
     border-radius:4px;
     /*border: 1px solid blue;*/
     background: white;
     position: absolute;
     /*right: 0;*/
     z-index:500;
     top:7px;
      -webkit-transform: translateX(43px); transform: translateX(43px);
     -moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;
	  
	}
	 .diqu_c{
	 	 transition: 0.5s;
	 	 /*width:0;*/
	 	 width:700px;
     height:403px;
     border-radius:4px;
     /*border: 1px solid blue;*/
     background: white;
     position: absolute;
     /*right: 0;*/
     z-index:500;
     top:7px;
     /*-moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;*/
	   -webkit-transform: translateX(825px); transform: translateX(825px);
	   
	 }
	 
	 .diqu_ss{
	 	  transition: 0.5s;
	 }
	 
	 .diqu_s{
	 	  height: 100%;
	 	  float: right;
	 	  /*margin-right: 2%;*/
	 	  /*padding:0 15px;*/
	 	 width:54px;
	 	  background: white;
	 	  position: relative;
	 	  z-index: 501;
	 	 -moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;
	 	  border-radius:3px 3px 0 0;
	 }
	 
	.diqu{
		 transition: 0.5s;
		 width:54px;height: 100%;float: right;
	}
	
	
	.box_f{
		width: 100%;height: auto;position:relative;
		overflow: hidden;
		transition: 0.5s;
		padding-bottom: 5px;
	}
	.box_px{
		font-size: 12px;
		color: #9C9C9C;
		margin: 0;
		margin-left: 11px;
		margin-top: 27px; 
	  transition: 0.1s;
	}
	
	.box_topx{
		width: 100%;
		height: 50px;
		background-image:linear-gradient(to top, rgba(0,0,0,.1), rgba(0,0,0,0));
		position: absolute;
		bottom:-50px;
		left: 0;
		z-index: 1;
		transition: 0.2s;
	}
	
	.box_f:hover{
		 transition: 0.5s;
		 border-radius: 8px;
		 -moz-box-shadow:0px 10px 15px #F0F0F2; -webkit-box-shadow:0px 10px 15px #F0F0F2; box-shadow:0px 5px 20px #C4C4C4;
	}
	.box_f:hover .box_px{
		 transition: 0.5s;
		 font-size: 12px;
		color: #9C9C9C;
		
		/*margin-top: 5px;*/ 
		
		-webkit-transform: translateY(-20px); transform: translateY(-20px);
		
	}
	.box_f:hover .san_jiao{
		  /*top: -20.5px;*/
		  -webkit-transform: translateY(-20.5px); transform: translateY(-20.5px);
		  transition: 0.5s;
		  
	}
	.box_f:hover .box_topx{
		 width: 100%;
		height: 50px;
		background-image:linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,0));
		position: absolute;
		
		z-index: 1;
		transition: 0.5s;
		-webkit-transform: translateY(-50px); transform: translateY(-50px);
	}
	 
	.san_jiao{
		width: 0;
    height: 0;
    border-top: 20.5px solid white;
    border-left: 20.5px solid transparent; 
    position: absolute;top: 0rem;
    right: -0.015rem;
    transition: 0.5s;
    z-index: 2;
	}
	
	.beijing{
		 width: 170%;
		 height: 50%;
		 position: absolute;
		 left: -31%;
		 top: 25%;
		 transition:all 0.5s;
	}
	.zhong:hover .beijing{
		 transition:all 0.5s;
		 background:#EFEFEF;
	}
	
	  .zhongs1{
		 font-size:20px;
		 margin:0;
		 /*margin-top:20px;*/
		 text-align:center;
		 position: relative;
		 z-index: 2;
		 line-height: 77px; 
		 height: 77px;
	  }
	  .zhong{
		 height:77px;float:left;width:auto;position: relative;margin-left: 4%;
		 /*background: red;*/
	  }
	
	  .s_box_c{
	 	 width:auto;
     height:24px;
     background:rgba(239,239,239,1);
     float: right;
     border-radius: 12px;
     margin-top:0.6%;
     margin-right: 1.3%;
     position: relative;
     padding:0  30px 0px 15px;
	  }
    .xuan{
    	color: block;
    }
    .xuan1{
    	color:#9C9C9C;
    }
    #xian_s{
    	 width: 2px;
    	 height: 12px;
    	 background: #9C9C9C;
    	 float: right;
    	 margin-top: 25%;
    	 margin-right: 3px;
    }
    .xian2{
    	 color:#9C9C9C;
    }
    .xian2_s{
    	 color:block;
    }
</style>
