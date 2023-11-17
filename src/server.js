const app = require('./app');
const pool = require('./db/connection');

const { PORT } = process.env;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);

  const result = pool.query('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});