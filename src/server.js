const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/users', async (req, res) => {
  console.log('Received form data:', req.body);
  res.json({ message: 'Form data received successfully' });
});

app.get('/api/get_data', async (req, res) => {
  const data = { serverData: 'Data from the server' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
