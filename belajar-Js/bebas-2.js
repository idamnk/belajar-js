let a = ''
for(let b=0; b<=5; b++){
    if (b%2===0){
        for (let c =0; c<=5; c++){
            a += ' #'
        }
        a += '\n'
    }
    else 
        for (let c =0; c<=5; c++){
            a += '# '
    }
    a += '\n'
}
console.log(a)