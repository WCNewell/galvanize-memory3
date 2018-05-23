module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:///galvanize-memory3'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}