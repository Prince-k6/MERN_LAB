### Experiment 7
**Develop an authentication mechanism with email_id and password using HTML and Express JS (POST method).**

## Execution Steps

1. **Install Express:**
   Ensure the `express` dependency is installed:
   ```bash
   npm install express
   ```

2. **Run the Server:**
   In the terminal, run the application:
   ```bash
   node auth7.js
   ```
   It will output: `Server running on port 5000 at http://localhost:5000`

3. **Access the Application:**
   Open Google Chrome or any browser and navigate to:
   [http://localhost:5000](http://localhost:5000)

4. **Test Authentication:**
   * Fill the form with the credentials:
     * **Email:** `admin@test.com`
     * **Password:** `1234`
   * Click the **Login** button.
   * Observe the output: `"Authentication Successful"`.

5. **Test Invalid Credentials:**
   * Try entering any other email or password and submit.
   * Observe the output: `"Invalid Credentials"`.

