const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/'));

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/api', (req, res) => {
  res.send( mockResponse );
});

app.get('/', (req, res) => {
  res.status(200).send('Default route');
});

app.listen( port, function(){
  console.log( 'App listening on port: ' + port );
});
