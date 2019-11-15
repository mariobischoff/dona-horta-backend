import app from './app'
require('dotenv').config()

app.listen(process.env.API_PORT, () => console.log(`server up at http://localhost:${process.env.API_PORT}`))