// // Destructuring
// function pkalkulasi(a, b) {
//     return [a+b, a-b, a*b, a/b]
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(3,5)
// console.log(bagi) /* kelemahanya variabel harus urut */

// // Destruction function return value
// function kalkulasi(a,b) {
//     return {
//         tambah : a+b,
//         kurang : a-b,
//         kali : a*b,
//         bagi : a/b
//     }
// }

// const {kurang, tambah, bagi, kali} = kalkulasi(4,6)
// console.log(kali)

// Destruction function arguments
const mhs = {
    nama : 'Idam Nur Kholis',
    umur : 23,
    kelas : 'SI03',
    nilai : {
        uts : 80,
        uas : 100
    }

}

function cetakMhs({nama, umur, kelas, nilai : {uts, uas}}) {
   return `Nama : ${nama}
           umur : ${umur}
           kelas : ${kelas}
           nilai uts: ${uts}
           nilai uas : ${uas}`
}

console.log(cetakMhs(mhs))