const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env["PORT"] || 3000;
const morgan = require("morgan");
const uuid_v4 = require('uuid/v4');

app.use(cors())

// Parse JSON POST payloads into req.body
app.use(express.json());

// Add uuid to request for future _distributed tracing_ potential!
app.use((req, res, next) => {
  req.id = uuid_v4();
  next();
});

// Define :id token for log string format
morgan.token('id', req => req.id);

// TODO: JSON GLOG format? Using Bunyan? Decouple req/res logging?
app.use(morgan(':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));

app.use('/payments', require("./routes/payments"));

app.listen(port);
