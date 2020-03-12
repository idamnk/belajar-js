const hasil = (a,b,callback) =>{
    setTimeout(()=>{
         callback(a+b)
    },1000)
}
hasil(10,5,(hasil1)=>{
    hasil(hasil1,5,(hasil2)=>{
        hasil(hasil2,10,hasil3 =>{
            hasil(hasil3,10,hasil4=>{
                hasil(hasil4,10,console.log);
            });
        });
    });
}); // 50
hasil(11,5,console.log); // 16

const jumlah = async (a,b) =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           if(a+b > 160){
               rej("jumlah error")
           }else{
               res(a+b)
           }
        }
        ,800)
    })
}

jumlah(10,20)
    .then(e=>jumlah(e,20))
    .then(e=>jumlah(e,15))
    .then(e=>jumlah(e,15))
    .then(e=>jumlah(e,15))
    .then(e=>console.log(e)) 
    .catch(err=>console.log(err))
    // 95


