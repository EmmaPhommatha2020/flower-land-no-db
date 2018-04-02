// require in
const express = require('express');

const bodyParser = require('body-parser');

const method = require('./controllers/flowers_controller');

// app variable
const app = express();



// middle
app.use(bodyParser.json());




// endpoint
app.get('/api/flowers', method.read)

app.get('/api/favFlowers', method.readfavFlower)

app.post('/api/favFlowers', method.create)

app.put('/api/favFlowers/:id', method.update)

app.delete('/api/favFlowers/:id', method.delete)


// port
const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );