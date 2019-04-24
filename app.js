// bring in express functionality
const express = require('express');

// declare instance of express called 'app'
const app = express();

// port that will be used later
const port = 3000;

// define what happens when a GET request is fired against the root of the application
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/posts', (req, res) => {
    const post = {
        title: "first post",
        body: "This is my post",
        author: "Pierce",
        createdAt: Date.now()
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(post);
});

// what port express is listening on for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// to run the server, navigate to the project folder blog-server and run 'node app.js'
