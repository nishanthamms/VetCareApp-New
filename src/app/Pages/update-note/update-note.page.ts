import { Component, OnInit, AfterViewInit, } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note} from 'src/app/models/Note';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.page.html',
  styleUrls: ['./update-note.page.scss'],
})
export class UpdateNotePage implements OnInit, AfterViewInit {
  noteId;
  note: Note = {
    id: '',
    userid: '',
    title: '',
    content: '',
    createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService, private router: Router) {
    this.noteId =  sessionStorage.getItem('noteId');
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.noteService.getNote(id).subscribe(noteData => {
        this.note = noteData;
      });
    }
  }

  updateNote() {
    this.noteService.updateNote(this.note).then(() => {
     this.router.navigate(['/tabs/notes']);
    }, err => {
    });
  }
  goback(){    
    this.router.navigateByUrl('/tabs/viewnotes/' + this.noteId);
   }
}
