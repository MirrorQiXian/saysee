<template>
  <div class="bg">
    <div class="head">
        <p class="title">编辑资料</p> 
          <img src="../../assets/zuojiantou.png" class="img1"  alt="" @click="zuojiantou">
          <p  @click="download()" class="save">
      保存
    </p>
    </div>
    
    <div class="field">
      <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="小红书号" placeholder="请输入小红书号" type="url"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
    </div>
  </div>
</template>

<script>
import Me from './Me'
 import Vue from 'vue'
 import { Field } from 'mint-ui'
  import { MessageBox } from 'mint-ui'

export default {

  data () {
    return {

    }
  },
  components:{

  },
  methods:{
     zuojiantou(){
       this.$router.push('/Me')
     },
     download () {
      MessageBox({
        title: '',
        message: '确定保存?',
        showCancelButton: true
      }).then(action => {
        if (action === 'confirm') {
          this.$router.push('/Me')
          MessageBox({
            title: '',
            message:'成功保存!'
          })
        }
        if (action === 'cancel') {
          MessageBox({
            title: '',
            message:'退出编辑'
          })
        }
      }).catch(err => {
        console.log(err)
      })
     }
  }
}
</script>
<style scoped>
  .save{
    color: #fa866e;
    margin-top: -35px;
    padding-left: 315px;
  }
  .mint-cell-text {
      font-size: 14px !important;
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
  .mint-cell-wrapper{
    font-size: 14px;
  }
  a{font-size: 14px;color: #999;}
  #sex{margin-left: 13px;}
  .dj{text-align: left;margin-right: 152px;}

</style>