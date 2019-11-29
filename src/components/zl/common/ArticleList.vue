<template>
  <div class="product_app">
    <!--添加一个商品 start-->
     <div class="goods-item" v-for="(item,i) of lists" :key="i" @click="details(item.po_id,item.po_uid,item.po_name,item.po_photo)"> 
      <!--商品图片-->
      <img :src="`http://127.0.0.1:3000/${item.po_url}`"  /> 
      <h4>{{item.po_title}}</h4>
      <!-- 头像 -->
      <div class="user"> 
          <div class="userr"> 
            <img class="userimg" :src="`http://127.0.0.1:3000/${item.po_photo}`" alt="">  
          </div> 
          <span class="name">{{item.po_name}}</span>  
        </div> 
     </div> 
     <div class="jz"> 
      <mt-button size="large" @click="loadMore">
        <mt-spinner :size=25 type="fading-circle" color="#d0d0d0"></mt-spinner>
      </mt-button>
     </div> 
  </div>
</template>
<script>
import Details from "./Details.vue"
//功能一：当组件创建成功获取第一页数据
export default {
  created(){
    this.loadMore();
  },
  data(){
    return{
       lists:[],
       pno:0
    }
  }, 
  methods:{
    details(po_id,po_uid,po_name,po_photo){
      //console.log(po_id);
      //this.bus.$emit("transId",po_id);
      this.$router.push({name:"Details",params:{po_id:po_id,po_uid:po_uid,po_name:po_name,po_photo:po_photo}});
    },
  //无限加载函数
    loadMore(){
      //功能：获取服务器商品列表
      //1.创建变量url保存请求路径
      var url="/cart/article"
      //2.自增页码
      this.pno++;
      //3.创建参数对象
      var obj={pno:this.pno}
      //4.发送ajax请求
      this.axios.get(url,{params:obj}).then(res=>{
        console.log(res);
        //保存服务器返回数据
        //将赋值改成拼接
        for(var i = 0 ;i < res.data.rows.length;i++){
        }
        this.lists=this.lists.concat(res.data.rows);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
}

</script>
<style scoped>
  /*1.最外层父元素，弹性布局*/
  .product_app{
    display:flex; /*弹性布局*/
    flex-wrap:wrap; /*子元素换行*/
    justify-content:space-between;
    padding:6px;
    padding-top:90px;
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
    font-size: 15px;
  }
  .articleul{
    list-style:none;
  }
  .jz{
    margin:0 auto;
  }
  .mint-button{
    background-color:#fff;
    border:solid 0 #fff;
  }
  h4{
    padding-left:5px;
  }
  .user{
    padding-left:5px;
  }
</style>
