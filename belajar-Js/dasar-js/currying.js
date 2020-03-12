//currying
const nama = (namaDepan) => (namaTengah) => (namaBelakang) =>{
    return `${namaDepan} ${namaTengah} ${namaBelakang}`
}

console.log(nama('Idam')('Nur')('Kholis'))