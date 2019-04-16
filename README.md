# Getting Started

```
docker-compose build
docker-compose up
open http://localhost:3000/
```

# TODO

- Analytics for form conversions
  - Google Analtics, or backend intergration for data warehouse?
- Referral system with `?ref=` query string
  - Email address or opaque ref UUID? Should ref support arbitrary sources?
  - Pass ref in form submission to backend
  - Create normalized `members` and `refs` tables to more easily query relations
- Deployment and CI
- Prettier for automated code styling
- Tests! Jest or AVA for frontend, node-tap for backend
- Test coverage reporting
- Actually write some CSS to style the frontend
- Database migrations to add amount, currency, payment type
- Experiment with other frameworks
  - [Micro](https://github.com/zeit/micro) instead of [Express](https://expressjs.com/)?
  - [Sequelize](http://docs.sequelizejs.com/) instead of [`pg`](https://www.npmjs.com/package/pg) and [`db-migrate`](https://www.npmjs.com/package/db-migrate)?
