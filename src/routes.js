// SERVIDOR ESXPRESS
const express = require('express');
// INSTANCIA DE ROTAS DO EXPRESS PARA UTILIZAÇÃO DOS METODOS HTTP
const routes = express.Router();
//CONTROLLER DE USUARIO
const userFile = require('./controller/userController');

routes.post('/user/files', userFile.worker);
routes.get('/user', userFile.getUser);


module.exports = routes;