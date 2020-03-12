// let list = [2,43,97,78,34]
// let larger = (a,b) => {
//     return a > b ? a : b;
// }
// let maximum = (telo) => {
//     let max = 0
//     for(let num of telo){
//         max = larger(max,num)
//     }
//     return max
// }
// console.log(list)
// console.log(maximum(list))

let list = [2,43,97,78,34];
const showMax = (a,b)=>{
    if(a>b){
        return a
    }else{
        return b
    }
}

const max = (list) =>{
    let out = 0;
    for(let i of list){
        out = showMax()
    }
}