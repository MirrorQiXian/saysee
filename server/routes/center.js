const express=require('express');
const pool=require('../pool.js');
var centerRouter=express.Router();
//个人页面信息(关注数量,粉丝数量,收藏数量,我发布的笔记)
centerRouter.get("/myinfo",(req,res)=>{
 //1:获取参数
 var uid=req.query.uid;
 console.log(uid);
 //获取关注数量
 var sql = "SELECT COUNT(1) gzsl FROM zl_pub WHERE pub_uid=?";
 //3:执行sql语句
 pool.query(sql,[uid],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
   //获取粉丝数量
   var sql1="SELECT COUNT(1) fssl FROM zl_pub WHERE pub_wuid=?";
   pool.query(sql1,[uid],(err,res1)=>{
		if(err)throw err;
      //查询我收藏的笔记的数量
      var sql2="SELECT count(1) scsl FROM zl_storgr WHERE sg_uid=? AND sg_flag='1'";
      pool.query(sql2,[uid],(err,res2)=>{
        if(err)throw err;
        res.send({code:1,msg:"我的信息查询成功",gzsl:result,fssl:res1,scsl:res2});
      })
   })
 })
});
centerRouter.get("/mybook",(req,res)=>{
  let uid = req.query.uid;
  let pid = req.query.pid;
  console.log(req.query)
var sql="SELECT P.po_uid,P.po_title,P.po_url,U.user_name,U.user_pic FROM zl_post AS P JOIN zl_user AS U ON P.po_uid = U.user_id WHERE U.user_id = ? AND P.po_id = ?;"
pool.query(sql,[uid,pid],(err,result)=>{
  //err 严重错误，程序停止
  if(err)throw err;
  if(result.length> 0){
    res.send({code:1,msg:"我的信息查询成功",gzsl:result});
  }else{
    res.send({code:2,msg:"暂未发表内容"})
  }
       
     })
})
//http://127.0.0.1:3000/center/myinfo?uid=1
module.exports=centerRouter;