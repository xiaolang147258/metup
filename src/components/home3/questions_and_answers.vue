<template>
  <div class="hello">
  	  <div class="hell" style="width:100%;height: auto;float: left;">
  	  	  
 <!----------------------------------------------------------------------------------------------------------------------------->
      <div style="float:left;width: 72px;height: 200px;margin: 84px 41px 0 0;">
          
          <div @click="left_click(index)" :class="{left_cs:a_left==index}" class="left_c" v-for="(i,index) in act_left">
          	  <!--<img v-show="a_left==index" src="../../../static/img_3/icon_left_xuanzhong.png"/>-->
          	     {{i}}
          </div>
          
      </div>
 <!----------------------------------------------------------------------------------------------------------------------------->      
    <div style="width: 658px;height:auto;float: left;padding-bottom: 40px;">
       <!-----------------------------------------------------------------------------------------------------------------------------> 
      	  <div style="width: 100%;height:50px;border-bottom: 1px solid #EDEDED;margin-top: 18px;">
      	  	   
      	  	   <div @click="zong_click(index)" v-for="(i,index) in zong_act" :class="{p_s:zong_tx!=index,p_ss:zong_tx==index}" style="">
      	  	    	       {{i}}
      	  	    	 <img v-show="zong_tx==index" src="../../../static/img_1/icon_chosen.png"/>
      	  	    </div>
      	  	    
      	  	    <div @click="zong_click(4)"  :class="{p_s:zong_tx!=4,p_ss:zong_tx==4}" style="margin: 0;">
      	  	    	       物
      	  	    	 <img v-show="zong_tx==4" src="../../../static/img_1/icon_chosen.png"/>
      	  	    </div>
      	  </div>
       <!-----------------------------------------------------------------------------------------------------------------------------> 
      	 
      	  <div style="width: 100%;height: 300px;margin-top: 16px;">
      	 	    <div class="box_i">
      	 	    	  <img src="../../../static/img/594bee20ada6772b177da5b9b9e3c984.jpg"/>
      	 	    	  <div id="box_i_c">
      	 	    	  	  <p>设计师开发客户如何提高签单率</p>
      	 	    	  </div>
      	 	    </div>
      	 	    <div style="width:58px;height: 300px;float: left;background: black;font-family:SimSun;">
      	 	    	 
      	 	    	 <div @click="left_box_cl(index)" v-for="(i,index) in left_box_act" :class="{left_box:left_box_x!=index,left_boxs:left_box_x==index}">
      	 	    	  	    {{i}}
      	 	    	  	 <img v-show="left_box_x==index" class="img_ssa" src="../../../static/img_3/icon_blue_trangle.png" alt="" />
      	 	    	  </div>
      	 	    	  
      	 	    </div>
      	   </div>
       <!-----------------------------------------------------------------------------------------------------------------------------> 
      	 <!--赛选的，选项---------------------------------------------------------------------------->
      	  <div style="width: 100%;height:36px;">
      	  	   <!--描述：清空-->   	  
      	  	       <div class="s_box_css">
    	 	                <p style="font-size:12px;line-height:24px;float:left;margin:0;">纸张</p>
    	 	                <img style="width: 14px;height: 14px;position: absolute;top: 20%;right:6px;" src="../../../static/img_1/icon_tag_delete.png"/>
    	              </div>
                   <p style="font-size: 12px;float:left;margin: 0;color:#2A52FF;margin-top:15px;">清空</p>
    	 
      	  </div>
      	 <!------------------------------------------------------------------------------------->
      	 
      	 
      	 <div style="width: 100%;height: 42px;background: #F4F5F6;margin-top: 10px;padding-left: 16px;position: relative;">
      	  <!--
            	作者：2443611475@qq.com
            	时间：2018-08-18
            	描述：左侧筛选
            -->   
          <div @click="shai_click_2(index)" v-for="(i,index) in shai2" :class="{xian2:index!=aer,xian2_s:index==aer}" style="width: 46px;height: 100%;float: left;margin-right:25px">
    	 	     <p  style="font-size: 16px;line-height:45px;float: left;margin: 0;font-family:'fz';">{{i}}</p>
    	 	     <img v-show="index==aer" style="margin-top:35%;float:left;margin-left:4px;" src="../../../static/img_1/icon_tag_chosen.png" alt="" />
    	       <div v-show="index!=aer" id="xian_s"></div>
    	    </div>
    	     <!--
            	作者：2443611475@qq.com
            	时间：2018-08-18
            	描述：右侧筛选
            --> 
      <div @click.stop="shai_clicks" style="position: relative;" class="shai_ss" :class="{shai_s:shai_x,shai:shai_x==false}">
 	     	  <div v-show="shai_x" id="sh"></div>
 	     	 <!-- <p class="ps_12" style="font-size: 13px;line-height:30px;float:left;margin: 0;font-family:'fz';">筛选</p>-->
 	     	  <img style="width:16px;height:18px;float: left;margin-top:25%;margin-left:35%;" :src="(shai_x)?img_sx_x.imgs:img_sx_x.img"/>
 	     </div> 
       <div @click.stop class="shai_css" :class="{shai_cs:shai_x,shai_c:shai_x==false}">
 	    <!--<div @click.stop class="shai_cs" >-->    
 	     	  <div v-show="shai_x">
 	     	  
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
 	     	   	   	  <div style="width: 94%;height: 10px;margin-left: 3%;margin-top: -2px;">
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
      
      	<!--描述：点击地区详细选项-->
 	  
      	
      </div>
      <!----------------------------------------------------------------------------------------------------------------------------->
      <div v-for="(i,index) in z_act" class="z_box">
      	  
      	  <div style="width: 100%;height: 130px;margin-top: 14px;font-family:SimSun;">
      	  	  <div class="img_b">
      	  	  	   <img src="../../../static/img/594bee20ada6772b177da5b9b9e3c984.jpg"/>
      	  	  	    <div class="san_jiao"></div>
      	  	  </div>
      	  	  <div style="width: 498px;height:130px;float: left;">
      	  	  	
      	  	  	  <p class="z_box_p">修车的人一般都会选择买什么车？<span style="margin-left:7px;"><img style="width: 13px;height: 12px;" src="../../../static/img_3/qian_20180821164203.jpg"/>
      	  	  	  <a style="font-size: 12px;color: #999999;font-family:'SimSun';">20觅币</a></span></p>
      	  	  	   
      	  	  	  <span class="z_p_box">
      	  	  	  	 <a>油画</a>
      	  	  	  	 <img src="../../../static/img/594bee20ada6772b177da5b9b9e3c984.jpg" alt="" />
      	  	  	  	 <p>腾讯新闻</p>
      	  	  	  	 <p>•</p>
      	  	  	  	 <p>32分钟前发布</p>
      	  	  	  </span>
      	  	  	  <br />
      	  	  	  <p class="z_box_ps">李彦宏表示，“现在中国的科技公司有足够的能力和信心，在与国际企业的良性竞争足竞
                                                         够的能力和信心，在与国际企业的良性竞争中变....<a style="font-size:12px;color:#2A52FF;">全文</a></p>
      	  	  	  <div style="width:100%;height:16px;line-height:16px;margin-top:9px;">
      	  	  	  	<!--爱心-->
      	  	  	  	 <span style="float: left;font-size: 14px;">
      	  	  	  	 	  <img class="da_img" src="../../../static/img_3/icon_like_small.png"/>
      	  	  	  	 	   32
      	  	  	  	 </span>
      	  	  	  	<!--收藏--> 
      	  	  	  	  <span style="float: left;font-size: 14px;margin-left: 24px;">
      	  	  	  	 	  <img class="da_img_1" src="../../../static/img_3/icon_collect_like.png"/>
      	  	  	  	 	   32
      	  	  	  	 </span>
      	  	  	  	<!--评论-->  
      	  	  	  	 <span style="float: left;font-size: 14px;margin-left: 24px;">
      	  	  	  	 	  <img class="da_img_2" src="../../../static/img_3/icon_comment_small.png"/>
      	  	  	  	 	   32
      	  	  	  	 </span>
      	  	  	  	 <!--分享-->  
      	  	  	  	 <span class="fen_x" style="">
      	  	  	  	 	  <img class="da_img_3" src="../../../static/img_3/icon_share_black.png"/>
      	  	  	  	 	   <img  class="da_img_4" src="../../../static/img_3/icon_share_active.png" alt="" />
      	  	  	  	 	   <p style="float: left;margin: 0;">分享</p>
      	  	  	  	 	 
      	  	  	  	 	 <span class="z_fen">
      	  	  	  	 	  <img src="../../../static/img_3/wechat.png"/>
      	  	  	  	 	  <img src="../../../static/img_3/sina.png"/>
      	  	  	  	 	  <img src="../../../static/img_3/qzone.png"/>
      	  	  	  	 </span>
      	  	  	  	 
      	  	  	  	 </span>
      	  	  	  	  <span class="z_right">
      	  	  	  	 	  <p>不感兴趣 </p>
      	  	  	  	 	  <p>|</p>
      	  	  	  	 	  <p>我要评论</p>
      	  	  	  	 </span>
      	  	  	  	 
      	  	  	  </div>
      	  	  </div>
      	  </div>
      </div> 	  
      	  
      	  
      	  <div class="btn_cl">点击加载更多</div>
      	  
     </div>
     
  <!----rught-------------------------------------------------------------------------------------------------------------------------------->  
     <div class="box_f_right">
     	 <!--top-->  
     	 <div class="r_top">
     	 	   <div class="r_top_c">
     	 	   	   <div style="width: 100%;height: 118px;position: relative;text-align: center;padding-top: 17px;">
     	 	   	   	   <p id="tui">退出登录</p>
     	 	   	   	   <div style="width: 55px;height: 55px;margin: 0 auto;overflow: hidden;position: relative;border-radius:50%;">
     	 	   	   	   	   <img id="t_img" src="../../../static/img/594bee20ada6772b177da5b9b9e3c984.jpg"/>
     	 	   	   	   </div>
     	 	   	   	   <p id="name_id">程小姐</p>
     	 	   	   	   <p id="name_b">职业艺术家</p>
     	 	   	   </div>
     	 	   	   <div style="width: 100%;height: 56px;margin-top: 20px;">
     	 	   	   	  <div class="top_f">
     	 	   	   	  	  <p id="f_s">32</p>
     	 	   	   	  	  <p id="f_z">粉丝</p>
     	 	   	   	  </div>
     	 	   	   	  <div class="top_f">
     	 	   	   	  	  <p id="f_s">32</p>
     	 	   	   	  	  <p id="f_z">关注</p>
     	 	   	   	  </div>
     	 	   	   	   <div class="top_f">
     	 	   	   	  	  <p id="f_s">32</p>
     	 	   	   	  	  <p id="f_z">提问</p>
     	 	   	   	  </div>
     	 	   	   	  <div class="top_f" style="border: none;">
     	 	   	   	  	  <p id="f_s">32</p>
     	 	   	   	  	  <p id="f_z">回答</p>
     	 	   	   	  </div>
     	 	   	   </div>
     	 	   </div>
     	 </div>
     	 
     	 
     	 <div class="top_zz">
     	 	   
     	 	   <div style="width:134px;height:42px;float: left;margin: 10px 11px 0 21px;position: relative;color: white;font-family: 'SimSun';">
     	 	   	   <img class="imgxx" src="../../../static/img_3/btn_blue.png"/>
     	 	   	   <div class="pxx">
     	 	   	   	   我要回答
     	 	   	   </div>
     	 	   </div>
     	 	   
     	 	    <div style="width:134px;height:42px;float: left;margin: 10px 0 0 0;position: relative;color: white;font-family: 'SimSun';">
     	 	   	   <img class="imgxx" src="../../../static/img_3/btn_blue2.png"/>
     	 	   	   <div class="pxx" style="color: #2A52FF;">
     	 	   	   	    我要提问
     	 	   	   </div>
     	 	   </div>
     	 	   
     	 	   
     	 </div>
     	 
     	 
     	 
     <!--z-->
     	 <div id="z_boxs">
     	 	  <div style="height: 100%;width: 280px;margin: 0 auto;padding-top: 8px;">
     	 	  	  <div style="height:40px;width: 100%;line-height: 40px;border-bottom: 1px solid #9B9B9B;margin-bottom: 13px;">
     	 	  	  	  <div class="b_sn"><div class="jiao"></div></div>
     	 	  	  	  <p class="re">热门问题</p>
     	 	  	  	  <p class="geng">更多</p>
     	 	  	  </div>
     	 	  	  
     	 	  	  <div v-for="(i,index) in re_active" style="width: 100%;height: 71px;font-family:'SimSun';margin-bottom: 20px;">
     	 	  	  	  <div class="p_box_f" style="padding-top: 6px;">
     	 	  	  	  	 <div class="p_box_c">
     	 	  	  	  	 	   搜狗获Cityscapes评测世界冠军，多评测世界...
     	 	  	  	  	 </div>
     	 	  	  	  	 <p class="p_box_c2">2天前</p>
     	 	  	  	  </div>
     	 	  	  	  
     	 	  	  	  <div class="img_boxs">
     	 	  	  	  	  <div class="img_boxs_san"></div>
     	 	  	  	  	  
     	 	  	  	  </div>
     	 	  	  </div>
     	 	  	  
     	 	  </div>
     	 </div>  
     	   
     	   
     	 <div id="btn_boxs">
     	 	   <div style="height: 100%;width: 280px;margin: 0 auto;padding-top: 8px;"> 
     	 	      <div style="height:40px;width: 100%;line-height: 40px;border-bottom: 1px solid #9B9B9B;margin-bottom:20px;">
     	 	  	  	  <div class="b_sn"><div class="jiao"></div></div>
     	 	  	  	  <p class="re">答主推荐</p>
     	 	  	  	  <p class="geng">更多</p>
     	 	  	  </div>
     	 	  	 
     	 	      <div v-for="(i,index) in zx_act" class="box_btn">
     	 	      	 <div class="tou_x"></div>
     	 	      	 <div class="box_t_r">
     	 	      	 	   <p id="name1">周星驰</p>
     	 	      	 	   <p id="name2">知名演艺圈导演</p>
     	 	      	 	   <div class="dalxx">
     	 	      	 	   	    <img class="imgxa" src="../../../static/img_3/btn_blue_small.png"/>
     	 	      	 	   	    <div class="p_boxx">
     	 	      	 	   	    	 30币提问
     	 	      	 	   	    </div>
     	 	      	 	   </div>
     	 	      	 	   
     	 	      	 </div>
     	 	      </div>
     	 	      
     	 	        <div class="box_btn" >
     	 	      	 <div class="tou_x"></div>
     	 	      	 <div class="box_t_r" style="border: none;">
     	 	      	 	   <p id="name1">周星驰</p>
     	 	      	 	   <p id="name2">知名演艺圈导演</p>
     	 	      	 	    <div class="dalxx">
     	 	      	 	   	    <img class="imgxa" src="../../../static/img_3/btn_blue_small.png"/>
     	 	      	 	   	    <div class="p_boxx">
     	 	      	 	   	    	 30币提问
     	 	      	 	   	    </div>
     	 	      	 	   </div>
     	 	      	 </div>
     	 	      </div>
     	 	      
     	 	      
     	 	      
     	 	      
     	 	   </div>
     	 </div>  
     	   
     </div>
     
 </div>
  </div>
</template>

<script>
import store from '../../vuex/store'
export default {
  data (){
    return {
    	
    	zx_act:[1,2,3],
    	       
    	       
    	re_active:[1,2,3,4],//热门文章数据
    	
    	
      hai_act:['美国','英国','法国','意大利','韩国 ','日本','荷兰','巴西','印度尼西亚','意大利 ','韩国 ','山东','日本'],
    	hais_x:0,
    	hai_x:false,
    	
    	z_act:[1,2,3,4,5],
    	
    	img_dq_x:{
      	  img:'static/img_1/icon_address_normal.png',
      	  imgs:'static/img_1/icon_address_active.png',
      },
      img_sx_x:{
      	  img:'static/img_1/icon_select_normal.png',
      	  imgs:'static/img_1/icon_select_active.png',
      },
    	  
       shai_x:false,
    	
    	
       act_left:['推荐','绘画','书法','雕塑','摄影','当代','工艺','设计','音乐','舞蹈',],
       a_left:0,
       
       zong_act:['人','事'],
       zong_tx:0,
       
       left_box_act:['绘画','书法','雕塑','设计','工艺'],
       left_box_x:0,
       
       shai2:['推荐','最新','最热','我的','收藏'],
       aer:0,
       
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
       
       
    }
  },
 
  methods:{
  		ys_click(index){
  		 this.ys_xs = index
  	},
  	 sx(){
  	 	      this.shai_x =false;
  	 	   	  this.diqu_x = false
  	 },
  	
  	 shai_click(index){
  	 	   this.daer = index;
  	 },
  	 shai_click_2(index){
  	 	  this.aer = index;
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
  	
  	hai_click(index){
  		   this.hais_x=index
  	},
  	
  	 shai_clicks(){
  	 	   if(this.shai_x){
  	 	   	  this.shai_x = false
  	 	   }else{
  	 	   	  this.shai_x =true;
  	 	   	  this.diqu_x = false
  	 	   }
  	 	   
  	 },
  	
  	
  	
  	 left_click(index){
  	 	  this.a_left=index
  	 },
  	 zong_click(index){
  	 	  this.zong_tx=index
  	 },
  	 left_box_cl(index){
  	 	 this.left_box_x=index
  	 },
  	 shai_click_2(index){
  	 	  this.aer = index;
  	 },
  	 
  },
   mounted(){
  	var thit = this
   $('.hell').on("mousewheel DOMMouseScroll", function (e){//判断鼠标滚轮向下滚动
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
         if (delta < 0){
//       	   thit.sx()
//           let a = $('.box_f').length-1
//           var  mTop = $('.box_f')[a].offsetTop;
//           var  sTop = $(window).scrollTop();
//           var  result = mTop - sTop;
//           if(result<80){
            	 
//           }
          }
       });	
       
       
  },
  
  
}
</script>

<style scoped>
	.p_boxx{
		width: 100%;
		height: 100%;
		line-height: 24px;
		text-align: center;
		color: #2A52FF;
		font-family: 'SimSun';
		position: absolute;
		left: 0;
		top: 0;
		font-size: 11px;
	}
	
	.imgxa{
		width: 100%;
		height: 100%;
		float: left;
	}
	
	.dalxx{
		 width:57px;
height:24px;
    position: absolute;
    top: 15px;
    right: 0;
    
	}
	
	.pxx{
		width: 100%;
		height: 100%;
		 position: absolute;
		 top: 0;
		 left: 0;
		 text-align: center;line-height: 44px;
		 font-size: 14px;
	}
	.imgxx{
		  width: 100%;
		  height: 100%;
		  /*position: absolute;
		  top: 0;
		  left: 0;*/
		  /*z-index: -1;*/
		 float: left;
	}
	
	
	#name2{
		font-size: 12px;
		color: #9C9C9C;
		font-family: 'SimSun';
		margin: 0;
		margin-top: 8px;
	}
	#name1{
		font-size: 16px;
		font-family: 'fz';
		margin: 0;
		margin-top: 9px;
	}
	.box_t_r{
		width: 207px;
		height: 100%;
		border-bottom: 1px solid #EDEDED;
		/*background: #66B1FF;*/
		float: left;
		position: relative;
	}
	
	.tou_x{
		 width:56px;
height:56px;
     float: left;
     border-radius: 50%;
     background: black;
     margin-right: 16px;
  
	}
	
  .box_btn{
  	 width: 100%;
  	 height: 66px;
  	 margin-bottom: 9px;
  }

	.img_boxs_san{
		 width: 0;
    height: 0;
    border-top: 14px solid #F4F5F6;
    border-left: 14px solid transparent; 
    position: absolute;top: 0rem;
    right: -0.015rem;
	}
	
	.top_zz{
		 width:320px;
height:61px;
background:rgba(244,245,246,1);
  margin-top: 12px;
	}
	
	.btn_cl:hover{
		background: #EDEDED;
		transition: 1s;
		/*color: whitesmoke;*/
	}
	
	.btn_cl{
		padding:0 5px;
		height: 45px;
		line-height: 45px;
		font-family: 'SimSun';
		color: #666666;
		text-align: center;
		font-size: 16px;
		margin: 0 auto;
		background:rgba(244,245,246,1);
		font-weight: 600;
		transition: 1s;
	}
	
	.img_xxas{
		width: 12px;
		height: 13px;
		margin-top: 2.5px;
	}
	
	/*.img_xxa{
		width: 10px;
		height: 14px;
		position: absolute;
		left: -4px;
		top: 3px;
	}*/
	
	.btn_box{
		 width: 100%;
		 float: left;
		 height: auto;
		 padding-bottom: 16px;
		 position: relative;
		 border-left: 1px solid #E6E6E6;
		 padding-left: 28px;
		 font-size: 12px;
		 color: #9C9C9C;
		 font-family:'SimSun';
		 line-height:21px;
		 margin-bottom: 4px;
		 
	}
	
	.img_boxs{
		 float: left;
		 width:104px;
height:71px;
background:rgba(0,0,0,1);
   margin-left: 15px;
   position: relative;
	}
	.p_box_c2{
		 font-size: 12px;
		 color: #B3B3B3;
		 margin: 0;
		 margin-top: 14px;
	}
	
	.p_box_c{
		  margin: 0;
		 width:161px;
height:35px;
font-size:14px;
     color: #666666;
		  
	}
	
	.p_box_f{
		width: 161px;height:100%;
		/*background: red;*/
		float: left;
	}
	
	.geng{
		 font-size: 13px;
		 float: right;
		 margin: 0;
		 font-family:'SimSun';
		 color: #000000;
	}
	.re{
		 font-size: 16px;
		 font-family: 'fz';
		 float: left;
		 margin: 0;
		 margin-left: 8px;
	}
	
	.jiao{
		 width: 0;
    height: 0;
    border-top: 6px solid #EDEDED;
    border-left: 6px solid transparent; 
    position: absolute;top: 0rem;
    right: -0.015rem;
	}
	.b_sn{
		 width:16px;
height:16px;
background:rgba(0,0,0,1);
   float: left;
    margin-top: 11px;
    position: relative;
	}
	
	#z_boxs{
		width:320px;
height:429px;
background:rgba(244,245,246,1);
   margin-top: 20px;
	}
	#btn_boxs{
		width:320px;
    height:368px;
    background:rgba(244,245,246,1);
    margin-top: 20px;
	}
	#f_z{
		 font-size: 12px;
		 color: #9C9C9C;
		 margin: 0;
		 font-family:'SimSun';
		 margin-top: 6px;
	}
	#f_s{
		 font-size: 18px;
		 font-weight: 600;
		 margin: 0;
		 margin-top: -8px;
	}
	.top_f{
		width: 70px;
		height: 30px;
		text-align: center;
		float: left;
		border-right: 1px solid #EDEDED;
		margin-top: 5px;
	}
	#tui{
		 font-size: 12px;
		 color: #BFBFBF;
		 position: absolute;
		 /*top: 13px;*/
		 top: 0;
		 right: 12px;
		 font-family:'SimSun';
	}
	#name_b{
		font-size: 12px;
		color: #9C9C9C;
		margin: 0;
		margin-top:8px;
		font-family:'SimSun';
	}
	#name_id{
		 font-size: 16px;
		 margin: 0;
		 font-family: 'fz';
		 margin-top: 11px;
	}
	#t_img{
		 width: 100%;
		 position: absolute;
		 left: 0;
		 top: -10%;
	}
	.r_top_c{
		 width:280px;
    height:194px;
    background:rgba(255,255,255,1);
    margin: 0 0 0 20px;
    position: relative;
	}
	.r_top{
		width:320px;
    height:234px;
    background:rgba(244,245,246,1);
    padding-top: 20px;
	}
	.s_box_css{
	 	 width:auto;
     /*height:24px;*/
     background:rgba(239,239,239,1);
     float: left;
     border-radius: 12px;
     margin-top:12px;
     margin-right:13px;
     position: relative;
     padding:0  30px 0px 15px;
     /*line-height: 24px;*/
	  }
	  
	.box_f_right{
		width: 320px;
		/*height: 1116px;*/
		/*background:deepskyblue;*/
		float: left;
		margin: 68px 0 0 46px;
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
	
	
	
	.fen_x:hover .z_fen{
		  display: block;
	}
	
	.fen_x:hover .da_img_4{
		  display: block;
	}
	.fen_x:hover .da_img_3{
		  display: none;
	}
	
	.fen_x:hover{
		 /*display: block;*/
		 color: #BFBFBF;
	}
	
	.z_box:hover .z_right{
		     display: block;
	}
	
	.fen_x{
		 float:left;font-size: 12px;margin-left:24px;
	}
	
	.z_right p{
		  margin: 0;
		  float: left;
		  margin-left:8px;
	}
	.z_right{
		font-size:12px;
    font-family:SimSun;
    color:rgba(191,191,191,1);
    float: right;
    display: none;
	}
	
	.z_fen img{
		 width:16px;
     height:16px;
     float: left;
     margin-right: 15px;
	}
	.z_fen{
		  float: left;
		  margin-left: 20px;
		  display: none;
	}
	
	
	.da_img_4{
		width:16px;
     height:13px;
     float: left;
     margin-right: 8px;
     display: none;
	}
	.da_img_3{
		width:16px;
     height:13px;
     float: left;
     margin-right: 8px;
	}
	.da_img_2{
		width:16px;
     height:16px;
     float: left;
     margin-right: 8px;
	}
	.da_img_1{
		width:16px;
     height:16px;
     float: left;
     margin-right: 8px;
	}
	.da_img{
		 width:16px;
     height:14px;
     float: left;
     margin-right: 8px;
	}
	.z_box_ps{
		  font-size:13px;
		  margin: 0;
		  margin-top: 9px;
		  line-height:21px;
	}
	 .z_p_box p{
	 	   float: left;
	 	   margin: 0;
	 	   color: #999999;
	 	   margin-right: 7px;
	 }
	.z_p_box img{
		 width:26px;
height:25px;
    float: left;
    border-radius: 50%;
    margin-right: 4px;
	}
	.z_p_box a{
		 float: left;
		 color: #2A52FF;
		 margin-right: 8px;
	}
	.z_p_box{
		 font-size: 12px;
		 line-height: 25px;
		 font-family:SimSun;
		 
	}
	
	.san_jiao{
		width: 0;
    height: 0;
    border-top: 20px solid white;
    border-left: 20px solid transparent; 
    position: absolute;top: 0rem;
    right: 0rem;
    z-index: 3;
	}
	.img_b img{
		  /*min-height: 100%;*/
		  width: 100%;
		  position: relative;
		  top: -10%;
		  z-index: 2;
	}
	.img_b{
		 width:130px;
     height:130px;
     float: left;
     position: relative;
     overflow: hidden;
     margin-right: 20px;
	}
	.z_box_p{
		 font-size:18px;
		 font-family:'fz';
		 margin: 0;
		 margin-bottom: 8px;
		 /*line-height: 21px;*/
	}
	.z_box{
		  width: 100%;
		  height: 151px;
		  border-bottom: 1px solid #EDEDED;
		  margin-top: 20px;
		  /*background: brown;*/
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
	}
	.shai_cs{
		 transition: 0.5s;
		 width:700px;
     /*min-height:80%;*/
     padding-bottom: 20px;
     padding-top: 20px;
     border-radius:4px;
     background: white;
     position: absolute;
     right: 0;
     z-index:500;
     top:42px;
     -moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;
	}
	 .shai_c{
	 	 transition: 0.5s;
	 	 width:0;
     height:0;
     border-radius:4px;
     background: white;
     position: absolute;
     right: 0;
     z-index:500;
     top:42px;
     -moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;
	 }
	 .shai_ss{
	 	  transition: 0.5s;
	 }
	 
	 .shai_s{
	 	  height: 100%;
	 	  float: right;
	 	   width: 54px;
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
    	 margin-top: 35%;
    	 /*margin-right: 3px;*/
    }
    .xian2{
    	 color:#9C9C9C;
    }
    .xian2_s{
    	 color:block;
    }
	
	.img_ssa{
		width:9px;
    height:18px;
    position: absolute;
    left: -9px;
    top: 13px;
    z-index: 10;
	}
	
	.left_boxs{
		width: 100%;
		height: 42px;
		background: #2A52FF;
		text-align: center;
		line-height: 42px;
		margin-top: 15.5px;
		font-size: 14px;
		color: white;
		position: relative;
	}
	.left_box{
		width: 100%;
		height: 42px;
		/*background: red;*/
		text-align: center;
		line-height: 42px;
		margin-top: 15.5px;
		font-size: 14px;
		color: white;
		position: relative;
	}
	
	#box_i_c p{
		 margin: 0;
		 font-size: 20px;
		  font-family:'fz';
		  color: white;
		  float: left;
		  margin-left: 18px;
		  line-height: 50px;
	}
	#box_i_c{
		 width: 100%;
		 height: 50px;
		 background-image:linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
		 position: absolute;
		 bottom: 0;
		 z-index: 3;
		 
	}
	.box_i img{
		 min-width:600px;
     min-height:300px; 
     position: absolute;
     left: 0;top: -50%;
     max-width:100%;
     z-index: 2;
	}
	.box_i{
		 width:600px;
height:300px;
     overflow: hidden;
     position: relative;
     float: left;
	}
	.p_s img,.p_ss img{
		  width: 100%;
		  height: 10px;
		  position: absolute;
		  left: 0;
		  bottom: 0;
	}
	.p_ss{
		  width:42px;
		  height:100%;
		  float: left;
		  font-size: 20px;
		  font-family:'fz';
		  line-height: 50px;
		  text-align: center;
		  color: black;
		  margin-right:263px;
		  position: relative;
	 }
	.p_s{
		  width:42px;height: 100%;
		  float: left;
		  font-size: 20px;
		  font-family:'fz';
		  position: relative;
		  line-height: 50px;
		  text-align: center;
		  color: #9C9C9C;
		  margin-right: 263px;
	}
	
	 .hell{
	 	     /*border-left:0.5px solid skyblue;
   	  border-right:0.5px solid skyblue;*/
	 }
   .hello{
   	  width: 1139px;
   	  /*height: auto;*/
   	  /*min-height: 800px;*/
   	  /*background: deepskyblue;*/
   	 
   	  /*float: left;*/
   	  margin: 0 auto;
   	  /*background: red;*/
   	  /*padding-bottom: 20px;*/
   	  
   	  
   }
   .left_c{
   	  width:72px;
      height:32px;
      position: relative;
      font-size: 16px;
      font-family:'fz';
      text-align: center;
      line-height: 33px;
      margin-bottom: 8px;
   }
   .left_cs{
   	  background: url('../../../static/img_3/icon_left_xuanzhong.png');
      background-size:100% 100%;background-repeat:no-repeat;
   }
   .left_c img{
   	  width: 100%;
   	  height: 100%;
   	  position: absolute;
   	  top: 0;
   	  left: 0;
   	  z-index: -1;
   }
   .hello:hover{
   	   cursor: pointer;
   }
</style>
