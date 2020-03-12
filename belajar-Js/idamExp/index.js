const express   = require('express');
const app       = express(express);
const port      = 5000;
const bp        = require('body-parser');
const controller= require('./controller')

app.use(bp.urlencoded({extended:false}));
app.set('view engine','jade');
app.get('/',controller.index);
app.post('/idam',controller.idam)

app.listen(port,()=>{
    console.log(`express jalan di port ${port}`)
})