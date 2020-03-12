//prototype
function Mahasiswa(nama,energi){
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return this.makan;
}
Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return this.main;
}

let mhs1 = new Mahasiswa('Idam',10)
mhs1.makan(3)
console.log(mhs1)