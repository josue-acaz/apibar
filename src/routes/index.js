const { Router } = require('express');

const indexRoute = new Router();

indexRoute.get('/', (req, res) => {
  res.status(200).send({
    title: 'apibar',
    version: '1.0',
  });
});

export default indexRoute;
