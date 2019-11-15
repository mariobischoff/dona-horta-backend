import app from './app'
require('dotenv').config()

app.listen(9090, () => console.log(`server up at http://localhost:${process.env.API_PORT}`))