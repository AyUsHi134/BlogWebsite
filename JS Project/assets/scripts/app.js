// //import { apikey } from "./util.js";

const { use } = require("react");

// //import apikey from "./util.js";

//  // import {apikey, abc} from "./util.js";

//  //import * as util from "./util.js";
// //console.log(util.apikey); 

// //console.log("Hello world"); 


// //let userMessage = "Hello World";


// //console.log(userMessage);
// // these variables can be then used as identifiers to access the value whenever u want.

// //const username = "hello world";



// function greet() {
//     console.log("Hello world");
// }


// greet(); // calling the function 
// // function can be called as many times as u want 

// function greet(username, Message = "hello") {
//    // console.log(username);
//     //console.log(Message);

//     return "hi, i am " + username + Message;
// }

// const greetings = greet("Ayush");
// console.log(greetings);

// export default (username, Message) => {
// console.log("hello");
// return username + Message;
// }



// const user = {
//     name :ayushi,
//     age : 24,
//     userGreet(){
//         console.log("Hello");
//         console.log(this.age);
//     }
// };

// console.log(user.name)


 
// console.log(hobbies[1]); 

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex ((item) => {
//     return item === "sports";

// const index = hobbies.findIndex ((item) => item === "sports");
// console.log(index);

// const editedHobbies = hobbies.map((item) => ({text:item}));
// console.log(editedHobbies);


// const [firstname,lastname] = ["Ayushi", "Singh"];

// const firstName = userName[0];
// const lastName = userName[1];

// console.log(firstname);
// console.log(lastname);

 
// const hobbies = ["sports", "singing", "coding"];
// const user = {
//     name: "Ayushi",
//     age: 24
// };

// const newHobbies = ["writing"];
// const mergedHobbies = [...hobbies, ...newHobbies];

// const extendedUser = {
//     isAdmin : true,
//     ...user
// };
// console.log(extendedUser);




// const password = prompt("your password");
// if(password === "Hello") {
//     console.log("Hello works");
// } else if (password === "hello") {
//     console.log("hello works");
// } else {
//     console.log('Access not granted');
// }


// const hobbies = ["cooking", "reading"];

// for(const hobby of hobbies){
//     console.log(hobby);
// }

function handleTimeOut(){
    console.log("timed out");
}

const handleTimeOut2 = () => {
    console.log("timed out 2");
}

setTimeout(handleTimeOut,2000);
setTimeout(handleTimeOut,3000);

setTimeout(() => {
    console.log("more timed out");
}, 4000);

function greeter(greetfn){
    greetfn();
}

greeter(() => console.log("hi"));

