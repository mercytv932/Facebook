var database = [
{
username: "Yosef",
password: "123"

},

{
username: "Johnson",
password: "2025"

},

{
username: "Brandon",
password: "1229"

},

{
username: "David",
password: "dec25"

}

];


 var newsFeed = [
  {
    username:  "Bobby",
    timeline: "So tired from all that learning!"
  },


  {
    username: "Sally",
    timeline: "Javascript is soo cool!"
  }

];


function isUserValid(username,password){
for(var i=0; i< database.length; i++){
  if(database[i].username===username &&
    database[i].password === password){
      return true;
    }
}
return false;
}


function signIn(username,password){
 if(isUserValid(username, password)) {
console.log(newsFeed);
}  else{
 alert("Sorry, wrong username and password! ")
};
}


var userNamePrompt = prompt("What's your username?");
var  passwordPrompt = prompt ("What's your password?");


signIn(userNamePrompt, passwordPrompt);
