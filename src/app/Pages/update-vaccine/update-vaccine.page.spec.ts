import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateVaccinePage } from './update-vaccine.page';

describe('UpdateVaccinePage', () => {
  let component: UpdateVaccinePage;
  let fixture: ComponentFixture<UpdateVaccinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVaccinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateVaccinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
