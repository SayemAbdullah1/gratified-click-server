const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

//middleWare
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('gratified click server is running')
})

app.listen(port, ()=>{
    console.log(`gratified click server is running on ${port}`)
})