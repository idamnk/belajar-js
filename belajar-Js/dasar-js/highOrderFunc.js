//high order function
const telo = (num)=>{
    return num %2 === 0 
}

const nums = [1,2,3,4,5]
const number = nums.filter(telo)
console.log(number)