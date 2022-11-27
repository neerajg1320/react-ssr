// Since we are using webpack on both the client and server code, this 
// allows us to write the server code in the ES2015 style.

import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
