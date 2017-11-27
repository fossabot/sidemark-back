/**
 * Module dependencies.
 */
import { Server } from './server'
import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import { options } from './app/config/database'
// import * as dotenv from 'dotenv'

/**
 * Get port from environment and store in Express.
 */
const port: any = process.env.PORT
const server: Server = new Server(port)
try {
  server.start()
  console.log('Connection has been established successfully.')
} catch (_err) {
  console.log('Error on server start:', _err)
}
