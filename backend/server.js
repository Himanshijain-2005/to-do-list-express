const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine','hbs')
let tasks = ['Tasks List']
app.get('/', (req, res) => {
    let tasklist = tasks.map(t => `<li>${t}</li>`).join('\n')
    res.render('home',{tasklist})
})

app.post('/', (req, res) => {
    tasks.push(req.body.newtask)
    res.redirect('/')
})

app.listen(4444, (req, res) => {
    console.log("started")
})