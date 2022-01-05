// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.sendFile('./sample.html')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));

// click here for login
app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname })
})

//after login
app.post('/second', (req, res) => {
    res.sendFile('/second.html', { root: __dirname })
})

//login Form 
app.get('/login', (req, res) => {
    res.sendFile('/login.html', { root: __dirname })
})

// Insert Login Code Here
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.sendFile('/second.html', { root: __dirname })
    res.send(`Username: ${username} Password: ${password}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})