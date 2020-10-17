const express = require('express')
const morgan = require('morgan')



const app = express()

// register view engine
app.set('view engine' , 'ejs')


app.listen(3000)

app.use(express.static('public'))
app.use(morgan('tiny'))

app.get('/' , (req,res) => {
    res.render('index')
})

app.get('/about' , (req,res) => {
    res.render('about')
})

app.get('/blogs/create' , (req,res) => {
    res.render('create')
})


app.use((req,res) => {
    res.status(404).render('404')
})