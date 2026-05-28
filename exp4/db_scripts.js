import { MongoClient } from 'mongodb';

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);  //created a new client so that it can perform the operations on DB  

async function run() {
    try {
        //1.Establish Database connection
        await client.connect();
        console.log("connected successfully to the database");

        //2.Select Database and collection
        const db = client.db('college');                //select the db 'college' 
        const students = db.collection('students');     //select the collection 'students'       

        //3.create and insert a student record (usn, name, sem, year_of_adm)
        const studentData = {
            usn: "1by24ai116",
            name: "Prince kumar",
            sem: 4,
            year_of_adm: 2024
        };
        await students.insertOne(studentData);         //insert into collection 
        console.log("student inserted successfully");

        //4.Search using Regex (Partial name);
        const partialName = "Pri";
        const result = await students.find({ name: { $regex: partialName, $options: 'i' } }).toArray();
        if (result && result.length > 0) {
            console.log(`Name starting with ${partialName} found:`, result);
        } else {
            console.log(`Name starting with ${partialName} not found`);
        }

    } catch (error) {
        console.log("Error occured : ", error);
    } finally {
        //close connection
        await client.close();
    }
}

//call the function
run();

