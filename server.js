const express = require('express')
const PORT = process.env.PORT || 8080
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'))
})
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(PORT, () => console.log(`http://192.168.100.31:${PORT}`))