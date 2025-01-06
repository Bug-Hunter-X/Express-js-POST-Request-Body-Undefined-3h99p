const express = require('express');
const app = express();
app.use(express.json()); // Ensure this is BEFORE the route handler
app.post('/user', (req, res) => {
  console.log(req.body); // req.body should now contain the request data
  res.send('Success!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});