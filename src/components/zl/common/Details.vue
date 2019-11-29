<template>
  <div class="container">
    <!-- 头部-->
    <div id="top">
      <div class="table"></div>
      <div class="left" @click="jumpFooter">
        <!-- 返回键 -->
          <img src="../../../assets/back.png" class="back" >
        <!-- 头像 -->
          <img :src="`http://127.0.0.1:3000/${photoUrl}`" class="photo" @click="jumpPage" >
          <div class="username">
        <!-- 用户名  -->
            <span style="line-height:40px" @click="jumpPage">{{userName}}</span>
        </div>
      </div>
      <div class="right">
      <!-- 关注 -->
         <button  
          @click="favor"
          class="my_button" 
          :style="{backgroundColor:bg_color, color: ft_color}"
          @mouseenter="change()" 
          @mouseleave="goback()"> {{content}} </button>
          <!-- 分享 -->
         <a href="JavaScript:;">
            <img src="../../../assets/share.png" class="share" @click="share">
         </a> 
      </div>
    </div>

    <!-- 轮播图 -->
    <div id="carousels">    
      <p>
        <mt-swipe :auto="4000">
          <mt-swipe-item><img :src="`http://127.0.0.1:3000/${picUrl}`" style="width:100%;"></mt-swipe-item>
        </mt-swipe>
      </p>
    </div>

    <!-- 文字内容 -->
    <div id="content">
      <!-- 标题 -->
      <h6 >{{title}}</h6>
      <!-- 正文 -->
        <p class="biji"> {{desc}} </p>   
    </div>

    <!-- 标签 -->
    <div id="lable">
       <mt-badge size="small" color="rgb(228, 227, 227)">#日常美容保健品</mt-badge>
    </div>

    <!-- 发布时间 -->
    <div id="date">
      <span class="fnt14" >10-15</span>
    </div>
    <hr>
     <!-- 评论 -->
    <div id="comment">
      <span>共632条评论</span>
      <!-- 写评论 -->
      <div class="write">
        <img src="../../../assets/img.jpg">
        <input type="text" placeholder="说点什么...">
      </div>
    </div>  
  <div class="pinlun" >
    <!-- 评论列表 -->
    <!--3:调用子组件-->
     <message
      class="itemstyle"
      v-for="(item,i) of list.data" :key="i"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :imgurl="require('../../../assets/photo1.jpg')"
    ></message>
   </div> 
    <!-- 加载更多 按钮 -->
   
    <!--底部 -->
      <div id="footer">
        <div style="float:left;">
          <input class="end"  placeholder="说点什么..."  >
        </div>
      
        <div @click="switchColor1" style="float:left">
          <img src="../../../assets/zan.png" v-show="downIcon1">
          <img src="../../../assets/zan_1.png" v-show="!downIcon1">
          <span style="font-size:14px;">{{dzs}}</span>
        </div>
        <div @click="switchColor2" style="float:left">
          <img src="../../../assets/collect.png" v-show="downIcon2">
          <img src="../../../assets/collect_1.png" v-show="!downIcon2">
          <span style="font-size:14px;">{{scs}}</span>
        </div>
        <div @click="switchColor3" style="float:left">
          <img src="../../../assets/pinglun_1.png" v-show="downIcon3">
          <img src="../../../assets/pinglun_1 (2).png" v-show="!downIcon3">
          <span style="font-size:14px;">632</span>
        </div>
   
      </div>
  </div>
</template>
<script>
    import Message from "./Message"
    //1.1:读取json文件
    //将json文件内转换js对象
    import messagejson1 from "../json/messagelist1.json"
    export default {
    data(){
      return {
        downIcon1: true,
        downIcon2: true,
        downIcon3: true,
        list:messagejson1,//将json保存data
        liked:false,
        content:'关注',
        bg_color:"#fff",
        ft_color:"#999", 
        picUrl:"",//笔记图片地址
        desc:"",//笔记描述
        title:"",//笔记标题
        userName:"",//笔记作者用户名
        photoUrl:"",//笔记作者头像路径
        dzs:0,//点赞数
        scs:0,//收藏数
        isdz:false,
        issc:false
      }
    },  
    //2:注册子组件
    components:{
      "message":Message
    },
    created(){
      this.loadData();
    },
    methods:{
      share(){
      this.$messagebox.confirm('分享至朋友圈...')
      },
      switchColor1(){
        this.downIcon1 = !this.downIcon1
        if(this.isdz==false){
          this.dzs+=1;
          this.isdz = !this.isdz;
        }else {
          this.dzs-=1;
          this.isdz = !this.isdz;
        }
      },
      switchColor2(){
        this.downIcon2 = !this.downIcon2
        if(this.issc==false){
          this.scs+=1;
          this.issc = !this.issc;
        }else {
          this.scs-=1;
          this.issc = !this.issc;
        }
      },
      switchColor3(){
        this.downIcon3 = !this.downIcon3
      },
      loadData(){
        this.userName=this.$route.params.po_name;
        this.photoUrl=this.$route.params.po_photo;
        var url="/post/mypostdetail";
        //var uid=$store.getters.getUid;
        var obj={id:this.$route.params.po_id};
        //console.log(obj);
        this.axios.get(url,{params:obj})
        .then(res=>{//成功回调
            this.picUrl=res.data.data[0].po_url;
            this.desc=res.data.data[0].po_des;
            this.title=res.data.data[0].po_title;
            this.dzs=res.data.zan[0].dzs;
            this.scs=res.data.sc[0].scs;
            console.log(this.dzs,this.scs);
        })
        .catch(err=>{//失败回调
            console.log(err)
        });
      },
      jumpPage(){
        this.$router.push({name:"Me",params:{po_uid:po_uid,po_name:po_name,po_photo:po_photo}});
      },
        jumpFooter(){
              this.$router.push("/Home");
        },
      favor (e) {
        this.liked=!this.liked;
        if(this.liked){
            this.content="已关注";
            this.bg_color="#fff";
            this.ft_color="#999";
          } else{
            this.content="关注"
            this.bg_color="#fff";
            this.ft_color="#f56c6c";
            }
        },
        change(){
          this.bg_color="#fff";
          this.ft_color="#999";
        },
        goback(){
            this.bg_color="#fff";
            this.ft_color="#999";
        }
      
      }
  }
</script>
<style scoped>
/* 头部 */
  #top{
    height: 60px;
		width:100%;
		background:#fff;
		position:fixed;
		top:0;left:0;
    z-index: 9999;
    box-shadow:0 3px #fafafa;
	}
  
  #top .left{
    width: 50%;
    float: left;
    margin-top:10px;
  }
  /* 返回键 */
   #top .left .back{
   float: left;
   width:20px;
   height:20px;
   margin-top:9px;
   padding-left:9px;
  }
  /* 头像  */
  #top .left .photo{
    float:left;
    width:40px;
    height:40px;
    margin-top:3px;
    margin-left:9px;
    border-radius:50%;
  }
  /* 用户名 */
  #top .left .username span{
    margin-top:25px;
    padding:10px;
    width:20px;
    height:20px;
    font-size: 18px;
    line-height: 20px;
  }
  #top .right{
    float:right;
    text-align: center;
    margin-top:10px;
    padding:10px;
  }

   button{
    outline:none;
    margin-top:-15px;
  }
  /* 关注 */
 .my_button{
    color: #f56c6c;
    background: #fff;
    border: #fbc4c4 solid;
    border-radius: 20px;
    padding: 2px 5px;
    text-align: center;
    -webkit-transform-: scale(0.7);
  }
  /* 分享 */
  #top .right .share{
    width:20px;
    height:20px;
    float:right;
    margin-left:5px;
  }
  /* 轮播图 */
  .carousels{
    margin-top: 30px;
   }
  .carousels p img {
    text-align: center;
  }
  .mint-swipe {
     height: 300px;
  }
  /* 笔记内容 */
 #content  h6{
     text-align:center;
     margin:0;
   }
  .biji{
    width:86%;
    font-size: 14px;
    font-family:'PingFang SC';
    color:#5a5a5a;
    margin-left:8%;  
    letter-spacing: 3px;
  }

  /* 标签 */
  #lable {
   margin-left:5%;
   padding: 5px;
   box-sizing: border-box;
   font-size: 20px;
  }  
  hr{
    width:90%;color:#ccc;
  }
  .fnt14{
   font-size:14px;
   color:#999;
   margin-left:5%;
  }
  #comment span{
   color:#7F8180;
   font-size:16px;
   margin-left:5%;
  }
  /* 写评论 */
  .write img{
   width:40px;
   height:40px;
   margin-left:5%;
   margin-top:10px;
   padding: 0;
   float: left;
  }
  /* 说点什么  */
  .write input{
   width:70%;
   border:1px solid #F6F6F4;
   border-radius:15px;
   padding:5px;
   margin-top:15px;
   margin-left: 15px;
   color:#dadada;
   background:#F6F6F4;
   font-size:14px;
   outline:none;
  }
  /* 评论列表   */
  #comment {
    width:100%;
    height:4rem;
    padding-bottom:10px;
  }
  .pinlun,.pinlun>.itemstyle {
    width:100%;
  }
   #footer{
    width:100%;
    height: 40px;
    background: #fff;
		position:fixed;
		bottom:0;
    left:0;
   
	}
  #footer .end{
  width:150px;
  height:20px;
  border:1px solid  #ccc;
  border-radius:30px;
  margin:0 auto;
  margin-left:10px;
  margin-top: 10px;
  font-size:12px;
  outline:none;
  padding-left:3px;
  float:left;
  }
  #footer  img{
    width:20px;height:20px;
    margin-left: 12px;
    margin-top:10px;
  }
  #footer  span{
    margin-left: 15px;
    margin-top:10px;
  }

</style>
   
