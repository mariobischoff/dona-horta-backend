import app from './app'
require('dotenv').config()
import connection from './dbConnection'

const db = new connection()
db.start()

app.listen(process.env.API_PORT, () => console.log(`server up at http://localhost:${process.env.API_PORT}`))