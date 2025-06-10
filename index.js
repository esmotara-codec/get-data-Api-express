const express = require('express');
const app = express();
const port = 5000 ;

app.get('/' , (req, res) => {
    res.send('My Phone information coming soon again');
})

app.listen(port , () => {
    console.log(`My Phone Server is running on port : ${port}`)
})