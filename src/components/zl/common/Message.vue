<template>
  <div class="rootstyle">
    <!--左侧图片与标题子标题-->
    <div class="d1" >
        <div>
          <img :src="imgurl" class="imgstyle"/>
          <span class="title">{{title}}</span> <br>
          <span class="subtitle">{{subtitle}}</span>
          <!--发布时间-->
          <span class="sendtime"> {{sendtime}} </span>
        </div>

      
      <!-- 点赞 -->
      <div class="zan" > 
        <div @click="switchColor1">
            <img src="../../../assets/zan.png" v-show="downIcon1">
            <img src="../../../assets/zan_1.png" v-show="!downIcon1">
           
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{ //声明接收父元素数据
    imgurl:{default:""},//消息图片
    title:{default:""},//标题 
    subtitle:{default:""},//子标题 
    sendtime:{default:""}//时间
    
  },
  data(){
    return{
       downIcon1: true,
       isdz:false
    }
  },
  methods:{
  switchColor1(){
        this.downIcon1 = !this.downIcon1
        if(this.isdz==false){
          this.dzs+=1;
          this.isdz = !this.isdz;
        }else {
          this.dzs-=1;
          this.isdz = !this.isdz;
        }
    }
  }
}

</script>

<style scoped>
.rootstyle .d1{
  width:100%;
  display:flex;
  justify-content:space-between;
  margin-left:15px;

 
}
.imgstyle{
  width:35px;
  height:35px;
}
.title{
  color:#000;
  font-size:16px;
}
.subtitle{
  color:gray;
  font-size:14px;
}
.sendtime{
  color:gray;
  font-size:14px;  
}
.zan{
  font-size: 12px;
  color:#999;
  margin-top:25px;
  margin-right:15px;
}
.zan img{
  width: 20px;
  height:20px ;
}
.rootstyle {
  width: 100%;
}
</style>

