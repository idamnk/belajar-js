// const nama = 'Idam Nur Kholis';
// const umur = 23;

// function coba (string, ...values){
//     // let result = ''
//     // string.forEach((telo, i)=> {
//     //     result += `${telo}${values[i] || ''}`
//     // });
//     // return result;

//     // atau menggunakan high order function lebih ringkas
//     return string.reduce((result,str,i)=> `${result}${str}${values[i] || ''}`,'')
// }

// let str = coba`Nama saya ${nama} umur saya ${umur}`
// console.log(str)

// contoh penerapan
//Highlight
const nama = 'Idam Nur Kholis';
const umur = 23;

function coba (string, ...values){
    return string.reduce((result,str,i)=> `${result}${str}<span class="hl">${values[i] || ''}</span>`,'')
}

let str = coba`Nama saya ${nama} umur saya ${umur}`
document.body.innerHTML = str;