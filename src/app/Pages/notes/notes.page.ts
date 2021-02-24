import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import { Note} from 'src/app/models/Note';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  public notes: Observable<Note[]>;
  uid: string;
  term = '';
  constructor(private noteService: NoteService,private router: Router) {
    this.uid = localStorage.getItem('userid');
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }
  
  viewNote(noteId){
    sessionStorage.setItem('noteId', noteId);
   // this.nav.navigateForward('tabs/chat'); 
     this.router.navigateByUrl('/tabs/viewnotes/'+noteId);
  }
 
}
