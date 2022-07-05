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
const usersDatabase = {
  velia123: {
    firstname: "velia",
    lastname: "precious",
    email: "vevelia@gmail.com",
    accountActivated: true,
    password: "asdfghjkl11",
  },
  pere222: {
    firstname: "pere",
    lastname: "ekios",
    email: "ekiodiribo@gmail.com",
    accountActivated: true,
    password: "12344321abc",
  },
  patrick333: {
    firstname: "bonnie",
    lastname: "patricks",
    email: "ozigizaga@gmail.com",
    accountActivated: true,
    password: "ozigizaga123",
  },
  richhy419: {
    firstname: "richard",
    lastname: "yousuo",
    email: "richyrichy@gmail.com",
    accountActivated: false,
    password: "omo12344321",
  },
};
//FUNCTION TO VALIDATE USER INPUT
function displayUserDetails() {
  //enter username
  let username = prompt(`Enter Username: `);
  if (username == null) {
    return;
  }
  while (checkUsername(username) == false) {
    username = prompt(`REenter username: `);
  }
  //enter pasword
  let password = prompt(`Enter password: `);
  if (password == null) {
    return;
  }
  while (checkPassword(password) == false) {
    password = prompt(`REenter password: `);
  }
  //confirm password
  let passwordConfirm = prompt(`Confirm your password: `);
  if (passwordConfirm == null) return;
  while (passwordConfirm != password) {
    passwordConfirm = prompt(`Incorrect, confirm password again: `);
  }
  //print user details
  const user = usersDatabase[username];
  if (user == undefined) {
    alert(`user not found pls try again.`);
    return;
  } else {
    alert(`Found this user: 
    Firstname: ${user.firstname}
    Lastname: ${user.lastname}
    Email: ${user.email}
    Activated: ${user.accountActivated}
    `);
  }
}
displayUserDetails();
alert(`WELCOME USER`);

//FUNCTION TO CHECK USERNAME
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
//FUNCTION TO CHECK PASSWORD
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
