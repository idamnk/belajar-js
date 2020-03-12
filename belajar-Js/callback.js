function call(a,b,callback){
    setTimeout(()=>{
        callback(a*b)
    },12000)
}
call(3,3,(jml)=>console.log(jml))

