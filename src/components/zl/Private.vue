<template>
  <div>
    <mt-header title="">
      <a href="javascript:history.go(-1)" style="
      text-decoration: none;" slot="left">&lt;</a>
    </mt-header>
    <!-- 消息展示 -->
    <div></div>
    <mt-tabbar>
      <!-- 图片 -->
      <div class="page-actionsheet">
        <div class="page-actionsheet-wrapper">
          <mt-button class="btnPrivate" @click.native="sheetVisible = true" size="large">
            <img class="imgPrivate" src="../../assets/message/photo.png" alt="">
          </mt-button>
        </div>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      </div>
      <!-- 表情 -->
      <div class="page-actionsheet">
        <div class="page-actionsheet-wrapper">
          <mt-button class="btnPrivate" size="large">
            <img class="imgPrivate" src="../../assets/message/expression.png" alt="">
          </mt-button>
        </div>
      </div>
      <!-- 发送消息 -->
      <div>
        <input class="inputPrivate" id="sendTxt" v-model="code" @keyup="getInputValue" type="text">
      </div>
      <div>
        <mt-button v-if="!isOk" id="sendBtn" class="send" size="large">发送</mt-button>
        <mt-button v-if="isOk" id="sendBtn" class="send1" size="large">发送</mt-button>
      </div>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      //点击弹出数据
      sheetVisible: false,
      actions: [],
      isOk:false,
      code:"",
    }
  },
  props:{//声明接收父元素数据
  },
  handlePrivateClose:{},
  methods:{
    takePhoto() {
      console.log('taking photo');
    },
    openAlbum() {
      console.log('opening album');
    },
    getInputValue(){
      this.code.length >= 1 ? this.isOk = true :this.isOk = false;
    },
  },
 mounted() {
    this.actions = [{
      name: '拍照',
      method: this.takePhoto
    }, {
      name: '从相册中选择',
      method: this.openAlbum
    }];
  }
}
</script>
<style scoped>
  .mint-header{
    background-color: #fff !important;
    font-size: 15px !important;
    color: #fa866e;
    height:63px;
    border-bottom: 1px solid #dedede;
  }
  .mint-header-title{
    padding-top: 17px !important;
    padding-bottom: 17px !important;
  }
  .page-actionsheet{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .mint-tabbar{
    background-color: #ffffff;
  }
  .btnPrivate{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 5px;
  }
  .imgPrivate{
    width:30px;
    height:30px;
    /* border-radius: 50%; */
  }
  .inputPrivate{
    width: 194px;
    height: 24px;
    border-radius: 10px;
    margin-left: 5px;
    margin-top: 10px;
    border: 3px solid #c6c6c6;
    padding-left: 6px;
    font: 15px "微软雅黑";
  }
  .inputPrivate:focus{
    /* border: none; */
    outline: 0;
    /* border: 3px solid #fa866e ; */
    /* border: 3px solid #fa866e; */
    padding-left: 6px;
    /* font: 15px "微软雅黑"; */
  }
  .send{
    height: 30px;
    margin-left: 5px;
    margin-top: 10px;
  }
  .send1{
    height: 30px;
    margin-left: 5px;
    margin-top: 10px;
    background: #fa866e;
    color: #fff;
  }
</style>
