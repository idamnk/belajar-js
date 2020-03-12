class Mahasiswa{
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return this.energi
    }
    main(jam){
        this.energi -= jam;
        return this.energi
    }
}

let mhs1 = new Mahasiswa('Idam',10);
mhs1.makan(3)
console.log(mhs1)