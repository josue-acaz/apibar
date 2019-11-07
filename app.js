var express = require("express");
var app = express();
require('dotenv/config');

app.use(express.static("public"));

/**
 * @api {get} /signin Singin
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Logado!"
 *    }
 *
 */
app.get("/signin", function(req, res){
    res.json({status: "Você está logado!"});
})

/**
 * @api {post} /signup Signup
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de cadastro efetuado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Cadastrado!"
 *    }
 *
 */
app.post("/signup", function(req, res) {
    res.json({status: "Cadastrado!"});
});
     
app.listen(3000, function() {
    console.log("Api up and running!");
    console.log(process.env.APP_NAME);
});