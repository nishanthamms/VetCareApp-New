import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCattlePage } from './add-cattle.page';

describe('AddCattlePage', () => {
  let component: AddCattlePage;
  let fixture: ComponentFixture<AddCattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
