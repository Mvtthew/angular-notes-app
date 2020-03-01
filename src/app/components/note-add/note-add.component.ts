import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
	selector: 'app-note-add',
	templateUrl: './note-add.component.html',
	styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

	@Output() emmit = new EventEmitter<any>();

	newNote: Note;

	constructor(private noteService: NoteService) { }

	ngOnInit(): void {
		this.newNote = {
			id: this.noteService.getNewId(),
			title: '',
			body: ''
		}
	}

	addNewNote() {
		// Add to local storage
		this.noteService.addNewNote(this.newNote);
		this.ngOnInit();
		this.emmit.next();
	}

}
