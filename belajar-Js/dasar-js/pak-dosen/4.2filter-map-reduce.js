const data = [-1,2,4,-5,7,3,-2,6,8,9]

//pake for biasa
// const newArr = []
// for(let a=0; a<=data.length; a++){
//     if(data[a] >= 3){
//         newArr.push(data[a])
//     }
// }
// console.log(newArr)

//pake filter tampilkan semua data yang lebih dari 3
// const newData = data.filter(a => a>=3)
// console.log(newData)

//pake map kalikan semua data dengan 2
// const newData = data.map(a => a*2)
// console.log(newData)

//pake reduce untuk menjumlahkan semua data 
// (5)+-1+2+4+-5+7+3+-2+6+8+9
// const newData = data.reduce((accumulator,curentValue) => //reduce memiliki 2 arguement
//     accumulator+curentValue, 5 /* 5 adalah nilai awal,jika tidak ditulis maka deafult 0 */)
// console.log(newData)

//method chaining
const newData = data.filter(a => a >5) // 7,6,8,9
    .map(a=> a*2) // 14,12,16,18
    .reduce((a,c)=> a+c); //60
console.log(newData)
