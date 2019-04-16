/* add support for uuid_generate_v4 function */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE payments(
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  email text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  created_at timestamp DEFAULT now()
);
