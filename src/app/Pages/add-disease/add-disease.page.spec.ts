import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDiseasePage } from './add-disease.page';

describe('AddDiseasePage', () => {
  let component: AddDiseasePage;
  let fixture: ComponentFixture<AddDiseasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiseasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDiseasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
