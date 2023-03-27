const express = require('express');
const app = express();
app.use(express.json());

app.listen(4020, () => console.log('server running on port 4020'));