import express from 'express'
import expressReactVeiws from 'express-react-views'
import path from 'path'

const PORT = process.env.PORT || 3200

const app = express()
app.set('views', path.resolve('src/views'))
app.set('view engine', 'jsx')
app.engine('jsx', expressReactVeiws.createEngine())

app.get('/', (req, res) => {
  res.render('Lab1', { studentName: 'Олег Марчук', variant: '19' })
})

app.listen(PORT, () =>
  console.log(
    '\x1b[32m',
    'Server is running on',
    '\x1b[37m',
    `http://localhost:${PORT}`
  )
)
