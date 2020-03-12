const agendas = [
    {
        no: 1,
        gawean: 'nyapu',
        ket: true
    },
    {
        no: 2,
        gawean: 'ngepel',
        ket: true
    },
    {
        no: 3,
        gawean: 'turu',
        ket: false
    }   
]

// for (let a=0; a<agenda.length; a++){
//     console.log(agenda[a].gawean)
// }

// for (gawe of agendas){
//     console.log(gawe.ket)
// }

//forEach, map, filter :
agendas.forEach(gawe => {
    console.log(gawe.gawean)
});