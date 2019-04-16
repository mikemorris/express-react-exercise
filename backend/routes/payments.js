const Router = require('express-promise-router');
const db = require('../db')

const router = new Router();

router.post('/', async (req, res) => {
  // TODO: validate POST data, use proper logger with log level info
  console.log(req.body);

  try {
    const pg_res = await db.query('INSERT INTO payments(email, first_name, last_name) VALUES($1, $2, $3) RETURNING *', [req.body.email, req.body.first_name, req.body.last_name]);
    res.status(200).send(pg_res.rows[0]);
  } catch(err) {
    // TODO: use proper logger with log level error
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
