const express = require('express');
const axios = require('axios');
const app = express();
const Port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', __dirname + '/views');

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products'); // Replace with your API endpoint
    const data = response.data;
    res.render('index', { data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});