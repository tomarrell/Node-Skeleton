const path = require('path');
const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(app.get('port'), () => {
  console.log(`Running Node application on port: ${app.get('port')}`);
});
