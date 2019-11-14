const express = require('express')
// const helmet = require('helmet')
// const cors = require('cors')

const catModel = require('../cats/cats-model.js')
const catsRouter = require('../cats/cats-router.js')
// const authRouter = require('../auth/auth-router.js')

const server = express()

// server.use(helmet())
server.use(express.json())
// server.use(cors())

server.use('/api/cats', catsRouter)
// server.use('/api/auth', authRouter)

server.get('/', (req,res)=>{
    res.status(200).json({ message: 'Your API is UP! 👍'})
})

server.get('/cats', (req,res)=> {
    catModel.getAll()
    .then(cats => {
        res.status(200).json(cats);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = server;