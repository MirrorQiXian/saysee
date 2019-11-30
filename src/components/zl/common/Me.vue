<template>
<div>  
    <div class="head">
      <router-link to='Set'>
        <img src="../../assets/shez.png" class="img1" alt="">
      </router-link>
      <div class="ht">
        <span class="title">{{user_name}}</span > 
        <span class="num">知知号:{{uid}}</span >
      </div>
      <router-link to='Set'>
        <img src="../../assets/fenxiang.png" :class="`imgr ${this.uid?'active':''}`" alt="" id="fx">
      </router-link>
    </div> 
    <div class="row">
      <div class="col">
        <img :src="tou" class="img2" alt="">
      </div>
      <div class="col-3">
        <a href="">
          <p>{{gzsl}}</p>
          <p>关注</p>
        </a>
      </div>
      <div class="col-3">
        <a href="">
          <p>{{fssl}}</p>
          <p>粉丝</p>
        </a>
      </div>
      <div class="col-3">
        <a href="">
          <p>{{scsl}}</p>
          <p>收藏</p>
        </a>
      </div>
      <div class="btn">
        <mt-button  @click="addRoutes2" class="inp">编辑资料</mt-button>
      </div>
      <router-link to='Set'>
        <div class="btn2">
          <img src="../../assets/shezhi.png" class="w-50" alt="">
        </div>
      </router-link>
    </div>
    <div class="btn3">
      <mt-button  @click="addRoutes3" class="">分享瞬间,记录美好生活</mt-button>
    </div>
<div class="page-navbar">   
    <mt-navbar class="page-part" v-model="selected">  
      <mt-tab-item id="1">笔记</mt-tab-item>  
      <mt-tab-item id="2">收藏</mt-tab-item>  
      <mt-tab-item id="3">赞过</mt-tab-item>  
    </mt-navbar>    
    <mt-tab-container v-model="selected">  
      <mt-tab-container-item id="1">  
        <router-link :to="'/Details1'+'?pid='+item.po_id"   v-for="(item,i) of list" :key="i">
          <div class="product_app">
            <!--添加一个商品 start-->
            <div class="goods-item" @click="details1">
            <img :src="item.po_url" alt="" @click="tupian">
            <h3>{{item.po_title}}</h3>  
            <div class="user">
              <div class="userr">
                <img class="userimg" :src="tou" alt="">
              </div>
              <span class="name">{{item.user_name}}</span>
            </div>
            </div>
          </div>
        </router-link>   
      </mt-tab-container-item>  
      <mt-tab-container-item id="2">  
        <router-link to="/Details1">
          <div class="product_app">
            <!--添加一个商品 start-->
            <div class="goods-item" v-for="(item,i) of list.data" :key="i" @click="details1">
            <h3>{{item.title}}</h3>
            <div class="user">
              <div class="userr">
              </div>
              <span class="name">{{item.name}}</span>
            </div>
            </div>
          </div>
        </router-link>  
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
        <router-link to="/Details1">
          <div class="product_app">
            <!--添加一个商品 start-->
            <div class="goods-item good-items" v-for="(item,i) of list.data" :key="i" @click="details1">
            <h3>{{item.title}}</h3>
            <div class="user">
              <div class="userr">
              </div>
              <span class="name">{{item.name}}</span>
            </div>
            </div>
          </div>
        </router-link>  
      </mt-tab-container-item>  
    </mt-tab-container>  
  </div>  
<footerBar></footerBar>
</div>
</template>

<script>
import Details from "./common/Details1.vue"
import { Navbar, TabItem } from 'mint-ui';
import Write from "./Write.vue"
import Set from "./Set.vue"
import Share from "./Share.vue"
import Me from "./Me.vue"
import Home from "./Home.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
import Publish from "./Publish.vue"
import MessageList from "./MessageList.vue"
export default {
  name: 'page-navbar', 
data(){
  return{
    list:[],
    selected: '1' ,
    active:"me",
    tou:"",
    gzsl:0,
    fssl:0,
    scsl:0,
    user_name:"",
    uid:"",
    pid:"",
    currentIndex:[
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
        {isSelect:true}
      ]
  }
},
created(){
  this.load();
  this.findmynote()
 },
methods: {
  findmynote(){
    this.uid=document.cookie.substr(document.cookie.indexOf('=')+1,document.cookie.indexOf('&&')-4);
    this.user_name=document.cookie.substr(document.cookie.lastIndexOf('=')+1);
    console.log(this.uid);
    var url="post/findmynote";
    var obj={uid:this.uid};
    console.log(document.cookie);
    if(document.cookie===""){
      this.tou="http://127.0.0.1:3000/head/tou.png";
    }else{
    this.axios.get(url,{params:obj})
    .then(res=>{//成功回调
    // console.log(res.data);
    console.log(res);
    if(res.data.code===1){
      this.list =res.data.data;  
      for(var i=0;i<res.data.data.length;i++){
        console.log(this.list[i].user_pic)
        if(this.list[i].user_pic==null){
          console.log(1)
            this.tou="http://127.0.0.1:3000/head/tou.png";
        }else{     
          //console.log(res.config.baseURL);
          this.pid = res.data.data[i].po_id;
          console.log(res);
           
          console.log(this.list[i].po_url=res.config.baseURL+"title/"+this.list[i].po_url);
          console.log(this.list[i].po_url)
          console.log(this.list[i].user_pic=res.config.baseURL+"head/"+this.list[i].user_pic);
          this.tou=res.data.data[0].user_pic;
           console.log(this.list)
        }
      }
    }else if(res.data.code===2){
      console.log(res.msg);
      this.tou="http://127.0.0.1:3000/head/h5.jpg";
    }
    
    })
    .catch(err=>{//失败回调
      console.log(err)
    })
    }
  },
  details1(){
    console.log(this.pid);
      this.$router.push("/Details1?pid="+`${this.po_id}`);
    },
  load(){
    //1::发送ajax请求获取关注数量,粉丝数量和收藏数量

    if(document.cookie===''){
      this.user_name = '<a href="/Me">请登录</a>'
      console.log(this.user_name);
    }else{
      
this.uid=document.cookie.substr(document.cookie.indexOf('=')+1,document.cookie.indexOf('&&')-4);
      console.log(this.uid)
    var url="center/myinfo";
    var obj={uid:this.uid};
    console.log(this.uid)
    this.axios.get(url,{params:obj})
    .then(res=>{//成功回调
        console.log(res);
        this.gzsl=res.data.gzsl[0].gzsl;//关注数量
        this.fssl=res.data.fssl[0].fssl;//粉丝数量
        this.scsl=res.data.scsl[0].scsl;//收藏数量
        console.log(this.gzsl,this.fssl,this.scsl);
    })
    .catch(err=>{//失败回调
        console.log(err)
    })
    }
  },
  addRoutes2 () {
      this.$router.push('/Write')
    },
    tupian(){
      this.$router.push('/Detail1s')
    },
    addRoutes3 () {
      this.$router.push('/Share')
    },
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")},
    changeState(n){
      for(var i=0;i<this.currentIndex.length;i++){
        if(n==i){
          this.currentIndex[i].isSelect=true;
        }else{
          this.currentIndex[i].isSelect=false;
        }
      }
    }
},
 components:{
    "home":Home,
    "tabbaricon":TabBarIcon,
    "publish":Publish,
    "me":Me,
    "messagelist":MessageList
 }
}
</script>
<style>
  .mint-tab-item-label {
    font-size: 15px !important;
}

.F{
  display:flex !important;
  justify-content:space-between  !important;
}
.goods-item>img{
  width:48%;
}
.mint-tab-container-item a:last-child{
  display: none !important;
}
</style>

<style scoped>

.goods-item{
  width: 100% !important;
}
.product_app{
  padding-bottom: 3px !important;
}
.mint-tab-container-item a{
  display: inline-block;
    width: 50%;
}

.page-navbar{font-size: 15px;}
.mint-tab-item-label {
    font-size: 15px !important;
}
.page-navbar[data-v-b2d5383c] {
    font-size: 15px;
}
.mint-tabbar>.mint-tab-item{
    font-size:6rem;
    color:#999;
  }
  .mint-tabbar>.mint-tab-item.is-selected{
    font-size: 20rem;
    color:#fa866e;
    background-color:transparent;
  }
.ht{margin-right: 37px;}
.img1{
    height: 50%;
    float: left;
    margin-top: 15px;
    margin-left: 15px;
  }
  .imgr{
    height: 2.5rem;
    float: right;
    margin-top: -1.91rem;
    margin-right: 10px;
  }
  .imgr.active{
    margin-top:-2.75rem;
  }
  .head{
    display: flex; /*弹性布局 */
    position: fixed; /*固定定位 */
    z-index: 999; /*浮上方*/
    width: 100%; /*子元素两端对齐*/
    justify-content: space-between;
    /* 垂直居中 */
    align-items: center;
    background-color: #fff;
    height: 7%;
    color: #000;
    font-size: 12px;
    display: inline-block;
    text-align: center;
    padding-bottom: 2%;
  }
  .title{
    font-size: 15px;
    display: block;
    padding-top: 17px;
    padding-bottom: 4px;
  }
  .name{
    text-align: center;
    font-size: 15px;
  }
  .num{
    text-align: center;
    font-size: 13px;
    color:darkgrey;
  }
  .imgy{
    height: 50%;
    float: right;
    padding-right: 10px;
    padding-top: 15px;
  }
  .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding-top: 45px;
  }
  .img2{
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    margin-left: 26px;
    margin-top: -15px;
  }
  .col-3 {
    padding: 5px 30px 0px 20px;
    font-size: 15px;
  }
  .col{
    padding: 45px 20px 20px 20px;
  }
  .sl{
    color:#999;
    text-align: center; 
  } 
  a{
    text-decoration: none;
    color: #999
  }
  .btn{
    text-align: center;
    border-radius: 25px;
    border: 1px solid rgb(247, 246, 246);
    font-size: 15px;
    width: 35%;
    margin-left: 160px;
    margin-top: -35px;
    height: 23px !important;
    border: 0;
  }
  .btn2 {
    text-align: center;
    border-radius: 25px;
    border: 1px solid rgb(247, 246, 246);
    width: 10%;
    border: 2;
    margin-left: 312px;
    margin-top: -40px;
    height: 24px;
}
  .btn3{
    text-align: center;
    border-radius: 25px;
    border: 1px solid rgb(247, 246, 246);
    width: 80%;
    margin: 0 auto;
  }
  .mint-button {
    background-color:  #fff !important;
    color: #999;
    padding-top: 2px;
    margin-top: 1PX;
    text-align: center;
    border-radius: 25px !important;
    color:#999 !important;
    font-size: 14px !important;
    border: rgb(247, 246, 246) !important;
    width: 100% !important;
    height: 25px !important;
    margin: 0 auto;
}
  .mint-button::after {
    background-color:  #fff !important;
    color: #999;
    padding-top: 2px;
    margin-top: 1PX;
    text-align: center;
    border-radius: 25px;
    color:#999 !important;
    font-size: 15px !important;
    border: rgb(247, 246, 246);
    width: 100%;
    height: 20px;
    margin: 0 auto;
}
  .inp{
    border: 0;
    background: #fff;
    color: #999;
    padding-top: 2px;
    margin-top: -7PX;
  }
  button, input, optgroup, select, textarea {
      font-family: inherit;
      font-size: 90%;
      line-height: 1.15;
      margin: 0;
  }
  .w-50{width: 50%}
  .jl{
      font-size: 13px;
      color: #999;
      margin-left: 30px;
      margin-top: 0px;  
      background: #fff; 
      border: 0;
      padding-top: 2px;
      margin-top: 1PX;
      padding-bottom: 8px;
  }
  p{
    text-align: center;
    vertical-align: middle;
    margin-bottom: -10px;
  }
  .click{
      text-align: center;
      font-size: 15px;
  }
  .bj{
      margin-right: 36px;
      padding-left: 20px;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #fa866e !important;
    color: #fa866e !important;
}
.product_app{
    display:flex; /*弹性布局*/
    flex-wrap:wrap; /*子元素换行*/
    justify-content:space-between;
    padding:4px;
    padding-bottom: 50px;
  }
  /*2.修饰商品样式*/
  .goods-item{
    width:49%;/*指定商品宽度*/
    border:1px solid #cccccc;
    border-radius:5px;
    margin:2px 0;
    padding:2px;
    box-sizing:border-box; /*重新计算盒子模型*/
    display:flex;
    flex-direction: column;
    min-height: 257px;
  }
  /*3.图片样式*/
  .goods-item img{
    width:100%;
  }
  .userimg{
    height:28px;
    border-radius: 50%;
  }
  .user{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .userr{
    position: relative;
    overflow: hidden;
    width:28px;
    height:28px;
  }
  .name{
    display:inline;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #555;
    overflow: hidden;
    margin-left: 10px;
  }
  .articleul{
    list-style:none;
  }
  .jz{
    margin:0 auto;
  }
</style>