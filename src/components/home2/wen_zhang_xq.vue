<template>
	<div id="app">
	  <transition name="el-fade-in-linear">
        <div v-show="show1" @click="show1=false" class="transition-box">
             <img v-show="show1" class="imga"  :src="show_img"/>
        </div>
      </transition>
		
		
	   <div style="width:1172px;margin: auto;">
		<div id="box">
		 <!--左列导航栏-->	 
		   	<div class="left_b">
		   		<div class="left_f"><img src="../../../static/2016img/icon_like_big.png"/><p>12</p></div>
		        <div class="left_f"><img src="../../../static/2016img/icon_collect_big.png"/><p>12</p></div>
		   	    <div class="left_f"><img src="../../../static/2016img/icon_comment_big.png"/><p>12</p></div>
		   	    <div class="left_f"><img src="../../../static/2016img/icon_translate_big.png"/></div>
		   	    <img class="fen_t" style="height: 19px;" src="../../../static/2016img/icon_wechat_big.png"/>
		   	    <img class="fen_t" style="height: 20px;" src="../../../static/2016img/icon_sina_big.png"/>
		   	    <img class="fen_t" style="height: 22px;" src="../../../static/2016img/icon_qzone_big.png"/>
		   	</div> 
	    <!--中间内容-->
			<div class="zhongs">
				
				<div id="tops">
					<!--头像-->
					 <div class="toux"></div>
					 <div id="tou_l">
					 	<p id="p1">积极进取</p>
					 	<p class="p2" style="margin-top: 3px;">3天前</p>
					    <div class="guan">+关注</div>
					 </div>
				</div>
				<div style="width: 100%;padding-top:29px;">
					<p class="pa">滴滴顺风车再提“轻春运”理念,滴滴顺风车 预计运送3300万乘客</p>
					 
					 <span id="pj"><p>头条</p><p style="color: #CFCFCF;">•</p><p>油画</p></span>
					 
					 
					 <div class="htmls" v-html="data_wen"></div>
					 
					 <p v-for="i in 3" class="biao_qian">#标签#</p>
					<!--<div class="p_box" style="font-family: 'SimSun';">
						<a id="biao">旅途</a>
						考虑到这种情况，阿泽维多指出，“获得共识的方式有很多。既存在需要所有方面共识的协定，也存在并非如此的类型。
						还有像电子商务那样不包含所有成员国的协议”，暗示出在维持全体一致原则的同时，以IT领域等为中心，作为例外，
						允许一部分“志愿国”推进规则制定。（直白而言，就是发展中国家比较落后的领域，排除其对规则的制定参与权。）
　　                                                          例如WTO在2015年就规定数字产品关税取消的信息技术协定（ITA）达成协议，而这是志愿国确定的“多国间协定”。
                                                                 有分析认为，阿泽维多考虑的也是相同框架。在相关国家仍然较少的新产业领域等，在志愿国的主导下迅速制定规则将成为可能。
					</div>
			<!--作品图-->
					<!--<div id="img_boxx">
					   <el-carousel height="500px">
                            <el-carousel-item  v-for="(item,index) in act" :key="item">
                               <img @click="img_c(item)" class="imgssx" :src="item"/>
                          </el-carousel-item>
                     </el-carousel>
					</div>-->
			<!--头像集合-->		
					<!--<div class="z_t">
						<div v-for="(i,index) in 13" class="tous">
							<img src="../../../static/img/594bee20ada6772b177da5b9b9e3c984.jpg"/>
						</div>
						<div  class="tous" style="float: right;margin: 0;">35</div>
					</div>-->
				 
					<div style="width:100%;height: 232px;float: left;padding-top: 41px;text-align: center;">
						<div class="mibi"><img style="width: 100%;height: 100%;" src="../../../static/2016img/icon_gold.png"/></div>
						<p id="das">打赏</p>
						<p id="add">创作不易，有觅币请打赏一二</p>
					</div>
			<!--猜你喜欢-------------------------------------------------------------------------------------------------------------------------->		
					   <div style="float: left;" class="pin_t">
							<div class="que"><div></div></div><p>猜你喜欢</p>
						</div>
						
					    <div style="width: 100%;height: 380px;float: left;margin-bottom:15px;">
					    	<div  v-for="i in 2" style="width: 100%;height: 190px;flex-direction: row">
					    		<div class="ban_b">
					    			<div style="width: 100%;height: 120px;background: #F7F7F7;"></div>
					    			<p>最近在研究英国王室的衣橱比较简单的研究从伊丽莎白一世到维多利亚女王中间经历了都</p>
					    		</div>
					    		<div class="ban_b">
					    			<div style="width: 100%;height: 120px;background: #F7F7F7;"></div>
					    			<p>最近在研究英国王室的衣橱比较简单的研究从伊丽莎白一世到维多利亚女王中间经历了都</p>
					    		</div>
					    		<div class="ban_b" style="margin: 0;">
					    			<div style="width: 100%;height: 120px;background: #F7F7F7;"></div>
					    			<p>最近在研究英国王室的衣橱比较简单的研究从伊丽莎白一世到维多利亚女王中间经历了都</p>
					    		</div>
					    	</div>
					    </div>
					    
			<!--评论输入框--------------------------------------------------------------------------------------------------------->
					<div style="width: 100%;height: 215px;float: left;">
						<div class="pin_t">
							<div class="que"><div></div></div><p>用户评论（20）</p>
						</div>
						<div class="inp_box">
							<textarea style="font-size: 14px;" id="texts" name="" rows="" cols="" placeholder="说点什么吧....."></textarea>
							<div class="inp_b">
								<div class="tousa"></div><p>请登录后再评论</p>
								<button class="btna">回复评论</button>
								 
							</div>
						</div>
					</div>
					<div style="width: 100%;float: left;margin-top: 25px;">
						
						<div class="pinglun" v-for="(item,index) in pinact">
					    <!--头像网名-->
						    <div style="width:100%;height: 41px;">
						     	<div class="tousx"></div>
						        <div style="width:645px;height:100%;float: left;">
						        	<p style="font-size: 16px;font-weight: 600;font-family: 'MicrosoftYaHei';">评论家</p>
						        	<p style="font-size: 12px;color: #9c9c9c;">3小时前</p>
						        </div>
						     </div>
						<!--内容-->    
						    <div style="width:100%;;padding-left: 52px;margin-top: 10px;">
						    	 <p class="ps1">习近平总书记在党的十九大报告中指出建设教育强国是中华民族伟大复兴的基础工程，育强国是中华民族伟大复兴的基础工程.</p>
						    	 <!--二级评论-->
						    	 <div :class="{pin_2:item.id==false,pin_2s:item.id==true}">
						    	 	
						    	 	<div id="adi" v-for="(i,index) in item.ad">
						    	 	 <div id="er_p" style="margin-top: 16px;float: left;font-family:'SimSun';">
						    	 	 	<p style="font-size:14px;">评论B</p><p style="color:#9c9c9c;font-size: 12px;">•</p><p style="color:#9c9c9c;font-size: 12px;">2018-11-08</p>
						    	 	 </div>
						    	 	 <!--二级评论内容-->
						    	 	 <p style="font-size: 14px;line-height: 50px;font-family: 'SimSun'">
						    	 	 	习近平总书记在党的十九大报告中指出建设教育强国是中华民族伟大复
						    	 	 </p>
						    	 	 <div id="di" style="width:603px;height: 20px;line-height: 20px;">
						    	 	 	<p>回复</p>
						    	 	 	<span>
						    	 	 		<img style="width:25px;height: 25px;margin-top: -4px;" src="../../../static/2016img/zan.png" alt="" />
						    	 	 		<p style="color: #9d9d9d;">32</p>
						    	 	 		<img style="margin: 0;margin-left: 49px;" src="../../../static/2016img/icon_translate_big.png"/>
						    	 	 	 </span>
						    	 	   </div>
						    	 	</div> 
						    	 </div>
						    	 
						    	 <div class="bo">
						    	      <p style="color: #2A52FF;">回复&nbsp;</p><p style="color:#9c9c9c;">•&nbsp;</p><p :class="{pas1:item.id==false,pas:item.id==true}" @click="xiu(index)">{{(item.id)?'点击收起评论':'点击查看全部5条回复'}}</p>      
						    	        <span>
						    	 	 		<img style="width:25px;height: 25px;margin-top: -4px;" src="../../../static/2016img/zan.png" alt="" />
						    	 	 		<p style="color: #9d9d9d;">32</p>
						    	 	 		<img style="margin: 0;margin-left: 49px;margin-right: 10px;" src="../../../static/2016img/icon_translate_big.png"/>
						    	 	 	</span>   
						        </div>
						    </div>
						</div>
						
					</div>
					<div class="jia">加载更多评论</div>
				</div>
			</div>
			
<!--右侧--------------------------------------------------------------------------------------------------------------------------------------------->		
	<div class="box_f_right">
     	 <!--top-->  
     	 <div class="r_top">
     	 	   <div class="r_top_c">
     	 	   	   <div style="width: 100%;height: 118px;position: relative;text-align: center;padding-top: 17px;">
     	 	   	   	   <!--<p id="tui">退出登录</p>-->
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
     	 	   	   	  <div class="top_f" style="border: none;">
     	 	   	   	  	  <p id="f_s">32</p>
     	 	   	   	  	  <p id="f_z">文章</p>
     	 	   	   	  </div>
     	 	   	   </div>
     	 	   </div>
     	 </div>
     <!--z-->
     	 <div id="z_boxs">
     	 	  <div style="height: 100%;width: 280px;margin: 0 auto;padding-top: 8px;">
     	 	  	  <div style="height:40px;width: 100%;line-height: 40px;border-bottom: 1px solid #9B9B9B;margin-bottom: 13px;">
     	 	  	  	  <div class="b_sn"><div class="jiao"></div></div>
     	 	  	  	  <p class="re">他的文章</p>
     	 	  	  	  <p class="geng">更多</p>
     	 	  	  </div>
     	 	  	  
     	 	  	  <div v-for="(i,index) in 4" style="width: 100%;height: 71px;font-family:'SimSun';margin-bottom: 20px;">
     	 	  	  	  <div class="p_box_f" style="padding-top: 6px;">
     	 	  	  	  	 <div class="p_box_c">
     	 	  	  	  	 	   搜狗获Cityscapes评测世界冠军，多评测世界...
     	 	  	  	  	 </div>
     	 	  	  	  	 <p class="p_box_c2">2天前</p>
     	 	  	  	  </div>
     	 	  	  	  
     	 	  	  	  <div class="img_boxs">
     	 	  	  	  	  
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
	export default {
		data(){
			return {
				act:[
				    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3370266447,1250990444&fm=27&gp=0.jpg',
				    'http://img5.imgtn.bdimg.com/it/u=2674030528,569452351&fm=26&gp=0.jpg',
				    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1917249120,3861825914&fm=27&gp=0.jpg',
				    'https://goss2.vcg.com/creative/vcg/400/version23/VCG41sb10065436am-001.jpg',
				],
				
				show1: false,
				
				show_img:'',
				
				pinact:[{id:false,ad:[1,1]},{id:false,ad:[1,1]}],
				
				data_wen:`<p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">西媒称，南美洲最古老的女性“卢西亚”的头骨和最早在巴西展出的恐龙的化石都曾是位于里约热内卢的巴西国家博物馆中的藏品。然而2日的一场大火让它们全部化为灰烬。然而令人感到意外的是，一块陨石在火灾中安然无恙。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">据埃菲社9月3日报道，这座建于两个多世纪前的博物馆收藏了近2000万件藏品，包括动物标本、土著人使用的器具、木乃伊以及不同时期的化石。此外，还包括从巴西帝国第一任皇帝佩德罗一世时期开始收集的埃及藏品。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">
				  <img src="http://upload.art.ifeng.com/2018/0905/1536116282868.jpg" alt="1536025882623" style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">巴西国家历史和艺术遗产研究所负责人卡蒂娅·博热亚说，“卢西亚”的头骨“葬身火海之中”。这具头骨拥有近1.2万年的历史，死者是一名年龄在20至25岁之间的女性。此前，她的头骨和脸部重塑模型还作为巴西最珍贵的考古学藏品之一在国家博物馆展出。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">报道称，然而，一个堪称奇迹的景象令专家目瞪口呆：一块名为“本德戈”的陨石在火灾中安然无恙。这是巴西境内发现的最大的陨石，重达5.6吨，1784年在巴西东北部的巴伊亚州被发现。1888年，佩德罗二世下令将其转移至巴西国家博物馆。与其他藏品不同的是，这块陨石极耐高温。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><img src="http://upload.art.ifeng.com/2018/0905/1536116287742.jpg" alt="RAW9-hikxxmz7614844" style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">专家解释说，像陨石和彗星这种从太空坠落至地球的石头大都是地外天体的一部分，它们在进入地球大气层的过程中从摩擦产生的高温中幸存下来。虽然各项理论能分析它们的成分，但这些石头的来源却不为人知。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">报道称，这座残破不堪的博物馆中收藏了（或曾经收藏过）62块陨石。其中最出名的就是这块名为“本德戈”的陨石。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">博物馆方面仍在估算此次大火导致的损失。很多人认为这场大火是一场“必然的悲剧”，因为用于维护博物馆的公共资金被削减，建筑多处出现漏雨和渗水的现象，还有很多房间处于闲置状态。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">报道还称，9月3日凌晨，一些官员和研究者进入仍然冒着火焰的博物馆，试图挽救部分“不可替代的”藏品。</p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"></p>
				  <p style="margin: 16px 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;"><br style="margin: 0px; line-height: 28px; font-size: 16px; font-family: 微软雅黑;">
				 </p>`,
				
			}
		},
		computed:{
			
		},
		mounted(){
			this.html_x()
		},
		methods:{
			html_x(){//html修改
				$('.htmls img').css('width','100%');
				$('.htmls p').css('font-size','16px');
				$('.htmls p').css('font-family','SimSun');
				$('.htmls p').css('margin','0');
				$('.htmls p').css('text-align','justify');
				$('.htmls p').css('line-height','34px');
			},
			
			xiu(index){
				this.pinact[index].id = !this.pinact[index].id;
				var thit = this
//				window.setTimeout(function(){
					let h = 102;
					let s = 102*thit.pinact[index].ad.length+17;
//				    $('.pin_2s').css('height',s+'px');
//				    $('.pin_2').css('height',s+'px');
//             },1)
			},
			img_c(url){
				this.show_img = url;
				this.show1 = true;
				window.setTimeout(function(){
					let win = $(window).height();
					let wis = $(window).width();
　                                $('.imga').css('marginTop',(win-$('.imga').height())/2+'px');
                   $('.imga').css('marginLeft',(wis-$('.imga').width())/2+'px');
               },1)
			},
			
		},
	}
</script>

<style scoped="scoped">
	.biao_qian{
		font-size:14px;
font-family:SimSun;
/*font-weight:400;*/
color:rgba(181,181,181,1);
    float: left;
    margin: 0;
    margin-right: 22px;
	}
	.htmls{
		width: 100%;
		float: left;
		/*font-family: 'fz';*/
		/*text-align: center;*/
	}
	.ban_b p{
		font-size: 14px;
		line-height: 23px;
		margin-top: 5px;
		display: -webkit-box;  
		display: -moz-box;  
		overflow: hidden;  
		text-overflow: ellipsis;  
		word-break: break-all;  
		-webkit-box-orient: vertical;  
		-webkit-line-clamp:2;
	}
	.ban_b{
		width: 219.1px;
		height:100%;
		/*background:green;*/
		float: left;
		margin-right: 22px;
	}
	
	#pj p{
		font-size: 14px;
		color: #2A52FF;
		float: left;
        margin-right: 7px;
       margin-top: 17px;
       margin-bottom: 17px;
	}
	
	.pas1{
		color: #2A52FF;
	}
	.pas{
		color: #9C9C9C;
	}
	*:hover{
		cursor: pointer;
	}
	.img_boxs{
		 float: left;
		 width:104px;
height:71px;
background:rgba(0,0,0,1);
   margin-left: 15px;
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
   border: 1px solid #ededed;
   
	}
	#btn_boxs{
		width:320px;
    height:320px;
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
		width: 93px;
		height: 30px;
		text-align: center;
		float: left;
		border-right: 1px solid #EDEDED;
		margin-top: 5px;
	}
	#name_b{
		font-size: 12px;
		color: #9C9C9C;
		margin: 0;
		margin-top:2px;
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
	#tui{
		 font-size: 12px;
		 color: #BFBFBF;
		 position: absolute;
		 /*top: 13px;*/
		 top: 0;
		 right: 12px;
		 font-family:'SimSun';
	}
	.r_top_c{
		 width:282px;
    height:196px;
    background:rgba(255,255,255,1);
    margin: 0 0 0 20px;
    position: relative;
    border: 1px solid #ededed;
	}
	.r_top{
		width:322px;
    height:236px;
    background:rgba(244,245,246,1);
    padding-top: 20px;
    border: 1px solid #ededed;
     
    
	}
	.box_f_right{
		width: 320px;
		height: 1023px;
		/*background:deepskyblue;*/
		float: left;
		margin: 0 0 0 46px;
	}
	.jia:hover{
		background: #f4f5f6;
		/*color: whitesmoke;*/
		transition: 1s;
	}
	
	.jia{
		width: 100%;
		height: 44px;
		text-align: center;
		line-height: 44px;
		font-size: 14px;
		font-family: 'SimSun';
		color: #9c9c9c;
		background: #f7f7f7;
		float: left;
		margin-top: 18px;
		transition:1s;
	}
	.bo span{
		float: right;
	}
	.bo span img{
		float: left;
		width: 18px;
		height: 18px;
		margin-right: 7px;
	}
	.bo p{
		float: left;
		/*color:#2a52ff;*/
	}
	.bo{
		width: 650px;
		height: 38px;
		margin-top: 10px;
		font-size: 14px;
		/*background: red;*/
		border-bottom: 1px solid #9b9b9b;
	}
	#di span{
		float: right;
	}
	#di span img{
		float: left;
		width: 18px;
		height: 18px;
		margin-right: 7px;
	}
	#di p{
		font-size: 14px;
		float: left;
		color:#2a52ff;
	}
	#er_p{
		width: 603px;
		height: 16px;
		line-height: 16px;
	}
	#er_p p{
		
		float: left;
		margin-right: 7px;
	}
	
	.ps2{
		 transition: 0.5s;
	}
	.pin_2{
		width: 650px;
		background:#f7f7f7;
		/*margin-top: 13px;*/
		/*padding: 0px 22px 18px 22px;*/
		height: 0;
		overflow: hidden;
		
	}
	.pin_2s{
		width: 650px;
		background:#f7f7f7;
		margin-top: 13px;
		padding: 0px 22px 18px 22px;
		/*overflow: hidden;*/
		/*height: 100px;*/
		/*height: 0;*/
	}
	
	
	
	
	.ps1{
		font-size: 14px;
		font-family: 'SimSun';
		line-height:27px;
	}
	.tousx{
		width:41px;
		height: 41px;
		float: left;
		margin-right:12px;
		background: #7D7D7D;
		border-radius: 50%;
		overflow: hidden;
	}
	.pinglun{
		width:100%;
		float: left;
		/*background:#DFE4ED;*/
		margin-bottom: 20px;
	}
	
	*{
		outline:none;
	}
	.btna{
		width: 74px;
		height: 28px;
		background: #2a52ff;
		float: right;
		color: white;
		font-size: 12px;
		margin: 2px 17px 0 0;
		border: none;
	}
	.inp_b p{
		font-size: 14px;
		float: left;
		color: #cccccc;
		margin-left: 10px;
		
	}
	.tousa{
	   width: 30px;
	   height: 30px;
	   background: #bfbfbf;
	   float: left;
	   margin: 0px 0 0 16px;
	   border-radius: 50%;
	   overflow: hidden;
	}
	.inp_b{
		width: 100%;
		height:40px;
		background: #f7f7f7;
		line-height:30px;
		padding-top: 5px;
		/*border-bottom: 1px solid #e2e2e2;*/
		font-family: 'SimSun';
	}
	#texts{
		width: 100%;
		height: 112px;
		border: none;
		padding: 13px 17px 0 17px;
		font-size: 14px;
		font-family: 'SimSun';
	}
	.inp_box{
		width: 100%;
		height: 159px;
		border: 1px solid #e2e2e2;
	}
	.pin_t p{
		font-size: 16px;
		float: left;
		margin: 0;
		font-family: 'fz';
	}
	.que div{
		width: 0;
    height: 0;
    border-top: 6px solid white;
    border-left: 6px solid transparent; 
    position: absolute;top: 0rem;
    right: -0.015rem;
    /*transition: 0.5s;*/
    z-index: 2;
	}
	.que{
		width: 17px;
		height: 17px;
		float: left;
	    background: black;
		position: relative;
		margin-left: 5px;
		margin-top: 10px;
		margin-right: 9px;
	}
	.pin_t{
		width: 100%;
		height: 42px;
		line-height: 42px;
		border-bottom: 1px solid #9b9b9b;
		margin-bottom: 20px;
	}
	#add{
		font-size: 14px;
		color: #9c9c9c;
		margin-top: 9px;
	}
	#das{
		font-size: 22px;
		font-family:'Microsoft YaHei';
		margin-top: 11px;
		/*font-weight: 600;*/
	}
	.mibi{
		width: 81px;
		height: 91px;
		margin: 0 auto;
		/*background: yellow;*/
	}
	.tous img{
		min-width:100%;
		min-height: 100%;
		max-width: 130%;
	}
	.tous{
		width: 34px;
		height: 34px;
		border-radius: 50%;
		overflow: hidden;
		float: left;
		margin-right: 13px;
		background: #9c9c9c;
		text-align: center;
		font-size: 16px;
		color: white;
	}
	.z_t{
		width: 100%;
		height: 34px;
		/*background: #606266;*/
		line-height: 34px;
		float: left;
		margin-top: 26px;
	}
	.imga{
		width: 600px;
		float: left;
		/*margin: auto;*/
		border:5px solid white;
	}
	
	.transition-box{
		width: 100%;
		height:2000px;
		background: rgba(0,0,0,.7);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		vertical-align: middle;
        text-align: center;
		
	}
	.imgssx{
		min-width: 100%;
		min-height: 100%;
		max-width: 130%;
		float: left;
	
	}
	.el-carousel__item p{
		 /*line-height:500px;*/
	}
  .el-carousel__item{
  	overflow: hidden;
  	
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  
	#img_boxx{
		width: 100%;
		height: 500px;
		background:#D3D4D6;
	    margin-top: 26px;
	    float: left;
	}
	#biao{
		color: #2a52ff;
	}
	.p_box{
		width: 100%;
		height: auto;
		font-size: 14px;
		float: left;
		line-height:30px;
	}
	.pa{
		font-family: 'fz';
		font-size: 34px;
		/*line-height: 59px;*/
		line-height:44px;
	}
	.guan{
		width: 56px;
		height: 26px;
		position: absolute;
		top: 12px;
		right: 7px;
		background: url('../../../static/img_3/btn_blue_small.png');
		background-size:100% 100%;background-repeat:no-repeat;
		line-height: 26px;
		text-align: center;
		font-size: 12px;
		color: #2a52ff;
	}
	.p2{
		font-size: 12px;
		margin: 0;
	}
	#p1{
		font-size: 16px;
		font-family: 'fz';
		/*float: left;*/
		margin: 0;
	}
	#tou_l{
		width: 641px;
		height: 47px;
		float: left;
		/*background:red;*/
		margin-left: 12px;
		position:relative;
		padding-top: 4px;
	}
	.toux{
		width: 49px;
		height: 49px;
		border-radius: 50%;
		background: #7D7D7D;
		float:left;
	}
	#tops{
		width: 100%;
		height: 71px;
		border-bottom: 1px solid #f3f3f3;
	}
	.zhongs{
		width: 702px;
		/*background: #DFE4ED;*/
		/*height:500px;*/
		float: left;
		margin-left: 44px;
	}
	.fen_t{
		width: 24px;
		height: 24px;
		margin: 19px 0 0 15px;
	}
	.left_f p{
	 	font-size: 12px;
	 	color: #adadad;
	 	position: absolute;
	 	top: 10px;
	 	right: 6px;
	 }
	 .left_f img{
	 	width: 23px;
	 	height: 22px;
	 	margin: 22px 0 0 15px;
	 }
	
	.left_f{
		width: 58px;
		height:64px;
		border-bottom: 1px solid #f0f0f0;
		position: relative;
		/*background: #2196F3;*/
	}
	
	.left_b{
		width:58px;
		height:487px;
		/*background:;*/
		float: left;
	}
	*{
	  padding: 0;
	  margin: 0;	
	}
	#box{
		width: 1172px;
		height: 100%;
		/*margin: auto;*/
		float: left;
		/*border-left: 1px solid #000000;*/
		/*border-right: 1px solid #000000;*/
		padding-top: 34px;
		padding-bottom: 30px;
		margin-top: 16px;
	}
	#app{
		width: 100%;
		float: left;
		margin-top: -17px;
		background: white;
	}
	
	
</style>