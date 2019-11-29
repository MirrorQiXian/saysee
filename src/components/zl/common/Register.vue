<template>
     <div class="app-login">
        <div class="app">
               <p>分享美好生活</p>
                  <div class="app-input">
                       <input class="input1" type="text" placeholder="用户名" v-model="uname">
                  </div>
                  <div>
                        <input type="text" placeholder="手机号" v-model="tel">
                  </div>
                  <div>
                        <input type="password" placeholder="设置6~12位密码" v-model="upwd">
                  </div>
                  <div>
                        <button @click="reg">立即注册</button>
                 </div>
          </div>
   </div>
</template>
<script>
export default {
             data(){
                 return{
                     uname:"",
                     tel:"",
                     upwd:"",
                    
                 }
             },
             methods:{
                   reg(){
                     //创建正则表达式验证  
                     var preg=/^[1][3-8][0-9]{9}$/;
                     var reg=/^[a-z0-9]{6,12}$/i;
                     //获取用户名 手机号  密码  
                      var u=this.uname;
                     var t=this.tel;
                     var p=this.upwd;
                     
                   console.log(u+"_"+p+"_"+t);
                    //验证用户名  
                    if(!reg.test(u)){
                        this.$messagebox("消息","用户名格式不正确");
                        return;
                    }
                    
                   //验证密码
                    if(!reg.test(p)){
                       this.$messagebox("消息","密码格式不正确");
                        return;
                    }
                    //验证手机号
                    if(!preg.test(t)){
                        this.$messagebox("消息","手机格式不正确");
                        return;
                    }
                    //发送axios发送注册请求
                   var url="user/reg";
                   var obj={uname:u,upwd:p,tel:t,pic:'tou.png'};
                     this.axios.get(url,{params:obj})
                        .then(res=>{
                         if(res.data.code==1){
                            this.$toast(`${res.data.msg}`);                
                           this.$router.push("/login");
                        }else{
                             this.$toast(`注册失败: ${res.data.msg}`);
                         }
                      })
                   }
             }

}
</script>
<style scoped>
img{
    width:35%;
    border-radius: 50%;
}
.input1{
    margin-top:8%;
}

.app{
    width:70%;
    height:35%;
    background:rgba(230, 228, 228, 0.8);
    opacity: 0.9;
    margin: 0 auto;
    border-radius:5%;
    margin-top: 21%;
}
.app-login::before{
 			content:"";
 		    background-image:url(../../../assets/img/L2.jpg);
    		opacity:0.6;
 			z-index:-1;
 			background-size:100%;
 			width:100%; 
 			height:100%; 
 			position:absolute;
            top:0px;
 			left:0px;
 			border-radius:40px;
 		}
.app-login{
    padding-top: 0px;
    padding-bottom: 0px;
    overflow-x: hidden;
    width: 100%;
    height: 846px;
    text-align: center;
    }
    .app{

     z-index: 1000;   
    }
.app-input{
    margin-top: 8%;
      
}
input{
    outline: none;
    text-align: center;
    border-radius: 8px;
    border: none;
    width: 60%;
    padding:2%;
    margin-bottom:6%;
    font-size:15px;
}

button{
    width: 42%;
    height: 37px;
    border-radius: 24px;
    border: none;
    font-size: 16px;
    margin-bottom: 12%;
    background-color: #e6d699;
    margin-top: 8%;
}
p{
    text-align: center;
     font-size:20px;
     padding-top:10%;
}
</style>

