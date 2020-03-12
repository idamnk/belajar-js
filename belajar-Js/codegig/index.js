const express    = require('express');
const exphbs     = require('express-handlebars');
const bodyParser = require('body-parser');
const path       = require('path');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mariadb'
  });

const app        = express();

app.get('/', (req,res) => res.send('INDEX'));

const PORT       = process.env.PORT || 5000;

app.listen(PORT, console.log(`berjalan di port ${PORT}`));
