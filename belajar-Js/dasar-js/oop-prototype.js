//constructor function
function Biodata (firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.dob       = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${firstName} ${lastName}`;
    // }
}
//prototype
Biodata.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Biodata.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
//instantiate object
const orang1 = new Biodata ('Idam','NK', 8-10-1996);
const orang2 = new Biodata ('irkham','hamid', 07-8-1987);
const orang3 = new Biodata ('puspit','putri', 8-8-1998);


// console.log(orang1)
// console.log(orang2.lastName)
// console.log(orang3.dob.getFullYear())

console.log(orang1.getBirthYear());
console.log(orang1)
