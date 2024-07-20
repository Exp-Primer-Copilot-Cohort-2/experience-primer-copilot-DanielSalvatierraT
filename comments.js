// Create web server with Express.js
// Then create an API for comments
// 1. GET /api/comments => return all comments
// 2. POST /api/comments => create new comment
// 3. PUT /api/comments/:id => update comment with id
// 4. DELETE /api/comments/:id => delete comment with id

const express = require('express');
const app = express();

app.use(express.json());

let comments = [
    { id: 1, author: 'John', content: 'Comment 1' },
    { id: 2, author: 'Jane', content: 'Comment 2' },
    { id: 3, author: 'Mary', content: 'Comment 3' }
];

// 1. GET /api/comments => return all comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// 2. POST /api/comments => create new comment
app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
