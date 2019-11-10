import express from 'express';

// Importar rotas
import indexRoute from './routes/index';

class App {
  constructor() {
    this.server = express();

    this.middlewares();

    // Carregar rotas
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  // Rotas
  routes() {
    this.server.use(indexRoute);
  }
}

export default new App().server;
