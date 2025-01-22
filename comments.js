// Create web server
const express = require('express');
const app = express();
app.use(express.json());
const comments = {};
let commentId = 0;
app.get('/comments', (req, res) => {
    res.send(comments);
});
app.post('/comments', (req, res) => {
    const { content } = req.body;
    comments[commentId] = { commentId, content };
    commentId++;
    res.status(201).send(comments[commentId - 1]);
});
app.listen(4001, () => {
    console.log('Comments service listening on 4001');
});