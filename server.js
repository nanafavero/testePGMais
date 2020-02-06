const express = require('express');
// BIBLIOTECA DO MONGODB
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// starting DB
mongoose.connect('mongodb+srv://root:root@apitestcluster-iynoc.mongodb.net/test?retryWrites=true&w=majority');
// CARREGA A MODEL
requireDir('./src/models');

app.use('/api', require('./src/routes'));
console.log(3001);
app.listen(3001);