import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../../dist/client')));

app.get(/(.*)/, (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/client/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
