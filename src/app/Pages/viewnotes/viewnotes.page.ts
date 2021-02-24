import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Observable} from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import { Note} from 'src/app/models/Note';
import {ActivatedRoute, Router} from '@angular/router';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.page.html',
  styleUrls: ['./viewnotes.page.scss'],
})
export class ViewnotesPage implements OnInit, AfterViewInit {
  note: Note = {
    id: '',
    userid: '',
    title: '',
    content: '',
    createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService, private router: Router) { }

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

  deleteNote() {
    this.noteService.deleteNote(this.note.id).then(() => {
      this.router.navigateByUrl('/tabs/notes');
    }, err => {
    });
  }

}
