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

module.exports = router;