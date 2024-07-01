// const fs = require('fs');

// const data = fs.readFileSync('file.txt');
// console.log(data);
// console.log(data.toString());
// console.log(data + "");

// // Removing the old content and putting a new content altogether
// fs.writeFile('file.txt', "Best wishes for your future endeavours.\n", 'utf-8', (err) => {
//     console.log("File modified");
// });
// fs.appendFile('file.txt', 'Greetings, my name is Abhishek. I have completed my PhD from MIT.', 'utf-8', (err) => {
//     console.log("File has been appended.");
// })

// Create a directory using fs
// fs.mkdir('dir1', (err) => {
//     if (err) console.log(err);
//     else console.log("dir formed.");
// });

// Remove a directory using fs
// fs.rmdir('dir1', (err) => {
//     if (err) console.log(err);
//     else console.log('dir1 removed.')
// })

// Rename file.txt to new-file.txt
// fs.rename('file.txt', 'new-file.txt', (err) => {
//     if (err) console.log(err);
//     else console.log("File has been renamed.");
// })

// Get the path of a file

// const p = "/Users/abhishekshah/DemoNodeProject/file.txt";
const path = require('path');
const fs = require('fs');
// const dirName = path.dirname(p);
// const ext = path.extname(p);
// console.log(dirName);
// console.log(ext);

// Moving a file from one path to another path
// get the path of file
// get the path of dir
// copy the file from source to destination
const sourceFile = "/Users/abhishekshah/DemoNodeProject/new-file.txt";
const destination  = "/Users/abhishekshah/DemoNodeProject/file.txt";
fs.copyFile(sourceFile, destination, (err) => {
    if (err) console.log(err);
    else console.log('File has been copied');
})
