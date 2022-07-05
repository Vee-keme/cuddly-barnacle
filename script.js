// "use strict";

// const userDetails = {
//   name: "Velia",
//   password: "12341234",
// };

// const userLog = function () {
//   const checkUserPassword = function () {
//     let passWord = prompt("Enter password: ");
//     if (passWord === userDetails.password) {
//       alert(`Welcome ${userDetails.name}`);
//     } else {
//       passWord = prompt(`Retry Password: `);
//       while (passWord !== userDetails.password) {
//         passWord = prompt(`Retry Password: `);
//       }
//       alert(`Welcome ${userDetails.name}`);
//     }
//   };

//   let userName = prompt("Enter Username: ");
//   if (userName === userDetails.name) {
//     checkUserPassword();
//   } else if (userName !== userDetails.name) {
//     userName = prompt(`Retry Username: `);
//     while (userName !== userDetails.name) {
//       userName = prompt(`Retry Username: `);
//     }
//     checkUserPassword();
//   }
// };
// userLog();
const userDetails = {
  "@velia": {
    name: "velia",
    age: 22,
    password: "asdfwfaw",
  },
};

function displayUserDetails() {
  let username = prompt(`Enter Username: `);
  // checkUsername(username);
  while (checkUsername(username) == false) {
    username = prompt(`REenter username: `);
  }

  let password = prompt(`Enter password: `);
  // checkPassword(password);
  while (checkPassword(password) == false) {
    password = prompt(`REenter password: `);
  }
}
displayUserDetails();
alert(`WELCOME USER`);

function checkUsername(username) {
  if (username == null) {
    return false;
  }

  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}

function checkPassword(password) {
  if (password == null) {
    return false;
  }
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
