import app from './app'
const port = 3000
require('dotenv').config()

app.listen(process.env.API_PORT, () => console.log(`server up at http://localhost:${port}`))