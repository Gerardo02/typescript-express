import express from 'express'
import dotenv from 'dotenv'
import authRouter from './src/routes/auth'
import protectedRouter from './src/routes/protected'

dotenv.config()

const app = express()
const PORT = 3030

app.use(express.json())
app.use('/auth', authRouter)
app.use('/api', protectedRouter)

app.get('/ping', (_, res) => {
    res.send('connected')
})

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})
