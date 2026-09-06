
import * as http from 'http'
import { app } from './app.ts'

const server = http.createServer(app)

const userPort = process.env.USER_PORT

server.listen(userPort, () => console.log(`rodando na porta ${userPort}`))
