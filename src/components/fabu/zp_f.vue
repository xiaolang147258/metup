<template>
	<div id="app">
	    <div style="width: 1200px;margin: auto;">
	        <div class="add" style="width: 100%;float: left;background: #FFFFFF;padding-bottom: 27px;">
	        	<div style="width: 900px;margin: auto;">
	        	   <!--顶部步骤条-->
	        		 <div style="width: 100%;height: 109px;border-bottom: 1px solid #EEEEEE;padding-top: 42px;position: relative;">
	        			  <el-steps style='width:863px;margin-left:19px;'  :active="active" finish-status="success">
  	        			     <el-step title=""></el-step> <el-step title=""></el-step><el-step title=""></el-step></el-steps>
	        			     <span id="biaos"><p>上传作品</p><p>基本信息</p><p style="margin: 0;">确认发布</p></span>
	        		 </div>
	        	   <!--上传作品-->	 
	        		 <div style="width:100%;border-bottom: 1px solid #EEEEEE;padding-bottom: 37px;position: relative;">
	        		 	<div style="width: 100%;height: 46px;font-size: 20px;font-family: 'fz';padding-top: 27px;">
	        		 		   <div class="b_sn"><div class="jiao"></div></div><p id="biao">上传作品</p>
	        		 	</div>
	        		 	<p id="s_tu">上传图片（{{tu_s}}/12）</p>
	        		 	<p id="s_tu2">可从多角度拍摄作品细节（按住Shift即可多选图片）</p>
	        		 	<!--<div style="width:150px;height:150px;background:#E3E3E3;">-->
<!--上传图片--------------------------------------------------------------------------------------------------------------------->	 		
	        		 	<!--<el-upload multiple class="avatar-uploader" action=null :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
	                      <div class="imgbb" v-for="(i,index) in imageUrl">
                                <img v-show="i.picUrl" :src="i.picUrl" class="avatar">
	                      </div>
	                      <i class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>-->
	        		 	
                         <el-upload
                         	multiple
                         	:on-exceed='cao'
                            :limit='12'
                            action=''
                            :on-change='linshi'
                            list-type="picture-card"
                            :http-request="dad"
                           :on-remove="handleRemove">
                           <i class="el-icon-plus"></i>
                         </el-upload>
                         <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                         </el-dialog>
	        		
	        		
	        		 	<p style="font-size: 14px;margin: 0;line-height:54px;">上传视频({{vac!=''?1:0}}/1)</p>
<!--上传视频------------------------------------------------------------------------------------------------------------------------->	 		
	        		 	<!--<div style="width:150px;height:150px;background:#E3E3E3;"></div>-->
		             <div v-if="si" id="vac_box" style="position: relative;">
		               	<i class="el-icon-plus"></i>
		             <input style="width:150px;height:150px;opacity:0;position: absolute;top: 0;left: 0;" 
		        		 	type="file" 
		        		 	accept="video/avi,video/mp4,video/flv,video/3gp,video/swf" 
		        		 	capture="camcorder" 
		        		 	@change="onFileChange"></div>
		        		 	
    	             <video v-else class="shia" ref="video" controls="controls"></video>
	        		 <img v-show="si==false" @click="guan_x" id="x_box" src="../../../static/img_3/x (2).png"/> 	 
<!--------------------------------------------------------------------------------------------------------------------------------->	        		  	 
	        		  	 
	        		 <span id="p_q"><p>版权细节（0/6）</p><p style="color:#9C9C9C;margin-top:5px;">用于作品版权被侵害时作为申诉证据使用</p></span>
	        		 		
	        		 </div>
	        		 <div style="width: 100%;height: 46px;font-size: 20px;font-family: 'fz';padding-top: 27px;">
	        		 	<div class="b_sn"><div class="jiao"></div></div><p id="biao">基本信息</p></div>
	        		
	        		<!--输入基本信息-->  
	        		  <div class="inp_box" style="margin-top: 27px;margin-bottom:20px;">
	        		  	 <p class="min"><a>*&nbsp;</a>名称</p>
	        		  	 <!--手动输入框-可直接使用v-module绑定数据-->
	                     <el-input clearable style='width:467px;height:42px;margin-left:51px;' placeholder="请输入"></el-input>
	        		  </div>
	        		  
	        		 <div class="inp_box" style="margin-bottom:20px;">
	        		  	 <p class="min"><a>*&nbsp;</a>类型</p>
	        		  	 <!--类型-选择器-->
                       <el-select style='width:467px;height:42px;margin-left:51px;' v-model="value4"  placeholder="请选择"><el-option
                         v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option></el-select>
	        		 </div>
	        		 
	        		  <div class="inp_box" style="margin-bottom:20px;">
	        		  	 <p class="min"><a>*&nbsp;</a>年代</p>
	        		  	 <!--年代-选择器    prefix-icon=null 11318  -->
                        <el-date-picker style='width:467px;height:42px;margin-left:51px;' v-model="value5" type="year" placeholder="选择年代"></el-date-picker>
	        		 </div>
	        		 
	        		<div class="inp_box" style="margin-bottom:20px;">
	        		  	 <p class="min"><a>*&nbsp;</a>尺寸</p>
	        		  	 <!--手动输入框 -可直接使用v-module绑定数据-->
	                     <el-input clearable style='width:130px;height:42px;margin-left:51px;float: left;' placeholder="长(cm)"></el-input>
	                      <p class="px">X</p>
	                     <el-input clearable style='width:130px;height:42px;float:left;' placeholder="宽(cm)"></el-input>
	                      <p class="px">X</p>
	                     <el-input clearable style='width:130px;height:42px;float:left;' placeholder="高(cm)"></el-input>
	        		</div>
	        		
	        		<div class="inp_box" style="margin-bottom:20px;">
	        		  	 <p class="min"><a>*&nbsp;</a>形状</p>
	        		  	 <!--类型-选择器-->
                       <el-select style='width:467px;height:42px;margin-left:51px;' v-model="value6"  placeholder="请选择"><el-option
                         v-for="item in options1"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option></el-select>
	        		 </div>
	        		 
	        		<div class="inp_box" style="margin-bottom:20px;">
	        		  	 <p class="min"><a>*&nbsp;</a>材质</p>
	        		  	 <!--类型-选择器-->
                       <el-select style='width:467px;height:42px;margin-left:51px;' v-model="value7"  placeholder="请选择"><el-option
                         v-for="item in options2"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option></el-select>
	        		 </div>
	        		 
	        		<div class="inp_box" style="margin-bottom:20px;">
	        		  	 <p class="min"><a>*&nbsp;</a>题材</p>
	        		  	 <!--类型-选择器-->
                       <el-select style='width:467px;height:42px;margin-left:51px;' v-model="value8"  placeholder="请选择"><el-option
                         v-for="item in options3"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option></el-select>
	        		 </div>
	        		 
	        		 <div class="inp_box" style="margin-bottom:15px;">
	        		  	 <p class="min"><a>*&nbsp;</a>风格</p>
	        		  	 <!--类型-选择器-->
                       <el-select style='width:467px;height:42px;margin-left:51px;' v-model="value9"  placeholder="请选择"><el-option
                         v-for="item in options4"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option></el-select>
	        		 </div>
	        		 
	        		 <div class="inp_box" style="margin-bottom:15px;">
	        		  	 <p class="min" style="margin-right:38px;"><a>*&nbsp;</a>色调</p>
	        		  	 <!--色调-选择器-->
                         <div v-for="(i,index) in options5" @click="se_click(i,index)" class="yanse">
                         	  <img style="width:100%;height:100%;" :src="(cl==index)?i.imgs:i.img" alt="" />
                         </div>
	        		 </div>
	        		 
	        		 <div class="inp_box" style="">
	        		  	 <p  class="min" style="margin-right:55px;"><a>*&nbsp;</a>版权</p>
	        		  	 <!--单选框-->
                          <el-radio @change='dan' v-model="radio" label="1">原创</el-radio>
                          <el-radio @change='dan' v-model="radio" label="2">复制品</el-radio>
	        		 </div>
	        		    <div  class="adds" :class="{dal_ss:show==false,dal_s:show}">
	        		      <transition name="el-zoom-in-top">
                             <div v-show="show" class="transition-box">
                               <div class="nei_inp">
                                 <p class='adp' v-model="checked1">原著作者</p>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div>
                               <div class="nei_inp">
                                 <p class='adp' v-model="checked2">所属国家</p>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div>
                               <div class="nei_inp" style="margin: 0;">
                                 <p class='adp' v-model="checked3">授权依据</p>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div> 
                             </div>
                          </transition>
	        		    </div>
	        		<div class="inp_box" style="margin-top:15px;">
	        		  	 <p  class="min" style="margin-right:55px;"><a>*&nbsp;</a>版权</p>
	        		  	 <!--单选框-->
                          <el-radio @change='dan1' v-model="radio1" label="1">仅展示</el-radio>
                          <el-radio style='margin-left:16.5px;' @change='dan1' v-model="radio1" label="2">可出售</el-radio>
	        		 </div>
	        		    <div  class="adds" :class="{dal_s1:show1==false,dal_ss1:show1}">
	        		      <transition name="el-zoom-in-top">
                             <div v-show="show1==false" class="transition-box1" style="">
                               <div class="nei_inp">
                                 <el-checkbox class='adp' v-model="checked4">原著作者</el-checkbox>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div>
                               <div class="nei_inp">
                                 <el-checkbox class='adp' v-model="checked5">所属国家</el-checkbox>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div>
                               <div class="nei_inp" style="">
                                 <el-checkbox class='adp' v-model="checked6">授权依据</el-checkbox>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div> 
                               <div class="nei_inp">
                                 <el-checkbox class='adp' v-model="checked7">所属国家</el-checkbox>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div>
                               <div class="nei_inp" style="margin: 0;">
                                 <el-checkbox class='adp' v-model="checked8">授权依据</el-checkbox>
                                 <el-input clearable style='width:369px;height:42px;float:left;' placeholder=""></el-input>
                               </div> 
                             </div>
                          </transition>
	        		    </div>
	        		   
	        		<div class="inp_box" style="margin-top:20px;margin-bottom:20px;">
	        		  	 <p class="min" style=""><a>*&nbsp;</a>作品所在</p>
	        		  	 <!--手动输入框 -可直接使用v-module绑定数据-->
	                     <el-input clearable style='width:130px;height:42px;margin-left:24px;float: left;' placeholder="请选择"></el-input>
	                       <p class="px" style="color: #E0E4ED;font-size: 16px;">-</p>
	                     <el-input clearable style='width:130px;height:42px;float:left;' placeholder="请选择"></el-input>
	                       <p class="px" style="color: #E0E4ED;font-size: 16px;">-</p>
	                     <el-input clearable style='width:130px;height:42px;float:left;' placeholder="请选择"></el-input>
	        		</div>
	        		   
	        		<!--创作说明-->  
	        		  <div class="inp_box" style="margin-bottom:28px;height:171px;border-bottom: 1px solid #EEEEEE;">
	        		  	 <p class="min"><a>*&nbsp;</a>创作说明</p>
	        		  	 <!--手动输入框-可直接使用v-module绑定数据-->
	                     <el-input style='width:467px;margin-left:24px;' type="textarea" :rows="6" placeholder="请输入内容" v-model="textarea"></el-input>
	        		  </div> 
	        		  <div class="btns"  style="background:url('static/img_3/btn_blue.png');background-size:100% 100%;background-repeat:no-repeat;">发布</div>
	        		  <div class="btns" style="background:url('static/img_3/btn_blue2.png');background-size:100% 100%;background-repeat:no-repeat;color: #2A52FF;">保存</div>
	        	</div>
	        </div>
	     </div>
	  </div>
</template>

<script>
import router from '../../router/index.js'
import store from '../../vuex/store.js'
import md5 from 'js-md5';
	export default {
		store,
		computed:{
			tu_s(){//图片的数量
				return this.fileListss.length;
			},
			
		},
		data(){
			return{
				  active:0,//步骤条进度数据
				  //类型-选项数据
				  options: [{value: '黄金糕',label: '黄金糕'},{value: '双皮奶', label: '双皮奶'}],
                  value4: '',
                  //年代-选项数据
                  value5: '',
                  //形状-选项数据
                  options1: [{value: '黄金糕',label: '黄金糕'},{value: '双皮奶', label: '双皮奶'}],
                  value6: '',
                  //形状-选项数据
                  options2: [{value: '黄金糕',label: '黄金糕'},{value: '双皮奶', label: '双皮奶'}],
                  value7: '',
                   //形状-选项数据
                  options3: [{value: '黄金糕',label: '黄金糕'},{value: '双皮奶', label: '双皮奶'}],
                  value8: '',
                   //形状-选项数据
                  options4: [{value: '黄金糕',label: '黄金糕'},{value: '双皮奶', label: '双皮奶'}],
                  value9: '',
                  //色调选择器数据
                  cl:'i',
                  options5: [{
                  			img: 'static/img_2/icon_red_normal.png',
                  			imgs: 'static/img_2/icon_red_active.png',
                  		},
                  		{
                  			img: 'static/img_2/icon_orange_normal.png',
                  			imgs: 'static/img_2/icon_orange_active.png',
                  		},
                  		{
                  			img: 'static/img_2/icon_yellow_normal.png',
                  			imgs: 'static/img_2/icon_yellow_active.png',
                  		},
                  		{
                  			img: 'static/img_2/icon_green_normal.png',
                  			imgs: 'static/img_2/icon_green_active.png',
                  		},
                  		{
                  			img: 'static/img_2/icon_blue_normal.png',
                  			imgs: 'static/img_2/icon_blue_active.png',
                  		},
                  		{
                  			img: 'static/img_2/icon_purple_normal.png',
                  			imgs: 'static/img_2/icon_purple_active.png',
                  		},
                  		{
                  			img: 'static/img_2/icon_black_normal.png',
                  			imgs: 'static/img_2/icon_black_active.png',
                  		}],
                    //版权单选框
                    radio: '1',
                    show: false,
                    
                    checked1: false, //多选框-原著作者
                    checked2: false,//多选框-所属国家
                    checked3: false,//多选框-授权依据
                    //可售单选框
                    radio1:'1',
                    show1:true,
                    checked4: false, //多选框-原著作者
                    checked5: false,//多选框-所属国家
                    checked6: false,//多选框-授权依据 
                    checked7: false,//多选框-所属国家
                    checked8: false,//多选框-授权依据 
                    
                    textarea:'',//创作说明的内容
                    
                    imageUrl:[],//上传图片内容
                    pz:'supplementary_pic',
                    
                    dialogImageUrl:'',
                    dialogVisible:false,
                    fileListss:[],
                     
                    si:true,
                    vac:'',//视频文件
                    
                    }
                  },
                  mounted() {

                  	},
                  	methods: {
                  		guan_x(){
                  			this.vac = '';
                            this.si = true;
                  		},
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        //视频上传
        let _this = this;
        //视频预览
        var reader = new FileReader();
        this.file = files[0];
        reader.onload = function () {
            _this.$refs.video.src = this.result;
        };
        reader.readAsDataURL(this.file);
        this.vac = this.file;
        this.si = false;
//      console.log(this.vac);
      },
       
                  		dad(){
                  			
                  		},
                  		cao(){
                  		   this.$message.error('上传的图片不能超过12张');
                  		},
                  		linshi(file,fileList){//添加图片
//                			this.dialogImageUrl = file.url;
//                          this.dialogVisible = true;
                  			this.fileListss = fileList
//                			console.log(this.fileListss);
                            
                  		},
                  		 handleRemove(file, fileList) {//删除图片
//                          console.log(file, fileList);
                            this.fileListss = fileList
                          },
                          
                        se_click(i,index){
                        	this.cl = index;
                        },
                        dan(){
                        	this.show = !this.show;
                        },
                         dan1(){
                        	this.show1 = !this.show1;
                        },
                    //上传图片事件    
//                      beforeAvatarUpload(file) {
//                        if(this.imageUrl.length<12){//
//                      	  	  const isLt2M = file.size / 1024 / 1024 < 5;
//                              if (!isLt2M) {
//                                 this.$message.error('上传头像图片大小不能超过 5MB!');
//                              }else{
////                                 console.log(file)
//                                 var url=this.$store.state.url+"/api/mapManager/uploadPic.do";
//		                           var id=localStorage.memid;
//		                           var token=localStorage.tokenid;
//		                           var ts=new Date().getTime();
//		                           var sign=md5(url+id+token+ts);
//		            if(this.imageUrl.length>=1){
//		          	     this.pz ='cover_pic'
//		            }
//		            var form = new FormData();
//		            form.append("picName", file);
//					form.append('plateName','art') // 添加form表单中其他数据
//					form.append('picType',this.pz)
//                 var settings = {
//						async: false,
//						crossDomain: true,
//						url:this.$store.state.url+"/api/mapManager/uploadPic.do?memId=" + id + "&ts=" + ts,
//						method: "POST",
//						headers: {
//							'sIgn': sign
//						},
//						processData: false,
//						contentType: false,
//						mimeType: "multipart/form-data",
//						dataType: "json",
//						data:form
//					};	
//                     var thit = this;
//                    $.ajax(settings).done(function(abc) {
//						if(abc.meta.msg == "ok") {
//							thit.imageUrl.push(abc.data)
//						   }
//					     });
//                      }
//                      }else{
//                      	  	 this.$message({
//                    message:'最多上传12张图片哦',
//                    type:'success'
//                  });
//                }
//              },
                  	},

                  }
</script>
<style scoped="scoped">
	*:hover{
		cursor: pointer;
	}
	#vac_box i{
		font-size: 42px;
		line-height: 150px;
		line-height: 3.5;
		color: #E3E3E3;
	}
	#vac_box:hover{
		border:2px dashed #409eff;
	}
	#vac_box{
		width:150px;height:150px;background:white;
		border:2px dashed #E3E3E3;
		text-align: center;
	}
	#x_box{
		width: 30px;
		height: 30px;
		/*background: black;*/
		position: absolute;
		left:300px;
		bottom:412px;
	}
	.shia{
		width: 300px;height: 400px;background: black;
		position: relative;
	}
	.imgbb{
    width: 150px;
    height: 150px;
    float: left;
    margin-right: 20px;
    overflow: hidden;
    border: 3px solid #d9d9d9;
    margin-top: 10px;
	}
	.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width:150px;
    height:150px;
    line-height:150px;
    text-align: center;
    border: 2px dashed #E3E3E3;
    float: left;
    margin-top: 10px;
  }
  .avatar {
    min-width: 150px;
    min-height: 150px;
    max-width: 150px;
    /*float: left;*/
    display: block;
    /*margin-right: 10px;*/
  }
	.btns{
		width:94px;
        height:39px;
        float: right;
        text-align: center;
        line-height: 39px;
        font-size: 16px;
        font-family: 'SimSun';
        color: white;
        margin-left: 14px;
	}
	.adp{
		font-size: 14px;
		float: left;
		margin: 0;
		margin-right: 19px;
	}
	.nei_inp{
		width: 100%;
		height: 42px;
		line-height: 42px;
		padding-left: 23px;
		margin-bottom: 20px;
	}
	
	.dal_s1{
		 width:659px;
         height:328px;
         margin-left:91px;
         /*margin-bottom: 20px;*/
        margin-top: 15px;
     margin-bottom: 20px; 

	}
	.dal_ss1{
		 width:659px;
         height:0px;
         margin-left:91px;
         overflow: hidden;
	 } 
	.dal_s{
		 width:659px;
         height:206px;
         margin-left:91px;
	}
	.dal_ss{
		 width:659px;
         height:0px;
         margin-left:91px;
         overflow: hidden;
	 }
	.adds{
		/*transition: 0.3s;*/
	}
	/*.add *{
		transition: 0.5s;
	}*/
	.add{
		transition: 0.5s;
	}
	.transition-box{
		width:659px;
height:206px;
background:rgba(247,247,247,1);
      padding-top: 20px;
      margin-top: 15px;
	}
	.transition-box1{
		width:659px;
height:328px;
background:rgba(247,247,247,1);
      padding-top: 20px;
       /*margin-top: 15px;
       margin-bottom: 15px;*/
	}
	.yanse{
		width:80px;
        height:18px;
        float: left;
        margin-top:5px;
        margin-left: 16px;
	}
	.px{
		font-size: 14px;
		float: left;
		margin: 0;
		margin: 0 15px;
	}
	.min a{
		color:#F65B5B;
	}
	.min{
		font-size: 14px;float: left;margin: 0;
	}
	.inp_box{
		width: 100%;
		height: 42px;
		line-height: 42px;
		
	}
	#p_q p{
		font-size: 14px;
		margin: 0;
	}
	#p_q{
		position: absolute;
		bottom: 32px;
		left: 350px;
	}
	#s_tu2{
		font-size: 14px;
		margin: 0;
		color: #9C9C9C;
		line-height: 29px;
	}
	#s_tu{
		font-size: 14px;
		margin: 0;
		margin-top: 27px;
	}
	#biao{
		float: left;
		margin: 0;
	}
	.b_sn{
		 width:16px;
height:16px;
background:rgba(0,0,0,1);
   float: left;
    margin-top: 6px;
    position: relative;
    margin-right: 17px;
	}
	.jiao{
		 width: 0;
    height: 0;
    border-top: 6px solid #EDEDED;
    border-left: 6px solid transparent; 
    position: absolute;top: 0rem;
    right: -0.015rem;
	}
	#biaos p{
		float: left;
		margin: 0;
		margin-right: 365px;
	}
	#biaos{
		font-size: 14px;
		position: absolute;
		top:69px;
	}
	#app{
		width: 100%;
		background:#EEEEEE;
		float: left;
		padding-top: 40px;
		padding-bottom: 40px;
	}
</style>