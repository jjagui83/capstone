require("dotenv").config();
const token =
  "postgres://donffadg:R98AfsPlmzFCp0nfsayN3VLzkX_JxZf-@fanny.db.elephantsql.com/donffadg";
const pg = require("pg");
const creds = new pg.Client(token);

module.exports = creds;
