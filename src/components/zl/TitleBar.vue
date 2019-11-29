<template>
  <div class="page-head">
  <!--顶部导航子组件-->
    <!--左侧文字-->
    <!--右侧两张图片-->
    <span class="bt">{{msgTitle}}</span>
    <div class="msg-title">
        <router-link to="/FirendList">
          <img :src="msgImg" style="width:25px; margin-right:15px;" alt="">
        </router-link>
    </div>
  </div>
</template>
<script>
export default {
  //声明接收父组件的数据
  props:{
    //左侧标题文字
    msgTitle:{default:""},
    msgImg:{default:""},//图片2
  }
}
</script>
<style scoped>
  /*最外层父元素弹性布局*/
  .page-head{
    display:flex;/*弹性布局*/
    position:fixed;/*固定定位*/
    z-index:999;/*浮上方*/
    width:100%;
    padding-top: 17px;
    /*子元素两端对齐*/
    justify-content:space-between;
    /*垂直居中*/
    align-items:center;
    background-color:#fff;
    /* height:40px; */
    color:#fa866e;
    font-size:15px;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 17px;
  }
  .page-head .bt{
    margin-left: 45%;
  }
  /*调整元素高度*/
  .msg-title{
    display:flex;
    align-items:center;
  }
</style>