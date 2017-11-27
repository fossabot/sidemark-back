/**
 * Module dependencies.
 */
import * as dotenv from 'dotenv'
import { ConnectionOptions } from 'typeorm'

// Load environment variables
dotenv.config()

/**
 * Get .env value to put in the connection.
 */
const database = process.env.SQLITE_DB as string
const username = process.env.SQLITE_USER as string
const password = process.env.SQLITE_PWD as string
const storage = process.env.SQLITE_PATH as string
const host = process.env.MSSQL_HOST as string
const maxpool: number = Number(process.env.MSSQL_MAX_POOL)

/**
 * Parameter of SQLITE database connection.
 */
export const options: ConnectionOptions = {
  type: 'sqlite',
  database: './src/app/database.db',
  entities: [
    __dirname + '../models/*.ts'
  ],
  synchronize: true
}
