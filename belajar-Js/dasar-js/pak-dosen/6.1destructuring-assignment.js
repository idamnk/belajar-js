// // Destructuring assignment

// // Destructuring Array
// const arr = ['Idam', 'Nur ', 'Kholis'];

// const [depan, tengah, akhir] = arr;
// console.log(tengah);

// // skipping item
// const [depan, ,akhir] = arr;
// console.log(akhir);

// // swap item
// let a = 3;
// let b = 5;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // Return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b)

// // Rest parameter
// let [a, ...values] = [3, 4, 4, 7, 9, 10];
// console.log(a);
// console.log(values);

// // Destructuring object
// let obj = {
//     nama : 'idam',
//     umur : 23,
//     email : 'idam@email.com'
// }

// let {nama, umur, email} = obj;
// console.log(email);

// // Assignment tanpa deklarasi object
// ({nama, umur, email} = {
//     nama : 'idam',
//     umur : 23,
//     email : 'idam@email.com'
// })

// console.log(umur);

// // Assign ke variabel baru
// let obj = {
//     nama : 'idam',
//     umur : 23,
//     email : 'idam@email.com'
// }

// let {nama : n, umur : u, email : e} = obj;
// console.log(u);
// console.log(n);

// // Memberikan deafult value
// let obj = {
//     nama : 'idam',
//     umur : 23,
// }

// let {nama, umur, email = 'idam@email.com' } = obj;
// console.log(email);

// // Memberikan nilai default + assign ke variabel baru
// let obj = {
//     nama : 'idam',
//     umur : 23,
// }

// let {nama: n, umur: u, email: e = 'idam@email.com' } = obj;
// console.log(e);

// // Rest parameter di objnya
// let obj = {
//     nama : 'idam',
//     umur : 23,
//     email : 'idam@emial.com'
// }

// let {nama, ...values} = obj;
// console.log(nama);
// console.log(values)

// Mengambil field pada object, setelah dikirim sebagai parameter di function
let obj = {
    id : 12,
    nama : 'idam',
    umur : 23,
    email : 'idam@emial.com'
}

function getThisId({id, nama}){
    return id;
}
console.log(getThisId(obj))