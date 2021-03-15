import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('Lab1', { studentName: 'Олег Марчук', variant: '19' })
})

export default router
