const router = require('express').Router()

const Cats = require('../cats/cats-model.js')

// /register : register a breed of cat
router.post('/register', (req,res)=>{ 
    let cat = req.body

    Cats.add(cat)
    .then(saved=>{
        res.status(201).json(saved)
    })
    .catch(err =>{
        res.json(500).json(err)
    })
})

// /login : 