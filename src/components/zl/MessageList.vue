<template>
  <div>
    <titleBar msgTitle="消息" :msgImg="require('../../assets/message/man.png')" fixed>
    </titleBar>
    <!-- 3.调用子组件 -->
    <div class="itemstyle">
      <router-link class="routerMsg" to="/Private">
          <msg-content  class="contentMsg"
          v-for="(item,i) of list.data"
          :key="i"
          :title="item.title"
          :subtitle="item.subtitle"
          :sendtime="item.time"
          :imgurl="require('../../assets/message/'+item.img)">
          </msg-content>
      </router-link>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
//1.1:引入顶部子组件
import TitleBar from "./TitleBar"
//1.2:引入指定的自组件(一条消息)
import Message from './Message'
//1.3:读取json文件
//将json文件内容转化成js对象
import messagejson from "../json/messagelist.json"
//1.4:引入底部子组件
import Footer from "./Footer.vue"

export default {
  data() {
    return {
      list:messagejson//将json保存到data
    }
  },
  //2.注册自组件
  components:{
    "titleBar":TitleBar,
    "msg-content":Message,
    "footerBar":Footer,
  },
  methods: {
    
  },
}
</script>
<style scoped>
  .itemstyle{
    padding-top: 4rem;
  }
  .page-head{
    font-size: 15px !important;
    border-bottom: 1px solid #d9d9d9;
  }
  .contentMsg{
    border-bottom: 1px solid #ccc;
    /* box-shadow: 0 0 #ccc; */
  }
  .routerMsg{
    text-decoration: none;
  }
</style>