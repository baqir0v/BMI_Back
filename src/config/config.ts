import * as path from "path"
import * as dotenv from "dotenv"

const dotenvPath = path.join(__dirname, "..", "..", ".env")
dotenv.config({ path: dotenvPath })

const port = Number(process.env.DB_PORT)
const host = process.env.DB_HOST
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME

export default {
    port,
    host,
    username,
    password,
    database,
}