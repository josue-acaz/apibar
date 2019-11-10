const { Router } = require('express');

const indexRoute = new Router();

/**
 * @api {get} / Home
 * @apiGroup Sistema
 *
 * @apiSuccess {String} title Mensagem de boas vindas
 * @apiSuccess {String} version Versão da API
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "title": "Bem vindo à apibar!",
 *      "version": "1.0.0"
 *    }
 *
 */
indexRoute.get('/', (req, res) => {
  res.status(200).send({
    title: 'Bem vindo à apibar!',
    version: '1.0.0',
  });
});

export default indexRoute;
