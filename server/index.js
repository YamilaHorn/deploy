const ApiToDb = require('./src/handlers/ApiToDb')
const server = require("./src/server");
const { conn } = require('./src/db.js');
require('dotenv').config();
const { PORT } = process.env;

conn.sync({ force: true })
.then(() => {
server.listen(PORT, () => {
  console.log(`Server listening at`, process.env.PORT);
  ApiToDb()
})
})
.catch(error => console.error(error))

