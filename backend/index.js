// const fs = require("fs/promises");

// console.log("Start");
// fs.writeFileSync("sample.txt", "Hello , CVR College this is Ashok ");
// console.log("Writing in the file completed");

// fs.writeFile("sample.txt", "Hello VNR this is Ashok", (err) => {
//   if (err) {
//     console.log("Error Occured" + err);
//     return;
//   }
//   console.log("Successfully wrote in the file ");
// });

// let data = fs.readFileSync("sample.txt", "utf-8");
// console.log(data);

// fs.readFile("sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error in the reading" + err);
//     return;
//   }
//   console.log(" Reading the file is done\n " + data);
// });

// fs.appendFileSync("sample.txt", "/n this is Shashi Kumar Goud", (err) => {
//   if (err) {
//     console.log("Error" + err);
//     return;
//   }
//   console.log("Data Appended sucessfully");
// });
// console.log("Data Appended to the File");

// fs.appendFileSync("sample.txt", "/n this is Shashi Kumar Goud");
// console.log("Data Appended to the File");

// async function saveData() {
//   let data = await fs.writeFile("abc.txt", "Hello this is abc file");
//   console.log(data);
//   console.log("Done");
// }
// saveData();

// async function readData() {
//   let data = await fs.readFile("abc.txt", "utf-8");
//   console.log(data);
//   console.log("Done reading the file");
// }
// readData();

// console.log("End");

// const fs = require("fs");
// let readStream = fs.createReadStream("sample.txt", "utf-8");
// let writeStream = fs.createWriteStream("output.txt");

console.log("Start");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
// readStream.on("end", () => {
//   console.log("Finished reading the file");
// });
// readStream.on("error", () => {
//   console.log("Error in the reading file");
// });

// let writeStream = fs.createWriteStream("output.txt");
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });
// console.log("Writing done in the output file");
const fs = require("fs");

// let readStream = fs.createReadStream("sample.txt", "utf-8");
// let writeStream = fs.createWriteStream("output.txt");
// readStream.pipe(writeStream);
// console.log("Successfully written in the file");

fs.unlink("abc.txt", (err) => {
  if (err) {
    console.log("Error");
    return;
  }
  console.log("Deleted the file");
});

console.log("End");
