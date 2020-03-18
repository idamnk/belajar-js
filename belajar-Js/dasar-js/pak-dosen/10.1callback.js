// Callback

// // Synchronus callback
// function halo(nama){
//     alert(`Halooo ${nama}`);
// }

// function tampilNama(callback){
//     const nama = prompt('Masukan nama: ');
//     callback(nama);
// }

// tampilNama(halo);

// // Asynchronus callback
// function getDataMahasiswa(url, succes, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 succes(xhr.response);
//             }else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('mulai')
// getDataMahasiswa('/mahasiswa.json', result => {
//     console.log(result);
// },() =>{

// });
// console.log('selesai')

// Jquery
console.log('mulai')
$.ajax({
    url: 'data/mahasiswa.json',
    succes: (mhs) => {
        console.log(mhs);
    },
    error: e => {
        console.log(e.responeText);
    }
})

console.log('selesai')
