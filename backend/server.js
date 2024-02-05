
const app = require('./app/app.js');
const logger = require('./middleware/logger.js');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port,async()=>{
  logger.info(`App started on port: ${port}`)
      console.log("App started on: " + port)
    })
