"use strict";

const userDetails = {
  name: "Velia",
  password: "12341234",
};

const userLog = function () {
  const checkUserPassword = function () {
    let passWord = prompt("Enter password: ");
    if (passWord === userDetails.password) {
      alert(`Welcome ${userDetails.name}`);
    } else {
      passWord = prompt(`Retry Password: `);
      while (passWord !== userDetails.password) {
        passWord = prompt(`Retry Password: `);
      }
      alert(`Welcome ${userDetails.name}`);
    }
  };

  let userName = prompt("Enter Username: ");
  if (userName === userDetails.name) {
    checkUserPassword();
  } else if (userName !== userDetails.name) {
    userName = prompt(`Retry Username: `);
    while (userName !== userDetails.name) {
      userName = prompt(`Retry Username: `);
    }
    checkUserPassword();
  }
};
userLog();
