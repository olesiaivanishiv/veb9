const express = require('express');
const app = express();
const port = 5008; 

app.use(express.static('public'));

app.get('/math', (req, res) => {
  const A = Number(req.query.paramA);
  const B = Number(req.query.paramB);

  const result = 1/Math.sqrt(A)+Math.log(B, A);

  res.send(` ${result}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

