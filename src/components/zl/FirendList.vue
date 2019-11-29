<template>
  <div>
    <mt-header title="好友列表" fixed>
      <a style="text-decoration: none;" href="javascript:history.go(-1)" slot="left">取消</a>
    </mt-header>
    <div class="itemstyle">
      <router-link class="routerMsg" to="/Private">
        <fl-item
        v-for="(item,i) of list.data"
        :key="i"
        :title="item.title"
        :subtitle="item.subtitle"
        :sendtime="item.time"
       :imgurl="require('../../assets/message/'+item.img)">
        </fl-item>
      </router-link>
    </div>
  </div>
</template>
<script>
//引入到header   mint-ui
import { Header } from 'mint-ui'
//引入到搜索框   mint-ui
import { Search } from 'mint-ui'
//1.5:引入好友列表
import FirendListItem from './FirendListItem'
//将json文件内容转化成js对象
import firendlist from "../json/firendlist.json"
export default {
  data() {
    return {
      list:firendlist//将json保存到data
    }
  },
  //2.注册自组件
  components:{
    "fl-item":FirendListItem,
  },
  methods: {
    myadd(){
      console.log("添加");
    },
  },
}
</script>
<style scoped>
  .mint-header{
    color: #fa866e;
    background-color: #fff !important;
    font-size: 15px !important;
    /* height: 38px !important; */
    padding-top:15px !important;
    padding-bottom: 15px !important; 
    border-bottom: 1px solid #e8e7e7;
    height: 63px;
  }
  .itemstyle{
    padding-top: 70px;
  }
  fl-item{
    text-decoration: none;
  }
</style>