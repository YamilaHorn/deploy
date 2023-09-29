const ApiToDb = require('./src/handlers/ApiToDb')
const server = require("./src/server");
const { conn } = require('./src/db.js');
require('dotenv').config();

conn.sync({ force: true })
.then(() => {
server.listen(process.env.PORT, () => {
  console.log(`Server listening at`, process.env.PORT);
  ApiToDb()
})
})
.catch(error => console.error(error))

