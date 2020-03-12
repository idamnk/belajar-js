//contoh arrow function
let idam = (nama) => {
    return `hallo ${nama} ganteng`;
}
console.log(idam('Idam'))

//contoh lebih rungkas
let madi = nama => `haloo ${nama} Gantengs`
console.log(madi('Idam'))

//coba aja
let mahasiswa = ['Idam nk','madi kn','Lord idam']
// let jumlahHuruf = mahasiswa.map(nama => {
//     return nama.length;
// })
// console.log(jumlahHuruf)

let jumlahHuruf = mahasiswa.map(nama => ({nama,jmlHuruf:nama.length }))
console.table(jumlahHuruf)