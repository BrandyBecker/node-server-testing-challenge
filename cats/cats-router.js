const router = require('express').Router();
const Cats = require('./cats-model.js')

router.get('/', (req,res) =>{
    Cats.find()
    .then(cats=>{
        res.json(cats)
    })
    .catch(err=>{
        res.send(err)
    })
})

router.delete('/:id', (req, res) => {
    Cats.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: "The breed has been deleted."
        });
      } else {
        res.status(404).json({
          message: "The breed could not be found."
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Error deleting the breed."
      });
    });
});

module.exports = router;