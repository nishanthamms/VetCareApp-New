import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVaccinationPage } from './add-vaccination.page';

describe('AddVaccinationPage', () => {
  let component: AddVaccinationPage;
  let fixture: ComponentFixture<AddVaccinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVaccinationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVaccinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
