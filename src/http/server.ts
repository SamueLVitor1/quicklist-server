import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

const port = 8081;
const app = express()
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => console.log(`Servidor em execução na porta ${port}`));