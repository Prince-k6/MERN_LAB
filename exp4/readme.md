### Experiment 4

4a. Read the data of a student containing (USN, name, sem, year_of_admission)
from node js and store it in the mongoDB.

4b. For a partial name given in node js, search all the
names from MongoDb student documents created in Question 4a.

## Execution Steps

1. **Start MongoDB Service:**
   Ensure that the MongoDB server is up and running on your local machine (default port: `27017`).
   ```bash
   # If using Homebrew on macOS
   brew services start mongodb-community
   ```

2. **Navigate to the Experiment Directory:**
   ```bash
   cd exp4
   ```

3. **Install MongoDB Driver:**
   Ensure the `mongodb` package is installed:
   ```bash
   npm install mongodb
   ```

4. **Verify package.json Configuration:**
   Make sure `"type": "module"` is specified in your `package.json` to allow ES imports:
   ```json
   {
     "type": "module",
     "dependencies": {
       "mongodb": "^7.2.0"
     }
   }
   ```

5. **Run the Script:**
   Execute the JavaScript file using Node.js:
   ```bash
   node db_scripts.js
   ```

6. **Verify the Results in the Console:**
   The output should look similar to:
   ```text
   connected successfully to the database
   student inserted successfully
   Name starting with Pri found: [
     {
       _id: new ObjectId('6a1882092924c80e0b0964a6'),
       usn: '1by24ai116',
       name: 'Prince kumar',
       sem: 4,
       year_of_adm: 2024
     }
   ]
   ```

7. **(Optional) Verify via MongoDB Shell:**
   You can log in to MongoDB to inspect the data:
   ```bash
   mongosh
   use college
   db.students.find().pretty()
   ```

