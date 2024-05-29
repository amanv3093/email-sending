const express = require('express');
const routers = require("./Routes/routers");
const {mailRoute} = routers;

const app = express();

const PORT = 10000;
// app.use(express.urlencoded())
app.use(express.json())

app.use(mailRoute)

app.use('/*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Path not found'
    })
})

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))