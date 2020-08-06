import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
// Faz a conversão do request body para um objeto do JS
app.use(express.json());
app.use(routes);

app.listen(3333);

