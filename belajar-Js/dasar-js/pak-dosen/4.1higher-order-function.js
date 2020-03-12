//higher order function
function kerjakanTugas /*higher order*/ (matakuliah,selesai/*callback*/){ 
    console.log(`kerjakan mata kuliah ${matakuliah}`)
    selesai()
}
function selesai (){
    alert('selesai')
}

