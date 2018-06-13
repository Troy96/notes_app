console.log('Starting app..');

const fs = require('fs');

const os = require('os');

const notes = require('./notes.js'); //Realtive path startin from . (root) //notes will store whatever is being exported from notes.js

var res = notes.add(5,9);

console.log(res);
// var user = os.userInfo();


// fs.appendFile('greetings.txt',`Hello ${user.username}! and your age is ${notes.age}`, function (err){

// 	if(err){
// 		console.log('Unable to write to file!!');
// 	}

// }); 