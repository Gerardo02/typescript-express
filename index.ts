import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/ping', (_, res) => {
    res.send('connected')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
