const data=require("./public/mock/index.json")
module.exports={
  lintOnSave:false,
  devServer:{
    before(app){
      app.get("/api/list",(req,res)=>{
        res.json({
          errCode:0,
          list:data
        })
      })
    }
  }
}