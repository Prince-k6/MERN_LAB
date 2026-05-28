import fs from 'fs';

const filename = 'data.txt';

//1.create,update
fs.writeFileSync(filename, 'Hello this is initial text.\n');
console.log("1.File created\n");

//2.read
let content = fs.readFileSync(filename, 'utf8');
console.log("2.Read data : ", content, "\n");

//3.append 
fs.appendFileSync(filename, 'This is appended text\n');
console.log("3.File updated\n")

//4.read updated data
let updated = fs.readFileSync(filename, 'utf8');
console.log("4.Updated Data : ", updated, "\n");

//5.delete file
fs.unlinkSync(filename);
console.log("5.File deleted \n");
