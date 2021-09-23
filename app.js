const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const fs = require('fs');
var id = 0;

const port = 5000;
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/', urlencodedParser, function (req, res) {
    let data = fs.readFileSync(__dirname + '/public/itens.json')
    obj = JSON.parse(data); //transforma o conteudo do arquivo em objeto
    obj.lista.push({id: id, item:req.body.item}); //insere o novo item que veio do formulario
    json = JSON.stringify(obj); //transforma o objeto em json de volta
    fs.writeFileSync(__dirname + '/public/itens.json', json); //sobrescreve o json antigo
    id+=1;
    
    res.sendFile(__dirname + '/public/index.html');
 })

app.listen(port);

//por enquanto só pega o que vem do formulário e adiciona no arquivo json