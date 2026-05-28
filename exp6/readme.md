### experiment 6
**Develop the application which takes name and email data from HTML form index.
html after submission and sends the data in the form of object
from client side to Node.js server using Ajax.**

### Execution Steps

1. **Install Express:**
   Ensure the `express` dependency is installed:
   ```bash
   npm install express
   ```

2. **Verify package.json Configuration:**
   Ensure `"type": "module"` is configured in `package.json` to allow ES imports:
   ```json
   {
     "type": "module",
     "dependencies": {
       "express": "^5.2.1"
     }
   }
   ```

3. **Run the Server:**
   Start the Node.js server:
   ```bash
   node server.js
   ```

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

5. **Submit Data:**
   * Enter a Name and Email in the form.
   * Click **Submit**.
   * An alert box will display the server's response confirming the data was successfully received via Ajax.
   * Check your terminal/console where `node server.js` is running to verify that the received object has been printed.

