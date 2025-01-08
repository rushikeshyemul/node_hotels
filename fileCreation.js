var fs = require("fs");
var os = require("os");

// Get the user info
let user = os.userInfo();

fs.appendFile(
  "Demo.txt",
  `Hello ${user.username}, how are you today!\n`, // template literals or Template String
  () => {
    console.log("File is created and data is appended successfully!");
  }
);
