import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
	selector: 'app-note',
	templateUrl: './note.component.html',
	styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

	@Input() note: Note;
	@Output() emmit = new EventEmitter<any>();

	constructor(private noteService: NoteService) { }

	ngOnInit(): void {
	}

	deleteNote(): void {
		this.noteService.deteleNote(this.note.id);
		this.emmit.next();
	}

}
