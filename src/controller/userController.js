const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': '305cfc5482b59eac47b314eb7d7dbe9be584eed4'
};
let err;
async function validaUsuario(body) {
    const response = await User.find({ name: body.name });

    if (response.length > 0) {
        //POSSUI USUARIO NO BANCO

        // concatenar o array
        let newdata = response[0].filename;

        newdata.forEach(async(element) => {
            if (element == body.filename) {
                console.log('IGUALL', element, body.filename)
                err = 'Já existe um arquivo com este nome'

            } else err = undefined;
        });
        console.log('ERRO TRATAR', err);

        if (!err) {

            console.log('NPODE')
                //ADICIONA ELEMENTO NOVO NO ARRAY
            newdata.push(body.filename);
            //ATUALIZA NO BANCO
            await User.findOneAndUpdate({ name: body.name }, { filename: newdata })
            return true;

        }
        return true;
    } else {
        // NAO EXISTE USUARIO
        return false;
    }
}


module.exports = {

    async worker(req, res) {
        let usuarioExistente = await validaUsuario(req.body);
        if (err) {
            return res.status(500).json({ message: err })
        }

        if (!usuarioExistente) {
            //CRIA NOVO USUARIO

            //ENDERECO DO BODY POST
            let endereco = req.body.cep;
            // CHAMADA PARA API DO VIA CEP
            let endViaCep = await axios.get(`https://viacep.com.br/ws/${endereco}/json/`);
            // PEGANDO O OBJETO RETORNO
            endViaCep = endViaCep.data;

            let adress = {
                district: endViaCep.bairro,
                street: endViaCep.logradouro,
                state: endViaCep.uf
            }

            let user = {
                filename: [req.body.filename],
                name: req.body.name,
                data: req.body.data,
                adress: adress,
            }
            console.log(user);

            //const callback = await Callback.create(req.body);
            const result = await User.create(user);
            res.json({
                response: {
                    message: 'usuario criado',
                    result

                }
            });


        } else {
            res.status(201).json({ usuario: 'usuario atualizado ' })
        }






    },

    async getUser(req, res) {
        const name = req.query.name;
        const response = await User.find({ name });
        res.send({ ok: response })
    }


}