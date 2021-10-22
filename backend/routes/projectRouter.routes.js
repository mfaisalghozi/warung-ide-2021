const express = require('express')
const router = express.Router()

router.get('/projectRouter', (req,res) => {
    res.json({
        "foo": "bar",
    })
})

router.get('/projectRouter/hello', (req,res) => {
    res.json({
        "Hello": "World",
    })
})

module.exports = router;