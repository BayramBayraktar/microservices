import express from 'express'
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello , this is user-services')
})

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})