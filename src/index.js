require('dotenv')
require('express');
const app = require('./app')

const port = process.env.APP_PORT || 3000

app.listen(port, () => console.log(`app is running in port ${port}`))