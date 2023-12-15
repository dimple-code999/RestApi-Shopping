const express = require('express');
const app = express();
const cors = require('cors');


const port =  3000;

app.use(express.json({ limit: process.env.PAYLOAD_SIZE_LIMIT }));
app.use(express.urlencoded({
  extended: true,
  limit: process.env.PAYLOAD_SIZE_LIMIT,
}));
app.use(cors())


// app.get('/shopping', (req, res) => {
//     res.json({message: "Helloooooo From Shopping...."})
// })

app.use('/', (req, res, next) => {
    res.json({message: "Helloooooo From Shopping...."})
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });