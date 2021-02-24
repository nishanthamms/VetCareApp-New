import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import { Note} from 'src/app/models/Note';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {

  note: Note = {
    userid: localStorage.getItem('userid'),
    title: '',
    content: '',
    createdAt: new Date().getTime()
  };
 public userProfile: UserProfile;
  constructor(
      private activatedRoute: ActivatedRoute,
      private noteService: NoteService,
      private toastCtrl: ToastController,
      private router: Router,
      private authService: AuthService,
      private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.userProfile = userProfile;
      });
    });
  }

  addNote() {
    this.noteService.addNote(this.note).then(() => {
      this.router.navigateByUrl('/tabs/notes');
    }, err => {
    });
  }

}
