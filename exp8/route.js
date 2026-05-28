import express from 'express';

const app = express();

// User Route
app.get('/user', (req, res) => {
    res.json({ role: "User", name: "John Doe", status: "Active" });
});

// Admin Route
app.get('/admin', (req, res) => {
    res.json({ role: "Admin", name: "Super User", privileges: ["read", "write", "delete"] });
});

app.listen(3000, () => {
    console.log('Routing server listening on port 3000 at http://localhost:3000');
});
