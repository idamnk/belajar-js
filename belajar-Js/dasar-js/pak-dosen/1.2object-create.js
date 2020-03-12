//sedikit tentang Object.create()
const methodMhs = {
    makan : function(porsi){
        this.bb += porsi
    },
    tidur : function(jam){
        this.bb += jam*2
    }
}

function Mahasiswa(nama,bb){
    let mahasiswa = Object.create(methodMhs)
    mahasiswa.nama = nama;
    mahasiswa.bb = bb;

    return mahasiswa
}

let mhs1 = Mahasiswa('Idam',52)
mhs1.makan(2)
mhs1.tidur(8)
console.log(mhs1)