import express from 'express'
import diarieRouter from './routes/diaries'
const app = express()
app.use(express.json())

app.get('/ping', (_req, res) => {
  console.log('someone pinged')
  res.send('PONG2!!!!!!')
})

app.use('/api/diaries', diarieRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
