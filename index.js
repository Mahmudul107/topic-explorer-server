const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// Middleware configuration
app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{
    res.send('Topic Explorer is available')
})

app.listen( port, () =>{
    console.log(`Topic Explorer is available on port ${port}`)
})