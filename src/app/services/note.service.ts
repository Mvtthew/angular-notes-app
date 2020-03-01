import { Injectable } from '@angular/core';
import { Note } from '../models/Note';

@Injectable({
	providedIn: 'root'
})

export class NoteService {

	storageName: string = 'notesLocalSave';
	notesList: Note[];

	constructor() { 

		if (localStorage.getItem(this.storageName)) {
			// Plik istnieje
			this.notesList = JSON.parse(localStorage.getItem(this.storageName));
		} else {
			// Plik nie istnieje
			localStorage.setItem(this.storageName, JSON.stringify([]));
			this.notesList = JSON.parse(localStorage.getItem(this.storageName));
		}

	}

	saveToLocalStorage(): void {
		localStorage.setItem(this.storageName, JSON.stringify(this.notesList));
	}

	getNotes(): Note[] {
		return this.notesList;
	}

	getNewId(): number {
		if (this.notesList.length > 0) {
			return this.notesList[this.notesList.length - 1].id + 1;
		} else {
			return 0;
		}
	}

	addNewNote(newNote: Note): void {
		this.notesList.push(newNote);
		this.saveToLocalStorage();
	}
	
	deteleNote(noteId: number): void {
		this.notesList = this.notesList.filter(n => n.id != noteId);
		this.saveToLocalStorage();
	}


}
