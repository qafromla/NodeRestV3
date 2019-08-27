const { Router } = require ('express')
// const controllers = require ('./item.controllers')

const controllers = (req, res ) => {

  res.send({message: 'hello'})

}

const router = Router()

// /api/item
router
  .route('/')
  .get(controllers)
  .post(controllers)

// /api/item/:id
router
  .route('/:id')
  .get(controllers)
  .put(controllers)
  .delete(controllers)

module.exports = router;
