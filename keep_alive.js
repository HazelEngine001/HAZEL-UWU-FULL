const express = require('express');
const app = express();

// Lắng nghe cổng 8080 (hoặc cổng môi trường)
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

// Bắt đầu server keep-alive
app.listen(port, () => {
  console.log(`Keep Alive server is running on http://localhost:${port}`);
});
