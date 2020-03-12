const index = (req,res) => {
    res.render('home')
}

const hasil = (req,res) => {
    console.log(req.body);
    let hasil  = 0;
    let data   = req.body;
    let angka1 = parseInt(data.angka1);
    let angka2 = parseInt(data.angka2);
    if (data.tambah === ''){
        hasil += angka1+angka2;
    }else if (data.kurang === ''){
        hasil += angka1-angka2;
    }else if (data.kali === ''){
        hasil += angka1*angka2;
    }else if (data.bagi === ''){
        hasil += angka1/angka2;
    }
    res.render('hasil',{hasil});
}

module.exports = {
    index,
    hasil
}