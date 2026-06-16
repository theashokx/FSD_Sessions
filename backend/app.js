// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   let url = req.url;
//   if (url == "/about") {
//     res.writeHead(200, { "Content-Type": "text/html" });
// res.write("CVR college of Engineering");
// res.end("Hello this is the about us page");
// fs.readFile("about.html", "utf-8", (err, data) => {
//   if (err) {
//     res.writeHead(500);
//     res.end("Internal Server Error");
//     return;
//   }

//   console.log("Successful");
//   res.end(data);
// });
//   fs.readFile("about.html", "utf-8", (err, data) => {
//     res.end(data);
//   });
//   // res.end(data);
//   // res.end();
// } else if (url == "/user") {
// res.writeHeader(200, { "Content-type": "text/html" });
// res.write("CVR Faculty<br>");
// res.end("Hello this is the USER page");
// let readStream = fs.createReadStream("sample.txt", "utf-8");
// readStream.on("data", (chunk) => {
//   res.write(chunk);
// });
// readStream.on("end", () => {
//   res.end();
// });
//     let readStream = fs.createReadStream("about.html", "utf-8");
//     readStream.pipe(res);
//   } else {
//     res.writeHeader(200, { "Content-type": "text/html" });
//     res.write("Root api endpoint");
//     res.end("<h1> Welcome to CVR collge of Engineering</h1>");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running in the port 3000");
// });
