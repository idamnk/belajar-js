let penumpang = ['Idam',undefined,'Kholis','Puspita'];
let tambahPenumpang = function(namaPenumpang,penumpang){
    //jika angkot kosong
    if (penumpang.length === 0){
        //tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        //kembalikan isi array dan keluar dari function
        return penumpang;
    } else{
        //telusuri kursi dari awal
        for(let i=0; i<penumpang.length; i++){
            //jika ada kursi kosong
            if(penumpang[i] === undefined){
                //tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array keluar dari function
                return penumpang;
                
            }
            //jika sudah ada nama yang sama
            else if(penumpang[i] === namaPenumpang){
                //tampilakan pesan kesalahan
                console.log(`${namaPenumpang} nama sudah ada`)
                //kembalikan isi array dan keluar dari function
                return penumpang;
            }
            else if(i === penumpang.length -1){
                //tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array keluar dari function
                return penumpang;
            }
        }
    }
}
let hapusPenumpang = function(namaPenumpang,penumpang){
    if (penumpang.length === 0){
        console.log('angkot kosong');
        return penumpang;
    } else {
        for(let i=0; i<penumpang.length; i++){
           if (penumpang[i] === namaPenumpang){
               penumpang[i] = undefined;
               return penumpang;
           } else if(i === penumpang.length -1){
               console.log(`${namaPenumpang} tidak ada di angkot`)
               return penumpang;
           }
        }
    }
}
// tambahPenumpang('Idam', penumpang)
tambahPenumpang('Par',penumpang)
tambahPenumpang('Kar', penumpang)
hapusPenumpang('Par', penumpang)
tambahPenumpang('Telo', penumpang)
hapusPenumpang('Hehe', penumpang)
console.log(penumpang)