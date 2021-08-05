const parse = require('pg-connection-string').parse;
 const config = parse('postgresql://db:qz3k9ac8yvf7eez8@app-bebe175d-781b-47cb-8695-aa8af67a45a0-do-user-8673776-0.b.db.ondigitalocean.com:25060/db?sslmode=require');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'app-bebe175d-781b-47cb-8695-aa8af67a45a0-do-user-8673776-0.b.db.ondigitalocean.com',
        port: '25060',
        database: 'db',
        username: 'db',
        password: 'qz3k9ac8yvf7eez8',
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});