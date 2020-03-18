// Rest parameter
// untuk menampung sisa parameter

// // contoh
// function angka(a,...sisa) {
//     console.log(`${a} dan ${sisa}`)
// }
// angka(1,2,3,4,5,6,7)

// // contoh
// function jumlahkanArr(...angka) {
//     // let a = 0;
//     // for(j of angka){
//     //     a += j
//     // }
//     // return a;
//     // atau juga bisa pake high order function reduce
//     return angka.reduce((a,b) => a+b)
// }
// console.log(jumlahkanArr(1,2,3,4,5))

// // Untuk Array destructuring
// const kelompok = ['Idam','Iman','Eko','Dona']
// const [ketua, ...anggota] = kelompok;
// console.log(`Ketua: ${ketua}, Anggota: ${anggota}`)

// // Untuk object distructuring
// const project = {
//     pm: 'Idam',
//     fe: 'Iman',
//     be: 'Eko',
//     p: 'Dona'
// }

// const {pm, ...team} = project;
// console.log(team)

// Filtering
function filterTipe(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterTipe('string',6,8,true,'telo',10,false,'pendem','kacang'))