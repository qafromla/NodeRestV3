const express = require ('express')
const { json, urlencoded } = require ('body-parser')
const config = require ('./config')
const cors = require ('cors')
 
const  connect  = require ('./utils/db')
 
const itemRouter = require('./resources/item/item.router');


const app = express();




app.disable('x-powered-by');


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/api/item', itemRouter);

// ==============
// Examples
// ============
// const router = express.Router();
//app.use('/api', router);

// const routesExample = [

//   'get /cat',
//   'get /cat/:id',
//   'post /cat',
//   'put /cat/:id',
//   'delete /cat/:id'
// ]


// router.route('/cat')
//   .get()
//   .post()


// router.route('/cat/:id')
//   .get()
//   .put()
//   .delete()




// ==============
// End Examples
// ============



 
async function start() {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = start;