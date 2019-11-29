<template>
  <div>
    <div class="head">
        <p class="title">分享瞬间</p> 
        <router-link to='Me'>
          <img src="../../assets/zuojiantou.png" class="img1" alt="">
        </router-link>  
    </div>
    <div>  
    <van-uploader
      v-model="fileList"
      multiple
      :max-count="6" 
      id="tp"  
      :after-read="afterRead" 
    />
      <mt-field placeholder="我的标题" type="textarea" rows="1" v-model="bt">       
      </mt-field> 
      <mt-field placeholder="我的分享..." type="textarea" rows="6" v-model="xq">       
      </mt-field>      
    </div>
    <div class="btn1">
    <mt-button size="large" @click="go1">
      <img src="../../assets/dingwe.png" height="20" width="20" slot="icon">所在位置
    </mt-button>
    <mt-button size="large" @click="go1">
      <img src="../../assets/aite.png" height="20" width="20" slot="icon">提醒谁看
    </mt-button>
    <mt-button size="large" @click="go1">
      <img src="../../assets/renshu.png" height="20" width="20" slot="icon">谁可以看
    </mt-button>
     <div class="fb">
    <mt-button @click="download()">
      <span class="fb1">发布笔记</span>
    </mt-button>    
    </div>
    </div>
    </div>
</template>

<script>
 import Vue from 'vue'
 import { Field } from 'mint-ui'
 import Write from './Write'
 import Me from './Me'
 import { MessageBox } from 'mint-ui'
 import { Uploader } from 'vant';

export default {
  data () {
    return {
       maxStatus: true,
       fileList:[],
       bt:'',
       xq:'',
    }
  },
  props: {
      multiple: Boolean,
      max: Number,
      list: Array
    },
  methods: {
    afterRead (file) {
},
    go1() {
      this.$router.push('/Write');//要跳转的界面
    },    
    download () {  
      let uid=document.cookie.substr(document.cookie.indexOf('=')+1,document.cookie.indexOf('&&')-4);;
      if(document.cookie===""){
        this.$toast("请登录后再发布");
        this.$router.push('/Login'); 
      }else{
      MessageBox({
        title: '',
        message: '确定发表?',
        showCancelButton: true

      }).then(action => {
       
        for(var i=0;i<this.fileList.length;i++){
           this.fileList[i].content;
        }
        console.log(document.getElementById("tp"))

    //1::发送ajax请求获取关注数量,粉丝数量和收藏数量
    var url="post/fabupost";
   console.log(this.fileList.length);
   for(var i=0;i<this.fileList.length;i++){
      console.log(this.fileList[i].content);
           var c=this.fileList[0].content;
        }
        let url1="";
        console.log(typeof(url1))
        console.log(url1);
        console.log(document.getElementById("tp"))
    var obj={title:this.bt,des:this.xq,uid:uid,url: "5.jpg"};
    console.log(obj);
    this.axios.get(url,{params:obj})
    .then(res=>{//成功回调
      console.log(res.data.code)
        if(res.data.code==1){
          if (action === 'confirm') {
          this.$router.push('/Me');  
          MessageBox({
            title: '',
            message:'发表成功!'
            
          })  
        }
        if (action === 'cancel') {
          MessageBox({
            title: '',
            message:'退出发布',
            // this.$router.push('/Me')
          })
        }
        }else{
          this.$toast("发表失败")
        }
    })
    .catch(err=>{//失败回调
        console.log(err)
    })
      }).catch(err => {
        console.log(err)
      })
    }
    }
  },
}
</script>
<style>

.van-uploader__upload {
    margin: 0 8px 8px 28px !important;
}
  .mint-button::after {
    position: relative !important;
    /* width: 100px; */
}
</style>
<style  scoped>
.fb1{
  padding-left: 85px;
  padding-right: -10px !important;
  color:#fa866e;
}
.sc{
  display: inline-block;
  margin-left: 50px !important;
  margin-left: 50px !important;
}
.mint-button::after {
  display: inline-block;
}
  .mint-button {
    padding-left: 20px;
    font-size: 15px !important;    
    text-align: left !important;
}
  .mint-button--default {
    color: #000;
    background: #fff;
    -webkit-box-shadow: 0 0 1px #fff;
    box-shadow: 0 0 1px #999;
    border-radius: 30px;
  }
.btn1{
    padding: 10px 0;
  }
  .head{
    border-radius: 2px;
    padding:1px 0 10px 0;
    background:  #fff !important;   
    color: #fa866e; 
    height: 40px; 
    text-align: center;   
  }
  .fb{
        border-radius: 50%;
    padding: 10px 0;
    background:  #fff !important;   
    color: #000;
    font-size: 15px;   
    height: 30px;
    text-align: center !important; 
  }
  .mint-button::after {
    position: relative !important;
    width: 100px;
}
  .img1{
    height: 50%;
    float: left;
    margin-top: -35px;
    margin-left: 10px;
  }
  a{color: #999;}
  .fileCon {
  width: 100%;
  min-height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  }
  .list {
    width: 100%;
    min-height: 76px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    }
    .fileCon {
      width: 50px;
      height: 50px;
      margin: 10px 10px 10px 0;
      position: relative;
       }
      .close {
        width: 15px;
        height: 15px;
        background-size: 100%;
        position: absolute;
        top: -7px;
        right: -7px;
      }
   
.add-image {
  width: 50px;
  height: 50px;
  background-image: url("/images/addImg.png");
  background-size: 100%;
}
</style>