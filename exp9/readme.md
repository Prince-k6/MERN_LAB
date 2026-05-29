### Experiment 9
**Develop a React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user.**

## Execution Steps:

1. **Navigate to the Experiment Directory:**
   ```bash
   cd exp9
   ```

2. **Scaffold React App using Vite (done):**
   ```bash
   npx create-vite search-app --template react or
   npx create-react-app search-app
   ```

3. **Navigate to search-app and Install Dependencies (done):**
   ```bash
   cd search-app
   npm install
   ```
 
4. **Verify the Source Files:**
   * logic is in App.js
   * The styling is defined in [src/App.css](file:///Users/princekumar/Desktop/MERN-LAB/exp9/search-app/src/App.css) and [src/index.css](file:///Users/princekumar/Desktop/MERN-LAB/exp9/search-app/src/index.css).
   * The React components logic is in [src/App.jsx](file:///Users/princekumar/Desktop/MERN-LAB/exp9/search-app/src/App.jsx).

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   * It will start the server, typically on: `http://localhost:5173`

6. **Test the Application:**
   * Open your browser and navigate to `http://localhost:5173`.
   * Type in the input field (e.g. `ap` or `go`) to see the list dynamically filter with matching substrings highlighted in real-time.
   * Use the `✕` button next to the input to clear the search query.
