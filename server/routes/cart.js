const express=require('express');
const pool=require('../pool.js');
var cartRouter=express.Router();

//文章列表
cartRouter.get("/article",(req,res)=>{
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  if(!pno){pno=1}
  if(!ps){ps=4}
  var id=req.query.po_id;
  var offset =(pno-1)*ps;
  ps = parseInt(ps);
  var sql1="SELECT po_id,po_uid,po_name,po_photo,po_url,po_title from zl_post WHERE po_id LIMIT ?,?"
  pool.query(sql1,[offset,ps],(err,result)=>{
  //查询成功回调函数 sql1
  if(err)throw err;
  //查询结果
  var data = result;
  //console.log(result);
  //8:在执行成功回调函数中创建第二条 
  var sql2 = "SELECT count(po_id) as c FROM zl_post";
  //9:查询记录总数
  pool.query(sql2,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/ps);
    res.send(
      {code:1,   //查询编码
        msg:"查询成功",//原因
        rows:data, //当前页内容
        pageCount:pageCount//总页
    })
  })
})
})
module.exports=cartRouter;


//1:接收请求 get /product
// server.get("/product",(req,res)=>{
//   //2:获取(脚手架发来)数据 pno pageSize
//   var pno = req.query.pno;
//   var ps = req.query.pageSize;
//   //3:设置数据默认值
//   if(!pno){pno=1}
//   if(!ps){ps=20}
//   //4:创建变量offset计算数据库第一参数
//   var offset = (pno-1)*ps;
//   //5:给pageSize造型整型
//   ps = parseInt(ps);
//   //6:创建sql1 查询当前页内容
//   var sql1 = "SELECT lid,price,lname,pic FROM xz_laptop LIMIT ?,?";
//   //7:发送sql1语句
//   pool.query(sql1,[offset,ps],
//    (err,result)=>{
//       //查询成功回调函数 sql1
//       if(err)throw err;
//       //查询结果
//       var data = result;
//       //console.log(result);
//      //8:在执行成功回调函数中创建第二条 
//      var sql2 = "SELECT count(lid) as c FROM xz_laptop";
//      //9:查询记录总数
//      pool.query(sql2,(err,result)=>{
//        if(err)throw err;
//        var pageCount = Math.ceil(result[0].c/ps);
//        res.send(
//          {code:1,   //查询编码
//            msg:"查询成功",//原因
//            rows:data, //当前页内容
//            pageCount:pageCount//总页
//          })
//      })
//      //10:将所有查询结果封装成
//   })
//  })
 

//  cartRouter.get("/article",(req,res)=>{
//   var sql="SELECT po_id,po_uid,po_name,po_photo,po_url,po_title from zl_post"
//   pool.query(sql,(err,result)=>{
//     if(err) throw err;
//     res.send({data:result});
//   })
// })