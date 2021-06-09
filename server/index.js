const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const env = ( process.env.USE_LOCAL_CONFIG || process.env.NODE_ENV == 'local') 
    ? 'local' 
    : process.env.NODE_ENV || 'development';

require('dotenv').config({ path:  __dirname + '/config/' + 
    (env == 'production' ? '.prod.env' : env == 'development' ? '.dev.env' : '.local.env') })


/* Middleware */
const notFoundRequest = require('./middleware/404')


/* Routes */
const graphsRoutes = require('./routes/graphs')

/* Application initialization */
const app = express()

/* For access to public files */
app.use(express.static(path.join(__dirname, 'public')))

/* Parse incoming requests */
app.use(bodyParser.urlencoded({ extended: false })) // x-www-urlencoded
app.use(bodyParser.json()) // json

/* Use middleware */
app.use(cors())

/* Use Routes */
app.use('/api/graphs', graphsRoutes)

app.use(notFoundRequest)

const PORT = process.env.PORT || 3000

async function start() {
  try {
    
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useUnifiedTopology: true, 
      useNewUrlParser: true,
      useFindAndModify: false
    })

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })

  } catch (e) {
    console.log(e)
  }
}
start()
