const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = 8000;
app.use(bodyparser.json());
// ENDPOINTS
// GET - URL, REQ & RES
app.get('/', (req, res) => {
    res.end('Hello world');
})
app.get('/:name', (req, res) => {
    res.end(`Hello ${req.params.name}`);
});
app.post('/login', (req, res) => {
    const body = req.body;
    const username = body.username;
    const pass = body.pass;

    if(username === 'aryan' && pass === 123) {
        res.end('Login success');
    } else {

        res.end('Login failed');
    }
})
app.listen(PORT, () => console.log(`Application started at port ${PORT}`)); // localhost:8000