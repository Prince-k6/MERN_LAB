
## Experiment 1A    
### Objective
To write a Node.js program that creates a local HTTP server and reads the
request headers to extract and display cookies sent by the client
(browser).

### Background Theory
- Cookies are small pieces of data sent from a website and stored on the user's computer by the web browser.
- When the browser requests a page from the server, it sends these cookies back inside the HTTP Request Header. 
- In Node.js, the http module allows us to create a server and access these headers using the req.headers.cookie property 

### steps
1. Open your terminal or VS Code integrated terminal.
2. Ensure you are in the directory where checkCookies.js is saved.
3. Run the application using the command:
        Bash
        node checkCookies.js
4. Open your web browser and navigate to http://localhost:3000.
5. To test actually sending a cookie:
    * While on the localhost:3000 page, right-click and select Inspect to
    open Developer Tools.
    * Go to the Console tab.
    * Type the following command and press Enter: document.cookie =
    "studentName=JohnDoe; testCookie=123";
    * Refresh the page.
5. Expected Output
    • Initial Page Load: No cookies found in the request header.
    • After setting the cookie and refreshing: Success! Cookies from
    request: studentName=JohnDoe; testCookie=123    


## Experiment 1B

### Objective
To write a Node.js program that prints a car object's properties, deletes the
second property, and calculates the total number of properties (length)
remaining in the object.

### Background Theory
- In JavaScript, objects are collections of key-value pairs.
- Object properties can be accessed using dot notation (object.key) or bracket notation (object['key']).
- The delete operator removes a property from an object.
- The Object.keys() method returns an array of an object's property names, and its length gives the total number of properties.

### steps
1. Open your terminal or VS Code integrated terminal.
2. Ensure you are in the directory where carObject.js is saved.
3. Run the application using the command
    Bash
    node carObject.js
4. Expected Output
The terminal will display the exact flow of data manipulation:

        





