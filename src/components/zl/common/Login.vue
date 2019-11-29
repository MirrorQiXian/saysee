<template>
    <div class="app-login">
       <div class="app">
            <p>分享美好生活</p>
            <!--用户名输入框-->
            <div class="inputUp">
                <img class="img1" src="../../../assets/img/load.jpg" ><input class="inputName" type="text" placeholder="用户名" v-model="uname ">
            </div>
            <!--密码输入框-->
            <div class="inputDown">
            <img class="img1" src="../../../assets/img/2853886.jpg" ><input class="inputUpwd" type="password" placeholder="密码" v-model="upwd ">
            </div>
            <div class="app-rg">
                <div class="re-input"><input type="radio">忘记密码</div>
                <div class="re-router"><router-link to ="/Register"><span>立即注册</span></router-link></div>
            </div>
            <div class="hr"><hr></div>
            <div class="btn">
                <button class="btn" size="large" @click="login">登录</button>
            </div>
        </div>
</div>
        
</template>
<script>
export default {
    //1.保存二个数据 uname upwd
    data(){
        return{
             uname:"",
             upwd:"",
            
        }
    },
    //2:添加函数login 完成登录
   methods: {
    login(){ 
    //1:创建正则表达式 3~12
    var reg=/^[a-z0-9]{3,12}$/i;
    //获取用户输入 用户名/密码
    var u=this.uname;
    var p=this.upwd;
    //4: 验证用户名如果不匹配 提示框
    //验证密码如果不匹配 提示框
    if(!reg.test(u)){
    this.$messagebox("消息","用户名格式不正确");
    return;
    }
    if(!reg.test(p)){
    this.$messagebox("消息","用户密码不正确");
    return;
    }
    //5:发送ajax请求完成登录验证
    var url="user/login";
    var obj={uname:u,upwd:p};
    this.axios.get(url,{params:obj})
    .then(res=>{//成功回调
    if(res.data.code==1){
    //console.log(res.data.data[0].user_id,res.data.data[0].user_name);
    //1:跳转 /product 商品列表
    console.log(res.data);
    var uid=document.cookie = "uid="+res.data.data[0].user_id+"&&user_name="+res.data.data[0].user_name;
    this.$router.push("/Recomment");
    }else{
    this.$toast("用户名或密码有误")
    }
    })
    .catch(err=>{//失败回调
    console.log(err)
    })
    }
    },
}

</script>
<style scoped>
.re-router{
      margin-right: 17%;
}
.re-input{
    margin-left: 17%;
    font-size:15px;
}
 .app-rg{
    display: flex;
     justify-content:space-between;
 }
.hr{
    margin-top: 7%;
}
hr{
    border:0.5px solid #fff;
}
.app-login{
    padding-top: 0px;
    padding-bottom: 80%;
    overflow-x: hidden;
    width: 100%;
    height: 100%; 
    text-align: center;
}
.app-login::before{
 			content:"";
 		    background-image:url(../../../assets/img/L2.jpg);
    		opacity:0.7;
 			z-index:-1;
 			background-size:100%;
 			width:100%; 
 			height:100%; 
 			position:absolute;
            top:0px;
 			left:0px;
 			border-radius:40px;
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
p{
    text-align: center;
     margin-top:16%;
     font-size:20px;
     padding-top:10%;
}
.inputUp{
       margin-top:10%;
      margin-bottom:7%; 
      border-radius:8px;
       outline:none;

    
    }
.inputName{
    border-radius:5px;
    width:64%;
    padding:2%;
    padding-left:5px;
    border:none;
    text-align: center;
    font-size:15px;
    margin-top: 7%;
    margin-bottom: -7%;
}
.inputDown{
    margin-bottom:4%;
   
}
.inputUpwd{
     border-radius:5px;
     width:64%;
     padding:2%;
     padding-left:5px;
     border:none;
     text-align: center;
     font-size:15px; 
     margin-top: 7%;
    
}
.btn{
    margin-top: 3%;
}
button{
    width: 42%;
    height: 37px;
    border-radius: 24px;
    border: none;
    font-size: 16px;
    margin-bottom: 12%;
    background-color: #e6d699;
    }
.img1{
    width:5%;
    position: absolute;
    left: 29%;
    padding-top:6%;
} 
span{
    font-size:15px; 
     color:#130e01;
}
a{
     text-decoration:none;
}
</style>
