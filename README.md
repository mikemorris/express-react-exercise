# Getting Started

```
docker-compose build
docker-compose up
open http://localhost:3000/
```

# TODO

- Analytics for form conversions
  - Google Analtics to track interactions and click events?
  - Backend intergration to feed data warehouse?
  - [Prometheus](https://github.com/siimon/prom-client) or [StatsD](https://github.com/statsd/statsd) feeding Grafana dashboards for measuring server health metrics.
  - Form structure would likely need to shift a bit towards the server-side to support A/B testing of fields, but wouldn't necessarily need to render HTML on serve. Perhaps a service to return fields as JSON, ideally with sticky sessions to return a consistent experiene to a given user?
- Referral system with `?ref=` query string
  - Create normalized `members` table with unique email addresses, migrate `payments` table to use foreign keys of `members`
  - URL-encoded email address or opaque ref UUID? Should ref support arbitrary sources?
  - Pass ref in form submission to backend
  - Add `refs` table linking a (member or payment?) to a source (denormalized with a `type` column may be more flexible than foreign key relations here, depending on query efficiency needs)
- Deployment and CI
- Prettier for automated code styling
- Tests! Jest or AVA for frontend, node-tap for backend
  - Snapshot tests for React components
  - Unit tests with fixture stubs for `onSubmit` and `getPayments`
  - Unit tests with mocked Postgres for `POST /payments` and `GET /payments`
  - Some way to test migrations would be nice but could be _slow_
- Test coverage reporting
- Actually write some CSS to style the frontend
- Database migrations to add amount, currency, payment type
- Experiment with other frameworks
  - [Micro](https://github.com/zeit/micro) instead of [Express](https://expressjs.com/)?
  - [Sequelize](http://docs.sequelizejs.com/) instead of [`pg`](https://www.npmjs.com/package/pg) and [`db-migrate`](https://www.npmjs.com/package/db-migrate)?
