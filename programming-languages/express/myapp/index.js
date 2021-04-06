const express = require('express')
const app = express()
const port = 6985

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(port,() => {
    console.log(`App listening at http://localhost:6985`)
})