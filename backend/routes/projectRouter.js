const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({
        "foo": "bar",
    })
})

router.get('/hello', (req,res) => {
    res.json({
        "Hello": "World",
    })
})

module.exports = router;