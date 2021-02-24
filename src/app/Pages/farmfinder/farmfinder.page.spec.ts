import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmfinderPage } from './farmfinder.page';

describe('FarmfinderPage', () => {
  let component: FarmfinderPage;
  let fixture: ComponentFixture<FarmfinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmfinderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmfinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
