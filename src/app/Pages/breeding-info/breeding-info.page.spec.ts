import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreedingInfoPage } from './breeding-info.page';

describe('BreedingInfoPage', () => {
  let component: BreedingInfoPage;
  let fixture: ComponentFixture<BreedingInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedingInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
