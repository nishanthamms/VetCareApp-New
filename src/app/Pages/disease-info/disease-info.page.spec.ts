import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiseaseInfoPage } from './disease-info.page';

describe('DiseaseInfoPage', () => {
  let component: DiseaseInfoPage;
  let fixture: ComponentFixture<DiseaseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiseaseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
