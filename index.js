const fs = require('fs');

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
fs.rmdir('dir1', (err) => {
    if (err) console.log(err);
    else console.log('dir1 removed.')
})

// Rename file.txt to new-file.txt

