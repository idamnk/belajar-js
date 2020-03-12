const a = 5
const b = 11

if (a>5 || b>10){
    console.log('a is more than 5 and b is more than 10')
}


const c = 6
const d = 11

if (c>5 && d>10){
    console.log('c is more than 5 and b is more than 10')
}

//ternary operator

const e = 9
const color = e > 10 ? 'red' : 'blue'
// console.log(value)

//switch
switch (color){
    case 'red' :
        console.log('color is red')
        break
    case 'blue' :
        console.log('color is blue')
        break
    default :
    console.log('coloris not red or blue')
}
    