const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env["PORT"] || 3000;

app.use(cors())
app.use(express.json());

app.post('/', (req, res) => {
  // TODO: validate POST data

  console.log(req.body);

  res.sendStatus(200);
});

app.listen(port);
