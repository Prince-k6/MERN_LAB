### Experiment 8
**Demonstrate Express JS routing mechanism by developing two routes: User and Admin route. User route returns some user details and Admin route returns some admin details.**

## Execution Steps:

1. **Install Express:**
   Ensure the `express` dependency is installed:
   ```bash
   npm install express
   ```

2. **Run the Server:**
   In the terminal, run the application:
   ```bash
   node route.js
   ```
   It will output: `Routing server listening on port 3000 at http://localhost:3000`

3. **Verify User Route:**
   Open your browser and navigate to:
   [http://localhost:3000/user](http://localhost:3000/user)
   * **Expected Output:**
     ```json
     { "role": "User", "name": "John Doe", "status": "Active" }
     ```

4. **Verify Admin Route:**
   Open your browser and navigate to:
   [http://localhost:3000/admin](http://localhost:3000/admin)
   * **Expected Output:**
     ```json
     { "role": "Admin", "name": "Super User", "privileges": ["read", "write", "delete"] }
     ```

