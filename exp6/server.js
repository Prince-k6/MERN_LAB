import express from 'express';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the current directory (which contains index.html)
app.use(express.static('.'));

app.post('/submit', (req, res) => {
    console.log("Received data : ", req.body);
    res.send(`Data Received Successfully via Ajax! Name: ${req.body.name}, Email: ${req.body.email}`);
});

app.listen(3000, () => {
    console.log("Server running at port 3000 on http://localhost:3000");
});