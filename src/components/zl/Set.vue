<template>
  <div class="bg">
    <div class="head">
        <p class="title">设置</p> 
        <a href="javascript:history.go(-1)"> 
          <img src="../../assets/zuojiantou.png" class="img1" alt="" >
        </a> 
    </div> 
    <div class="btn1">
    <mt-button size="large" @click="go1">编辑资料</mt-button>
    <mt-button size="large" @click="go1">账号与安全</mt-button>
    <mt-button size="large" @click="go1">通知设置</mt-button>
    <mt-button size="large" @click="go1">隐私</mt-button>
    <mt-button size="large" @click="go1">通用</mt-button>
    </div>
    <div class="btn2">
    <mt-button size="large" @click="go1">功能申请</mt-button>
    <mt-button size="large" @click="go1">鼓励一下</mt-button>
    <mt-button size="large" @click="go1">关于知了</mt-button>
    <mt-button size="large" @click="go1">帮助与客服</mt-button>
    </div>
    <div class="btn3" >
    <mt-button size="large" @click="clearAllCookie()">退出登录</mt-button>
    </div>
    
  </div>
</template>

<script>

 import Vue from 'vue'
 import { Field } from 'mint-ui'
 import Write from './Write'
 import Me from './Me'
 import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      
    }
  },
     
  methods: {
    go1() {
      this.$router.push('/Write');//要跳转的界面
    },

      clearAllCookie() { 
        let keys = document.cookie.match(/[^ =;]+(?=\=)/g); 
        if(keys) { 
          for(let i = keys.length; i--;)
           document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString() 
        } 
        MessageBox({
        title: '退出登录？',
        message: '是否确定退出登录?',

        showCancelButton: true
      }).then(action => {
        if (action === 'confirm') {
          this.$router.push('/Login')
          console.log(1)
        }
        if (action === 'cancel') {
          console.log(2)
        }
      }).catch(err => {
        console.log(err)
      })
      }      
  },
  components:{

  }
}
</script>
<style scoped>
.mint-cell-wrapper {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-origin: content-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 15px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 15px;
    width: 100%;
}
  .mint-button {
    padding-left: 15px;
    font-size: 15px !important;    
    text-align: left !important;
}
  .mint-button--default {
    color: #999;
    background: url("../../assets/right1.png") no-repeat 95% #fff !important;
    -webkit-box-shadow: 0 0 1px #fff;
    box-shadow: 0 0 1px #999;
    border-radius: 10px;
  }
  .btn1,.btn2,.btn3{
    padding: 5px 0;
  }
  .head{
    border-radius: 2px;
    padding:1px 0 10px 0;
    background:  #fff !important;   
    color: #fa866e; 
    height: 40px; 
    text-align: center;   
  }
  .img1{
    height: 50%;
    float: left;
    margin-top: -35px;
    margin-left: 10px;
  }
</style>
