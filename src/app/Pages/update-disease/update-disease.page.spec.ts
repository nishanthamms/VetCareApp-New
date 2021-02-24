import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDiseasePage } from './update-disease.page';

describe('UpdateDiseasePage', () => {
  let component: UpdateDiseasePage;
  let fixture: ComponentFixture<UpdateDiseasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDiseasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDiseasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
