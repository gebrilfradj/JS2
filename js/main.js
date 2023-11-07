// json 
const myObj= {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"];
  hello: function(){
    console.log("hello!");
  }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);