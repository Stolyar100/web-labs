import express from 'express'

const PORT = process.env.PORT || 3200
const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Hello World!!!</h1>")
})

app.listen(PORT, () => console.log('\x1b[32m', `Server is running on port ${PORT}...`))
