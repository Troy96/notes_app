const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); //Realtive path startin from . (root) //notes will store whatever is being exported from notes.js

const titleOptions = {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		};
const bodyOptions = {
			describe: 'Body of the note',
			demand: true,
			alias: 'b'
		};			

const argv = yargs
	.command('add','Add a new note',{
		title: titleOptions ,
		body: bodyOptions	

	})
	.command('list','Listing all notes')
	.command('read','Reading a note',{
		title: titleOptions
	})
	.command('remove','Removing a note',{
		title: titleOptions
	})
	.help()
	.argv;
var command =argv._[0];

if(command=='add'){

	var note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Successfully created a note!!');
		notes.logNotes(note);	
	}
	else{
		console.log('Note with this title already exists!!');
	}
}
else if(command=='list'){
	var fetchedAllNotes = notes.getAll();

	console.log(`Displaying ${fetchedAllNotes.length} note(s)`);

	fetchedAllNotes.forEach((note) => notes.logNotes(note));

}

else if(command=='read'){
	var noteToRead = notes.readNote(argv.title);
	if(noteToRead){
		notes.logNotes(noteToRead);
	}
	else{
		console.log('Note not found to read!!');
	}
}

else if(command=='remove'){

	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed!!' : 'Note not found!!'
	console.log(message);
	
}

else{
	console.log('Command not recognized');
}