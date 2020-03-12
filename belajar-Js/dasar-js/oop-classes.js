class Biodata {
    constructor(firstName,lastName,[...dob]){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.dob       = new Date(dob);
    }

getBirthYear(){
    return this.dob.getFullYear();
}
    
getfullName(){
    return `${firstName} ${lastName}`;
}
}

const orang1 = new Biodata ('idam','nur', [10,08,1996])

console.log(orang1)