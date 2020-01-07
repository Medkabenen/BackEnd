// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/medicab3.db3'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    }
  },


  production: {
    client: "pg",
    connection: process.env.DB_ENV,
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" }
  }

};
