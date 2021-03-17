const express = require ('express');

const app = express()
 
app.get('/', function (req, res) {
  res.send('Holas mundo')
})

app.get('/Usuarios', function (req, res) {
    res.send('Usuario: Jose Holas mundo')
  })
 
app.post('/', function (req, res) {
    res.send('POST del pacht/')
  })


app.listen(4000)