const express = require("express");
const app = express()
const mainRouter = require('./routes/index')

app.use(express.json())
app.use('/api/v1', mainRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

