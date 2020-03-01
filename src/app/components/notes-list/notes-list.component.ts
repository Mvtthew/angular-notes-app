import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
	selector: 'app-notes-list',
	templateUrl: './notes-list.component.html',
	styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

	notesList: Note[];

	constructor(private noteService: NoteService) { }

	ngOnInit(): void {
		this.notesList = this.noteService.getNotes();
	}

}
