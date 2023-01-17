const express = require('express')
const PORT = process.env.PORT || 8081
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/login', (req, res) => {
    console.log(path.join(__dirname, 'login.html'));
    res.sendFile(path.join(__dirname, 'login.html'))
})
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => console.log(`http://192.168.100.31:${PORT}`))