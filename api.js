// index.js
const express = require('express');
const app = express();
const visiteur = process.env.visiteur || 'Anonyme';

app.get('/', (req, res) => {
  res.send('It is the stagging development:all good!');
});

app.get('/api', (req, res) => {​

  re.send('It is another API');​

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
