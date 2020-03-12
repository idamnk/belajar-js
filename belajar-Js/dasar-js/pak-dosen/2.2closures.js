////untuk membuat function factory 1
// function init(){
//     return function tampilNama(nama){
//         console.log(`Nama saya ${nama}`)
//     }
// }

// let panggilNama = init()
// panggilNama('Idam')


////untuk membuat function factory 2
// function tampilWaktu(waktu){
//     return function (nama){
//         console.log(`selamat ${waktu} ${nama}`)
//     }
// }

// let selamatPagi= tampilWaktu('pagi');
// selamatPagi('idam')

//private method
let add = (function(){
    counter = 0;
    return function(){
        return ++counter;
    }
})()

console.log(add())
console.log(add())
console.log(add())