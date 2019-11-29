<template>
  <div>
    <van-tabbar v-model="active"   active-color="#fa866e" inactive-color="#707070" class="tabbar" route>
      <van-tabbar-item to="/Home">
        <span>关注</span>
        <img slot="icon" slot-scope="props" :src="props.active?iconi.active:iconi.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/Publish">
        <span>发布</span>
        <img slot="icon" slot-scope="props" :src="props.active?icono.active:icono.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/MessageList">
        <span>消息</span>
        <img slot="icon" slot-scope="props" :src="props.active?iconm.active:iconm.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/Me">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active?iconn.active:iconn.normal">
      </van-tabbar-item>
    </van-tabbar>

      
  </div>
</template>
<script>

export default {
  data(){
    return{
     active: 0,
      iconi: {
        normal: '../../../icon/zl_index_normal.png',
        active: '../../../icon/zl_index_selected.png'
      },
      icono: {
        normal: '../../../icon/zl_fabu_normal.png',
        active: '../../../icon/zl_fabu_selected.png'
      },
      iconm:{
        normal: '../../../icon/zl_news_normal.png',
        active: '../../../icon/zl_news_selected.png'
      },
      iconn:{
        normal: '../../../icon/zl_me_normal.png',
        active: '../../../icon/zl_me_selected.png'
      }
    }
  },
  methods:{
    
  },
  components:{
    
   
  }
}
</script>
<style scoped>
  .van-tabbar-item__icon img{
    height:25px;
    margin-bottom:0;
  }
 .van-tabbar-item__icon{
   position: relative;
    font-size: 15px !important;
 }
 .van-tabbar-item{
   font-size:15px;
 }
 span{
   margin-bottom:5px;
 }
</style>