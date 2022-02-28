import dotenv from 'dotenv'
import Application from './app'

dotenv.config()
const app = new Application()
app.run(Number(process.env.APP_PORT))
