const express       = require('express');
const app           = express(express);
const port          = 4000;
const bp            = require('body-parser')
const controller    = require('./controller')

app.use(bp.urlencoded({extended:false}));
app.set('view engine','jade');
app.get('/',controller.index);
app.post('/hasil', controller.hasil);

app.listen(port,() => {
    console.log(`Port berjalan di port ${port}`)
})