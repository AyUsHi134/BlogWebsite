// //import { apikey } from "./util.js";

const { use } = require("react");

// //import apikey from "./util.js";

//  // import {apikey, abc} from "./util.js";

//  //import * as util from "./util.js";
// //console.log(util.apikey); 

// //console.log("Hello world"); 
// // values can be created directly 

// //let userMessage = "Hello World";
// //values are stored in variables 
// //variables are data containers which carries value and u can name them as u like

// //console.log(userMessage);
// // these variables can be then used as identifiers to access the value whenever u want.

// //const username = "hello world";

// //another way to create variables is const
// // const value cannot be reassigned but if using let it can be done.

// function greet() {
//     console.log("Hello world");
// }
// //code inside the function does not run directly but instead whne function is called.

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
// another way of opening function is using arrow method
// everything can be done in functions like this
// functions which do not have a name are created are this


// const user = {
//     name :ayushi,
//     age : 24,
//     userGreet(){
//         console.log("Hello");
//         console.log(this.age);
//     }
// };

// console.log(user.name)
// user.userGreet(); // calling method the same way just using . to access the function as it is the object 
// // and calling the function as we normally do 

// // objects can also store functions or called methods
// // since the function belongs to the object it can access other properties of that object 
// //to access other methods or fields u can use this keyword 

// const hobbies = ["sports", "singing", "coding"];
// console.log(hobbies[1]); 

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex ((item) => {
//     return item === "sports";

// const index = hobbies.findIndex ((item) => item === "sports");
// console.log(index);

// const editedHobbies = hobbies.map((item) => ({text:item}));
// console.log(editedHobbies);

// items can not only be converted into strings but also into JS objects.
// object created with curly braces and wrapped around () and then key value-pair is given. 
// it returns text:sports 

const [firstname,lastname] = ["Ayushi", "Singh"];

// const firstName = userName[0];
// const lastName = userName[1];

console.log(firstname);
console.log(lastname);

// instead of using username[indexno] now can be accessed using firstname and lastname.
// but also a better way to get the value is to deconstruct the array.
// the 2 variables can be created in 1 single step by adding [] on left side.
// on right side they create new array on left side they destructure that array by pulling out the values.
// firstname pulls Ayushi ,lastname pulls singh