require("dotenv").config();
const token =
  "postgres://lftinrsd:8xWOylw4vIeJwOvr034JxmQwBD-V-g5A@fanny.db.elephantsql.com/lftinrsd";
const pg = require("pg");
const creds = new pg.Client(token);

module.exports = creds;
