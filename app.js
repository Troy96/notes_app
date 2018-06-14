console.log('Starting app..');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); //Realtive path startin from . (root) //notes will store whatever is being exported from notes.js

const argv = yargs.argv;
var command =argv._[0];
console.log('Command:', command);
console.log('Yargs:', argv);

if(command=='add'){

	notes.addNote(argv.title, argv.body);
}
else if(command=='list'){
	notes.getAll();
}
else if(command=='read'){
	notes.readNote(argv.title);
}

else if(command=='remove'){
	notes.removeNote(argv.title);
}

else{
	console.log('Command not recognized');
}