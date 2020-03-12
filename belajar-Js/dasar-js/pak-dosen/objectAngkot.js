function Angkot(sopir,trayek,penumpang,kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = (namaPenumpang)=>{
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = (namaPenumpang,bayar)=>{
        if (this.penumpang.length === 0){
            console.log('Angkot masih kosong!');
            return false;
        }
        for(let i=0; i<this.penumpang.length; i++){
            if(this.penumpang[i] === namaPenumpang){
                this.penumpang[i] = undefined
                this.kas += bayar;
                return this.penumpang;
            }    
        }

    }
}

let angkot1 = new Angkot ('Idam',['playen','paliyan',],[],0)
angkot1.penumpangNaik('Heru') 
angkot1.penumpangNaik('Madi')
angkot1.penumpangTurun('Madi',2000)
angkot1.penumpangTurun('Heru',3000)
angkot1.penumpangNaik('Putri')
console.log(angkot1)