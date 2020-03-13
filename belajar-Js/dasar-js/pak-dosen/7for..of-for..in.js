// // For..of

// // Array

// const mhs = ['Idam', 'Prima', 'Dody'];

// // pake for biasa
// for(let i=0; i<mhs.length; i++){
//     console.log(mhs[i])
// }

// //pake forEach
// mhs.forEach(m => console.log(m));

// //pake for..of
// for(m of mhs){
//     console.log(m)
// }

// //String
// let nama = 'Masidam'

// //for..of
// for(n of nama){
//     console.log(n)
// }

// Memakai index di for..of

const mhs = ['Idam', 'Prima', 'Dody'];

// kalo pake forEach
mhs.forEach((m,i)=>{
    console.log(`${m} adalah mahasiswa ke ${i +1}`)
})

// kalo pake for..of harus pake method entries()
for(m of mhs.entries()){
    console.log(m)
}