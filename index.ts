import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/ping', (_, res) => {
    res.send('connected')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
