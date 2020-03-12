//creation phase pada global context

console.log(nama)
var nama = 'Idam' // undefined

console.log(telo)
let telo = 'kaspo'//refferenceError mengacu temporal dead zone begitu juga dengan const
//nama var = undefined
//function nama = fn()
//hoisting
//window
//this = window


//execution phase
let nama = 'idam'
let umur = 23

function sayHello(){
    return `Hello ${nama}`;
}

console.log(sayHello())
//untuk melihat alur eksekusi buka http://pythontutor.com/javascript.html