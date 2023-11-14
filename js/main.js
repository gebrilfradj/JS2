const myarray = ["eat", "sleep", "code"];
const myObject = {
  name: "dave",
  hobbies: ["eat", "sleep", "code"],
  logName: function() {
    console.log(this.name);
  }
};

localStorage.setItem("myLocalStore", JSON.stringify(myarray));
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(storeLength);