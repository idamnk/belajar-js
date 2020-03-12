class Lingkaran {
    // phi = 21
    constructor(phi,jari2){
        this.phi = phi
        this.jari2 = jari2**2
        this.hasil = this.phi * this.jari2
    }
    tampilNilai(){
        console.log(`hasi dari phi * ${this.jari2} =  ${this.hasil}
        `
)
    }
}
let lingkaran1 = new Lingkaran(Math.PI,14).tampilNilai()

let lingkaran2 = new Lingkaran(Math.PI,7)
lingkaran2.tampilNilai()

