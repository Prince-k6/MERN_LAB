import express from 'express';
const app = express();

// Middleware to parse urlencoded form bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            Email: <input type="email" name="email_id" required><br>
            Password: <input type="password" name="password" required><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { email_id, password } = req.body;
    if (email_id === "admin@test.com" && password === "1234") {
        res.send("Authentication Successful");
    } else {
        res.send("Invalid Credentials");
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000 at http://localhost:5000");
});
