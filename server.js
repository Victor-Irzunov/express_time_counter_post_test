const path = require('path')
const express = require('express')

const app = express()

let counter = 0

app.use(express.json)                       //сервер должен принимать запрос к нему как  json строку

app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/hello', (req,res)=> res.json({message: 'hello'}))
app.get('/bye', (req, res) => res.json({ message: 'bye' }))

app.get('/counter', (req, res) => {
	counter += 1
	res.end(String(counter))
})

app.post('/counter', (req, res) => {
	counter = req.body.value                              //то что в пост (форма) передаете в боди (форму заполнил)

	res.end(String(counter))
})
app.get('/time', (req, res) => res.end(new Date().toLocaleDateString()))

app.listen(3000)