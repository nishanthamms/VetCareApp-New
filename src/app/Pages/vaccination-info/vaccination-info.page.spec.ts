import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaccinationInfoPage } from './vaccination-info.page';

describe('VaccinationInfoPage', () => {
  let component: VaccinationInfoPage;
  let fixture: ComponentFixture<VaccinationInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaccinationInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
