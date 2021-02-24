import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateCattlePage } from './update-cattle.page';

describe('UpdateCattlePage', () => {
  let component: UpdateCattlePage;
  let fixture: ComponentFixture<UpdateCattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
