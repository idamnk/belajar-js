// function persegi(s){
//     this.luas =`luas dari persegi ${s*s}`;
//     this.keliling = `keliling dari persegi ${s*4}`;
// }
// let kotak1 = new persegi(5);
// console.log(kotak1.luas);
// console.log(kotak1.keliling);

class Persegi {
    constructor(s){
        this.luas = `luas persegi ${s*s}`;
        this.keliling = `keliling persegi ${4*s}`
    }
}
let p1 = new Persegi(31)
console.log(p1.luas)
console.log(p1.keliling)