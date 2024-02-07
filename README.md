# NodeJS Express Server Template

## Application Features Integrated into the Template

basic Architecture

dotenv (environment variable import)

eslint (Airbnb configuration)

swagger (API documentation)

joi (validation schema + validation middleware)

winston + winston-daily-rotate-file (logging / logger)

coredattamapper

corecontroller

centralization of errors

controller wrapper

database connection (PSQL connection pooling)

## Installation

```bash
npm install
```

## Fichier .env

Copy the .env.example file and rename it to .env

Replace the values of the environment variables with your own values

## Examples files

These files serve as templates.

Use files starting with `example.*` and replace the `example` with the values you want to use.

 Additionally, replace the placeholder values `example` within the files with your specific values.

## Launch the Server

```bash
npm run dev
```

## <span style="color:red"> ⚠️  WARNING ! </span>

The Core `Controller` and `Datamapper` are designed to utilize `advanced SQL`, incorporating `functions`.

Ensure that the `SQL` statements used in these components align with the advanced functionalities and required operations.

Adjust the `SQL queries` within these files accordingly to meet the specific needs of your application.

**Example of function:**

```SQL
CREATE FUNCTION create_example("data" json) RETURNS example AS $$

  INSERT INTO "example"
  (
    "name",
    "number",
  ) VALUES (
    data->>'name',
    (data->>'number')::int
  ) RETURNING *

$$ LANGUAGE sql STRICT;
```
