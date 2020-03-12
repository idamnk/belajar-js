// let nama =()=> {
//     return nama
// }
// nama()

// // let telo = {
// //     idam : 'ganteng',
// //     nur : 'banget',
// //     kholis : 'hehe',
// //     lord : ['idam','nur','kholis','test','tist',nama,[1,2,3,4]],
// //     prince : true,
// //     princes : 23
// // }
// let telo = ['idam','nur','kholis','test','tist',nama,[1,2,3,4]]

// telo[7] = 'babi'
// telo.pop()
// telo.push('fuck')
// telo.unshift('hehe','muah','ahhh')
// // telo.shift() 
// telo.splice(1,3,'zzz','hehel')
// // for (let a=0; a<telo.length; a++){
// //     console.log(telo[a])
// // }
// let telo2 = telo.slice(3,5)

// console.log(telo.join(' '))
// console.log(telo2)
let data = [2,32,51,2,4,2,5]
// data.forEach(function(a,b){
//     console.log(`${a} berada di index ${b}`)
// })
data.sort(function(c,d){
    return c-d
});
console.log(data)