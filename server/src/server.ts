import express from 'express';
import routes from './routes';

const app = express();

// Faz a conversão do request body para um objeto do JS
app.use(express.json());
app.use(routes);

app.listen(3333);

