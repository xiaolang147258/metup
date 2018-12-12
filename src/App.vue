<template>
  <div id="app" style="background: white;" >
  	
      <div id="tops" style="width:100%;height:54px;border-bottom: 1px solid #EEEEEE;position: fixed;left: 0;top: 0;z-index: 10;background: black;cursor: pointer;">
      	  <img id="imgs" style="float:left" class="imgs" src="static/img_1/icon_logo_white.png"/>  
      	  <!--<div id="top_box">-->
      	  	  <div @click="js1" class="top_box_c" style="transition: 0.5s;margin-left: 1.354%;" :class="{top_box_c_s:url_s.rul_s1!=''}">
      	  	  	   作品
      	  	  	<img v-show="url_s.rul_s1!=''" class="top_box_img" style="" :src='url_s.rul_s1'/>
      	  	  </div> 
      	  	   
      	  	  <div @click="js2" class="top_box_c" style="transition: 0.5s" :class="{top_box_c_s:url_s.rul_s2!=''}">
      	  	  	   资讯
      	  	  	<img  v-show="url_s.rul_s2!=''"  class="top_box_img"  style="" :src='url_s.rul_s2'/>
      	  	  </div> 
      	  	  
      	  	  <div @click="js3" class="top_box_c" style="transition: 0.5s" :class="{top_box_c_s:url_s.rul_s3!=''}">
      	  	  	   问答
      	  	  	<img  v-show="url_s.rul_s3!=''" class="top_box_img" style=""  :src='url_s.rul_s3'/>
      	  	  </div> 
      	  	  
      	  	  <div @click="js4" class="top_box_c" style="transition: 0.5s" :class="{top_box_c_s:url_s.rul_s4!=''}">
      	  	  	   闲情
      	  	  	<img  v-show="url_s.rul_s4!=''" class="top_box_img" style="" :src='url_s.rul_s4'/>
      	  	  </div> 
      	  	  
      	  	  <div @click="js5" class="top_box_c" style="transition: 0.5s" :class="{top_box_c_s:url_s.rul_s5!=''}">
      	  	  	   商城
      	  	  	<img  v-show="url_s.rul_s5!=''" class="top_box_img" style="" :src='url_s.rul_s5'/>
      	  	  </div> 
      	  	   
      	  	  <div @click="js6" class="top_box_c" style="transition: 0.5s" :class="{top_box_c_s:url_s.rul_s6!=''}">
      	  	  	   视频
      	  	  	<img  v-show="url_s.rul_s6!=''" class="top_box_img" style="" :src='url_s.rul_s6'/>
      	  	  </div> 
      	  	  
      	  	  <div @click="js7" style="transition: 0.5s" class="top_box_c"  :class="{top_box_c_s:url_s.rul_s7!=''}">
      	  	  	   毕业季
      	  	  	<img  v-show="url_s.rul_s7!=''" class="top_box_img" style="margin-left: 10%;" :src='url_s.rul_s7'/>
      	  	  </div> 
      	  	  
      	  	  <div @click="js8" style="margin-right: 0;transition: 0.5s" class="top_box_c"  :class="{top_box_c_s:url_s.rul_s8!=''}">
      	  	  	   大数据
      	  	  	<img  v-show="url_s.rul_s8!=''" class="top_box_img" style="margin-left: 10%;" :src='url_s.rul_s8'/>
      	  	  </div> 
      	  <!--</div>-->
      	  
      	  <div id="top_inp">
      	  	 <img style="width:16px;height:16px;float:left;margin:1.3%;" src="static/img_1/icon_nav_search.png" alt="" />
      	     <input type="text"  id="inp" placeholder="搜索你喜欢的..." />
      	  </div>
      	  
      	  <!--用户头像-->
      	   <div @click="show4 = !show4" v-if="tou==''" id="tou"></div>
      	   <div @click="tui" v-else id="tou"><img :src="tou"/></div>
      	  
      	  
      	  <img id="you" src="static/img_1/icon_nav_message.png" alt="" />
      	  
      	  <img id="fan" src="static/img_1/icon_nav_eng.png"/>
      	  
      	  <img @click="fabu" style="width:36px;height:36px;margin-left: 1.5604%;margin-top:9px;" src="../static/img_1/icon_add_big.png"/>
      	  
      	  <!--<div style="width:5.72916%;height:100%;background:rgba(42,82,255,1);float: left;margin-left:1.4583%;">
      	  	  <img style="width:23.636%;height:33.333%;margin-left:20.90%;margin-top:16.363%;float: left;" src="static/img_1/icon_nav_announce.png"/>
      	  	  <p id="p_s" style="float:left;font-size:14px;color:#FFFFFF;margin-left:6.09%;margin-top: 17.272%;font-family:'aa';">发布</p>
      	  </div>-->
      </div>
   <!--
   	作者：2443611475@qq.com
   	时间：2018-08-08
   	描述:固定定位的返回顶部图标
   -->
      <div style="width:36px;height:150px;position:fixed;right: 6px;bottom:100px;z-index: 500;">
      	  <img class="img_ss" src="static/img_1/icon_totop.png"  />
      	  <img style="margin-top: 10px;" class="img_ss" src="static/img_1/icon_add_small.png" />
      	  <img style="margin-top: 10px;" class="img_ss" src="static/img_1/icon_question.png" />
      </div>
      
     <div id="zhong" style="width:100%;float: left;min-height: 800px;margin-top:54px;">
     	  <router-view/>
     </div>
     
     
     <div style="width: 100%;height: 200px;background: black;float:left;position: relative;">
     	   <img style="width:60px;height:57px;float: left;margin-left:7.4%;margin-top: 40px;" src="static/img_1/icon_logo_white.png"/>
         <div style="width: 600px;height: 100%;float: left;margin-left: 54px;padding-top:40px;">
         	   <span id="sp">
         	   	  <p>关于我们 </p><p>|</p><p>联系我们</p><p>|</p><p>常见问题</p><p>|</p><p>友情链接</p><p>|</p><p>中文</p><p>|</p><p style="margin-right: 0;">English</p>  
         	   </span>
         	   <p style="margin-top: 55px;" class="px">@2018 顶牛信息科技有限公司版权所有 @copyright粤ICP备16055698</p>
         	   <p class="px">违法和不良信息举报电话：020-89015622  举报邮箱：info@ding-new.com</p>
         </div>
         <div style="width:374px;height:128px;background:rgba(255,255,255,1);float: right;margin-right:7.4%;margin-top: 2.5%;">
         	   <div style="width: 136px;height: 100%;float: left;margin-left: 14px;">
         	   	    <img style="margin-top: 14px;" class="img_xx" src="../static/img_1/icon_appstore.png"/>
         	   	    <img class="img_xx" src="../static/img_1/icon_google.png" alt="" />
         	   </div>
         	   
         	   <div style="width: 89px;height: 100%;float: left;margin-left:16px;font-size: 12px;text-align: center;">
         	   	   <img class="img_e" src="../static/img/app20180808105747.jpg"/>
         	   	         觅艺APP
         	   </div>
         	   <div style="width: 89px;height: 100%;float: left;margin-left: 16px;font-size: 12px;text-align: center;">
         	   	   <img class="img_e" src="../static/img/QQgong20180808105809.jpg"/>
         	                   觅艺公众号
         	   </div>
         	   
         </div>
         
     </div>
     
  <mu-container>
  <mu-flex class="mu-transition-row">
    <mu-scale-transition>
    <div class="mu-transition-box mu-primary-color mu-inverse" v-show="show4">
    	 	<mu-text-field style='width: 340px;' v-model="name" label="UserName" label-float help-text="用户名为6-12长度的字符" ></mu-text-field><br/>
        <mu-text-field style='width: 340px;' v-model="password" color='red' label="Password" label-float help-text="请输入密码" type='password' ></mu-text-field><br/> 
        <div @click="logins"><mu-ripple class="mu-ripple-demo demo-2" id='dengs' color="yellow" :opacity="0.7">登录</mu-ripple></div>
        <div @click="qu"><mu-ripple class="mu-ripple-demo demo-1" id="qus">取消</mu-ripple></div>
    </div>
    </mu-scale-transition>
  </mu-flex>
</mu-container>
     
     <div v-show="box_wai" id="box_fu">加载中，请稍后......</div>
     
  </div>
</template>

<script>
import router from './router/index.js'
import store from './vuex/store.js'
import md5 from 'js-md5';
export default {
	store,
  name: 'App',
  computed:{
  	tou(){//头像路径
  		return this.$store.state.data.tou_url
  	},
  	dingshi(){
  		var that = this
    	window.setTimeout(function(){
　              if(localStorage.memid!=''){//打开页面就查看，是否有历史登录记录，如果有,直接获取头像数据
       	   that.getUserInfo(localStorage.memid,localStorage.tokenid)
         }else {
        	 that.$notify.info({
             title:'消息',
             message:'亲，点击头像按钮即可登录账号哟'
           });
          }
        },1500)
  	},
  },
  data(){
  	 return{
  	 	 name: '',
       password: '',
  	 	
  	 	 show4: false,
  	 	 box_wai:true,
  	 	
  	 	 url_s:{
  	 	 	   rul_s1:'',
  	 	 	   rul_s2:'',
  	 	 	   rul_s3:'',
  	 	 	   rul_s4:'',
  	 	 	   rul_s5:'',
  	 	 	   rul_s6:'',
  	 	 	   rul_s7:'',
  	 	 	   rul_s8:''
  	 	  },
  	 	 	   rul_sto:'static/img_1/icon_nav_trangle.png',
  	 	 	  
  	 }
  },
  mounted(){
       this.box_wai=false
//	   $('#app').height($(window).height());
  	   $('#app').width($(window).width()); 
       this.js1()
        this.dingshi
     
       
       
  },
  methods:{
  	fabu(){
  		if(this.$store.state.data.tou_url){
  			 router.push({
					   path: '../zp_fb'
				  })
  		}else{
  			 this.$notify({
          title: '消息',
          message: '需要登录后才能发布作品',
          offset: 90
        });
  			 this.show4 = true;
  		}
  		
  		  
  	},
  	tui(){//退出登录事件
  		 
  		  var url=this.$store.state.url+"/api/user/logout.do";
		    var ts=new Date().getTime();
		    var sign = md5(url+localStorage.memid+localStorage.tokenid+ts)
		    
		  	this.$http({
				url: this.$store.state.url+"/api/user/logout.do?memId="+localStorage.memid+"&ts="+ts,
				headers: {
					"content-type": "application/json;charset=UTF-8",
					'sIgn': sign
				},
				emulateJSON: false,
				method: 'post',
				body:{
					      memId:localStorage.memid,
								pid:"684589bb5b0e40059ceb41d71be23d8d",
								rid:"631e32975df34e89a6ec9f58512b912f",
								cpFlag:"0"
				}
			}).then(function(response) {
				if(response.body.meta.res == '00000'){
					  this.$message('已退出账号');
					  localStorage.memid = ''
						localStorage.opPic='';
						localStorage.nickname='';
						this.$store.state.data.tou_url = '';
					  this.$store.state.data.name = '';
					  this.$store.state.data.memid = '';
					  this.$store.state.data.tokenid = '';
				}
			}).catch(function(err){
				 
			 })
  	},
  	 getUserInfo(id,token){
			  var url=this.$store.state.url+"/api/map/user/artUserInfo.do";
		    var ts=new Date().getTime();
		    var sign = md5(url+id+token+ts)
		  	this.$http({
				url: this.$store.state.url+"/api/map/user/artUserInfo.do?memId="+id+"&ts="+ts,
				headers: {
					"content-type": "application/json;charset=UTF-8",
					'sIgn': sign
				},
				emulateJSON: false,
				method: 'post',
				body:{
					opId:id
				}
			}).then(function(response) {
				if(response.body.meta.res == '00000'){
						localStorage.opPic=response.body.data.opPic;
						localStorage.nickname=response.body.data.nickname;
						this.$store.state.data.tou_url = localStorage.opPic;
					  this.$store.state.data.name = localStorage.nickname;
					  this.$store.state.data.memid = localStorage.memid;
					  this.$store.state.data.tokenid = localStorage.tokenid;
				}else{
				 console.log(response.body,'11111111111')
				 const h = this.$createElement;
         this.$notify({
           title: '账号异常',
           message: h('i', { style: 'color: teal'},'您的登录信息已过期，需要重新登录'),
            duration: 0
        });
        this.$notify({
          title: '消息',
          message: '亲，点击头像按钮即可登录账号哟',
          offset: 90
        });
          
				}
			}).catch(function(err){
				 
			 })
			},
  	 logins(){
				var reg = /^1[3|4|5|7|8][0-9]{9}$/;
				var reg_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/; //密码正则，6-12位，包含一种数字一种字母
				var phone = this.name;
				var password = this.password;
//				console.log(this.$store.state.url)
				
//				console.log(phone,password)
//				 console.log(1111)
				if(phone != null && phone != ""){
					if(phone.length==8){
								var m_pass = md5(password);
								var params = "{\"loginType\":\"1\",\"loginAccount\":\"" + phone + "\",\"loginPwd\":\"" + m_pass + "\",\"pid\":\"684589bb5b0e40059ceb41d71be23d8d\",\"rid\":\"631e32975df34e89a6ec9f58512b912f\",\"cpFlag\":\"0\",\"regEquipment\":\"WAP\"}";
								//console.log("登陆数据: " + params);
								this.$http({
									url: this.$store.state.url+'/api/user/login.do',
									method: 'post',
									headers: {
										"content-type": "application/json;charset=UTF-8"
									},
									body:params,
									emulateJSON: false,
								}).then(function(response) {

									if(response.body.meta.res === "00000") {	
										localStorage.memid=response.body.data.memId
                    localStorage.tokenid=response.body.data.tokEn
                    localStorage.info=response.body.data.info
										/*提示语*/
//										
//                   alert('登录成功')
                     this.$message({
                      message: '恭喜，登录成功',
                      type: 'success'
                    });
//										console.log(response,'ok')
										this.show4 = false
										this.getUserInfo(localStorage.memid,localStorage.tokenid)
									} else {
										
										/*提示语*/
//										Toast({
//											message: response.body.meta.msg,
//											position: 'middle',
//											duration: 2000
//										});
										this.$message.error(response.body.meta.msg);
									}

								}).catch(function(err){
									//console.log(err)
									/*提示语*/
										this.$message.error('错了哦，请检查网络连接.1');
								})
				}else{
					if(reg.test(phone)) {
						if(password != null && password != "") {
							if(reg_pass.test(password)) {
								var m_pass = md5(password);
								var params = "{\"loginType\":\"2\",\"loginAccount\":\"" + phone + "\",\"loginPwd\":\"" + m_pass + "\",\"pid\":\"684589bb5b0e40059ceb41d71be23d8d\",\"rid\":\"631e32975df34e89a6ec9f58512b912f\",\"cpFlag\":\"0\",\"regEquipment\":\"WAP\"}";
								//console.log("登陆数据: " + params);
								this.$http({
									url: this.$store.state.url+'/api/user/login.do',
									method: 'post',
									headers: {
										"content-type": "application/json;charset=UTF-8"
									},
									body:params,
									emulateJSON: false,
								}).then(function(response){
									if(response.body.meta.res === "00000") {
										localStorage.memid=response.body.data.memId
                    localStorage.tokenid=response.body.data.tokEn
                    localStorage.info=response.body.data.info
										/*提示语*/
                   this.$message({
                      message: '恭喜，登录成功',
                      type: 'success'
                    });
//										console.log(response,'ok')
										this.show4 = false
										this.getUserInfo(localStorage.memid,localStorage.tokenid)
									} else {
										/*提示语*/
//									  alert('错误，请查看输出信息')
									  this.$message.error(response.body.meta.msg);
//										console.log(response.body,'错误输出信息')
									}

								}).catch(function(err) {
									//console.log(err)
									/*提示语*/
										
//										alert('1登录失败，请检查网络连接')
										this.$message.error('错了哦，请检查网络连接.2');
								})
							} else {
								/*提示语*/
										this.$message({
          message: '密码格式错误，6-12位，包含一种数字一种字母',
          type: 'warning'
        });
//										alert('6-12位,必须包含至少一个字母和一个数字')
							}

						} else {
							/*提示语*/
							this.$message({
                message: '密码不能为空',
                type: 'warning'
              });
//							alert('密码不能为空')
						}
					} else {
						/*提示语*/
						this.$message({
                message: '手机号格式不对',
                type: 'warning'
              });
//							alert('手机号格式不对')
					}
					}
				} else {
					/*提示语*/
							this.$message({
                message: '手机号不能为空',
                type: 'warning'
              });
//					   alert('手机号不能为空')
				}
			},
  	    
  	   qu(){
  	   	  this.show4 = false
  	   },
  	   js1(){
  	   	  this.url_s.rul_s1 = this.rul_sto; this.url_s.rul_s2 = '';this.url_s.rul_s3 = ''; this.url_s.rul_s4 = '';
  	   	  this.url_s.rul_s5 = ''; this.url_s.rul_s6 = '';this.url_s.rul_s7 = ''; this.url_s.rul_s8 = '';
  	   	  router.push({
					   path: '../home'
				  })
  	   },
  	   js2(){
  	   	  this.url_s.rul_s1 = ''; this.url_s.rul_s2 = this.rul_sto;this.url_s.rul_s3 = ''; this.url_s.rul_s4 = '';
  	   	  this.url_s.rul_s5 = ''; this.url_s.rul_s6 = '';this.url_s.rul_s7 = ''; this.url_s.rul_s8 = '';
  	   	  router.push({
					   path: '../information'
				  })
  	   },
  	   js3(){
  	   	  this.url_s.rul_s1 = ''; this.url_s.rul_s2 = '';this.url_s.rul_s3 = this.rul_sto; this.url_s.rul_s4 = '';
  	   	  this.url_s.rul_s5 = ''; this.url_s.rul_s6 = '';this.url_s.rul_s7 = ''; this.url_s.rul_s8 = '';
  	      router.push({
					   path: '../questions_and_answers'
				  })
  	   },
  	   js4(){
  	   	  this.url_s.rul_s1 = ''; this.url_s.rul_s2 = '';this.url_s.rul_s3 = ''; this.url_s.rul_s4 = this.rul_sto;
  	   	  this.url_s.rul_s5 = ''; this.url_s.rul_s6 = '';this.url_s.rul_s7 = ''; this.url_s.rul_s8 = '';
  	       router.push({
					   path: '../leisure'
				  })
  	   },
  	   js5(){
  	   	  this.url_s.rul_s1 = ''; this.url_s.rul_s2 = '';this.url_s.rul_s3 = ''; this.url_s.rul_s4 = '';
  	   	  this.url_s.rul_s5 = this.rul_sto; this.url_s.rul_s6 = '';this.url_s.rul_s7 = ''; this.url_s.rul_s8 = '';
  	      router.push({
					   path: '../store'
				  })
  	   
  	   },
  	   js6(){
  	   	  this.url_s.rul_s1 = ''; this.url_s.rul_s2 = '';this.url_s.rul_s3 = ''; this.url_s.rul_s4 = '';
  	   	  this.url_s.rul_s5 = ''; this.url_s.rul_s6 = this.rul_sto;this.url_s.rul_s7 = ''; this.url_s.rul_s8 = '';
  	      router.push({
					   path: '../video'
				  })
  	   },
  	   js7(){
  	   	  this.url_s.rul_s1 = ''; this.url_s.rul_s2 = '';this.url_s.rul_s3 = ''; this.url_s.rul_s4 = '';
  	   	  this.url_s.rul_s5 = ''; this.url_s.rul_s6 = '';this.url_s.rul_s7 = this.rul_sto; this.url_s.rul_s8 = '';
  	       router.push({
					   path: '../Senior_Year'
				  })
  	   },
  	   js8(){
  	   	  this.url_s.rul_s1 = ''; this.url_s.rul_s2 = '';this.url_s.rul_s3 = ''; this.url_s.rul_s4 = '';
  	   	  this.url_s.rul_s5 = ''; this.url_s.rul_s6 = '';this.url_s.rul_s7 = ''; this.url_s.rul_s8 = this.rul_sto;
  	      router.push({
					   path: '../big_data'
				  })
  	   },
  }
  
}
</script>

<style scoped>
.mu-ripple-demo {
  position: relative;
  width: 100px;
	height: 50px;
	float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  background-color: #fff;
  border-radius: 4px;
  &.demo-1 {
    color: #2196f3;
    border: 1px solid #2196f3;
  }
  &.demo-2 {
    background-color: #2196f3;
    color: #fff;
  }
  }
	html,body{
		background: white;
	}
	#app{
		float: left;
		height: auto;
	}
	#qus{
		margin-right: 10px;
		border: 1px solid #2196f3;
		color:#2196f3;
	}
	#dengs{
		background:#2196f3;
		color: white;
		margin-right: 30px;
	}
	
	.btnssa{
		width: 100px;
		height: 50px;
		float: right;
		
		border: none;
		border-radius: 3px;
		font-size: 14px;
		margin-top: 20px;
	}
	.inp{
		margin: 0 auto;
		border: none;
		width: 340px;
		height: 50px;
		margin-top: 30px;
    text-indent:7px;		
    border-radius: 3px;
    border: 1px solid #BBBBBB;
	}
	.mu-transition-row {
  margin-top: 16px;
  height: 100px;
}
.mu-transition-box {
  width: 400px;
  height: 280px;
  margin-right: 16px;
  border-radius: 4px;
  padding-left:30px;
  background:whitesmoke;
 -moz-box-shadow:0px 10px 20px #525252; -webkit-box-shadow:0px 10px 20px #525252; box-shadow:0px 10px 20px #525252;
 padding-top: 30px;
  position: fixed;
  left: 40%;
  top: 40%;
  z-index:1000;
}
	
	
	#box_fu{
		width: 100%;
		height:900px;
		background:rgba(255,255,255,0.9);
		position:fixed;
		top:0;
		left:0;
		z-index:1000;
		font-size: 14px;
		color: #7D7D7D;
		font-weight: 600;
		text-align: center;
		line-height: 700px;
	}
	
	
	.img_e{
		  width:89px;
      height:89px;
      margin-top: 12px;
	}
	.img_xx{
		  width:136px;
      height:45px;
      margin-top:10px;
	}
	.px{
		  font-size: 12px;
		  color: #8A8A8A;
		  margin-top: 30px;
	}
	
	#sp p{
		  float:left;
		  font-size: 15px;
		  color: #C5C5C5;
		  margin: 0;
		  margin-right: 13px;
	}
	/*@font-face {
		font-family:"aa";
		src: url("../static/css/font-MFJunYa_Noncommercial/aa.otf");
	}*/
	.top_box_img{
		width: 20px;
		height:9px;
		position: absolute;
		left: 20%;
		bottom: -1px;
	}
	
	.p1{
		 width: 80px;
		 font-size: 12px;
		 color: #FFFFFF;
		 margin: 0;
	}
	.ul5{
		 width: 70px;
		 padding: 0;
		 float: left;
		 margin:0;
		 margin-left: 50px;
	}
	.ul5 li{
		 width: 100px;
		 font-size: 12px;
		 color: #8A8A8A;
		 margin-top: 10px;
	}
	.ul4{
		 width: 70px;
		 padding: 0;
		 float: left;
		 margin:0;
		 margin-left: 50px;
	}
	.ul4 li{
		 width: 100px;
		 font-size: 12px;
		 color: #8A8A8A;
		 margin-top: 10px;
	}
	.ul3{
		 width: 70px;
		 padding: 0;
		 float: left;
		 margin:0;
		 margin-left: 50px;
	}
	.ul3 li{
		 width: 100px;
		 font-size: 12px;
		 color: #8A8A8A;
		 margin-top: 10px;
	}
	.ul2{
		 width: 70px;
		 padding: 0;
		 float: left;
		 margin:0;
	}
	.ul2 li{
		 width: 100px;
		 font-size: 12px;
		 color: #8A8A8A;
		 margin-top: 10px;
	}
	*{
		list-style-type:none;
	}
	.li1{
		margin-left: 50px;
	}
	.ul1{
		  width: 100%;
		  float: left;
		  padding: 0;
	}
	.ul1 li{
		 width: 70px;
		 font-size: 13px;
		 color: #C5C5C5;
		 float: left;
	}
	#bottom_box{
		width: 465px;
		height: 130px;
		float: left;
		/*background: deepskyblue;*/
		margin-top: 23px;
		margin-left: 56px;
	}
.img_ss{
	 width: 100%;
	 height: 36px;
	 -moz-box-shadow:0px 0px 20px #D9D9DB; -webkit-box-shadow:0px 0px 20px #D9D9DB; box-shadow:0px 0px 20px #D9D9DB;
}
.imgs{
	width:35px;
height:33px;
  /*height:33px;*/
  margin-left:3.22%;
  margin-top:0.781%;
}
#top_box{
	/*width:32.156%;*/
	height:100%;
	float: left;
	margin-left:1.3%;
	/*margin-top:0.881%;*/
  line-height:54px;	
	/*background: #42B983;*/
}
.top_box_c{
	/*width: 6.217%;*/
	height: 100%;
	text-align: center;
	font-size:18px;
	margin-right:2.2%;
	float: left;
	color: white;
	font-family:"aa";
	/*font-weight: 600;*/
	position: relative;
	
	line-height: 54px;
}
.top_box_c_s{
	line-height: 54px;
	/*width: 6.817%;*/
	height: 100%;
	text-align: center;
	font-size:22px;
	margin-right:2.2%;
	float: left;
	color: white;
	font-family:"aa";
	/*font-weight: 600;*/
	position: relative;
	
}



#top_inp{
width:45.5%;
height:66.666666666%;
background:rgba(239,239,239,1);
border-radius:4px;
 float:left;
 margin-left: 1.927%;
 margin-top:0.56875%;
 
}
#inp{
	width: 90%;
	height:70%;
	margin-top:0.7%;
	border: none;
	background: #EFEFEF;
	outline:none;
	font-size: 12px;
}
#tou img{
	 width: 100%;
	 margin-top: -10%;
}
#tou{
width:24px;
height:24px;
background:rgba(125,125,125,1);
float: left;
margin-left: 1.14583%;
border-radius: 50%;
margin-top: 15px;
overflow: hidden;
}
#you{
	width:24px;
height:18px;
 float: left;
 margin-left: 1.5104%;
 margin-top: 18px;
}
#fan{
 width:23px;
height:20px;
 float: left;
 margin-left: 1.7708%;
 margin-top: 16px;
}
</style>
