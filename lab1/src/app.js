import express from 'express'
import expressReactVeiws from 'express-react-views'
import path from 'path'
import lab1 from './routes/lab1.js'

const PORT = process.env.PORT || 3200

const app = express()
app.set('views', path.resolve('src/views'))
app.set('view engine', 'jsx')
app.engine('jsx', expressReactVeiws.createEngine())
app.use('/lab1', lab1)

app.get('/', (req, res) => {
  res.sendFile(path.resolve('src/static/index.html'))
})

app.listen(PORT, () =>
  console.log(
    '\x1b[32m',
    'Server is running on',
    '\x1b[37m',
    `http://localhost:${PORT}`
  )
)
