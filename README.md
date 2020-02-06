# api-exemple
node api exemple


## Como utilizar

- Baixe o projeto para o diretorio desejado
- acesse o diretorio raiz do projeto
- rode o comando "npm install" para instalar as dependencias
- rode o comando "node server" para subir o servidor

## Rotas:

POST: http://localhost:3001/api/user/files.

Body: {
"filename" :"<NOME DO ARQUIVO .CSV DESEJADO",
"name":"<NOME DESEJADO PARA USUARIO",
"cep": "<CEP DE ENDEREÇO VALIDO>",
"date":"<DATA DO DIA>"
}
  
  ### Resposta esperada:
  200:
  {
  "response": {
    "message": "usuario criado",
    "result": {
      "filename": [
        "test.csv"
      ],
      "_id": "5e3c376e4e84c91c43179615",
      "name": "tester123",
      "adress": {
        "district": "",
        "street": "",
        "state": "PR"
      },
      "__v": 0
    }
  }
}

500 (se ja possuir um arquivo para o usuario):
{
  "message": "Já existe um arquivo com este nome"
}

201( quando salvar outro filname.csv)
{
  "usuario": "usuario atualizado "
}

---------------
------------------------
  
GET :  http://localhost:3001/api/user
querystring{
 name: "<NOME DO USUARIO CRIADO>"
}
  
  
  RESPONSE:
  200 - 
  {
  "ok": [
    {
      "filename": [
        "test.csv",
        "test1.csv"
      ],
      "_id": "5e3c376e4e84c91c43179615",
      "name": "tester123",
      "adress": {
        "district": "",
        "street": "",
        "state": "PR"
      },
      "__v": 0
    }
  ]
}

200 (caso nao exista usuario) 
{
  "ok": []
}


# Notas:

Foi pedido para enviar um arquivo csv real, porém senti alguma dificuldade e precisaria de mais tempo para pesquisar e aprender sobre esse assunto. Então fiz um modelo ficticio para salvar um nome de arquivo, salvando num banco de dados na nuvem.
  
  
