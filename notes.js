console.log('starting notes.js...');

const fs = require('fs');

var fetchNotes = () => {   //Resusable function to fetch notes
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch(e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));		
};

var addNote = (title,body) => {

	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title ===title);

	if (duplicateNotes.length === 0){

	notes.push(note);
	saveNotes(notes);
	return note;
	
	}
};

var getAll = () => {
	return fetchNotes();
};
var readNote = (title) => {
	var notesNew = fetchNotes();
	var notesFiltered = notesNew.filter((note) => note.title===title);
	return notesFiltered[0];
};
var removeNote = (title) => {
	//fetch notes

	var notesNew = fetchNotes();
	var newNotesAfterRemoval = notesNew.filter((note) => note.title !==title);
	saveNotes(newNotesAfterRemoval);
	
	return notesNew.length !== newNotesAfterRemoval.length;
};

var logNotes = (note) => {
	debugger;
	console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
	console.log(`Title: ${note.title}`);
	console.log(`Body:  ${note.body}`);
	console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
}
module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote,
	logNotes

};