require('dotenv').config();
const express = require ('express');
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'))
 
app.get('/', function (req, res) {
  res.send('Holas mundo')
})

app.get('/Usuarios', function (req, res) {
    res.send('Usuario: Jose Holas mundo')
  })
 
app.post('/', function (req, res) {
    res.send('POST del pacht/')
  })


app.listen(4000, ()=>{
  console.log(`Server Started-Port ${port}`);
});