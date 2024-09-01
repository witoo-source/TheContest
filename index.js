import express from 'express'
import { QuestionModel } from './questionModel.js'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://192.168.0.21:3000",
        methods: ["GET", "POST"]
    }
})


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(express.json())



const questionModel = new QuestionModel()
var selectedQuestion;

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('User disconnected to socket.io')
    })

    socket.on('rfrq', (data) => {
        selectedQuestion = questionModel.getRandomQuestion()
        io.emit('srq', selectedQuestion)
    })

    socket.on('qs1', (data) => {
        io.emit('qs1', data)
    })

    socket.on('qs2', (data) => {
        io.emit('qs2', data)
    })

    socket.on('qs3', (data) => {
        io.emit('qs3', data)
    })

    socket.on('qs4', (data) => {
        io.emit('qs4', data)
    })

    socket.on('crt', (data) => {
        io.emit('crt', selectedQuestion)
    })
})

app.get('/send', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/get', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'get.html'))
})

const PORT = 3000

server.listen(PORT, () => {
    console.log('Listening on => 3000')
})