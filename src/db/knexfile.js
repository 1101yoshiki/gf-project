require("dotenv").config();

module.exports = {
  development: {
  client: "pg",
  connection: {
    user: process.env.POSTGRES_USER || "user",
    database: process.env.POSTGRES_DB || "gf_project",
    password: process.env.PASSWORD
  },
  migrations: {
    directory: "./data/migrations",
  },
  seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" }, 
  },
  };
