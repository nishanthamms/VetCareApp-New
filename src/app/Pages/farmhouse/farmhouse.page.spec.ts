import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmhousePage } from './farmhouse.page';

describe('FarmhousePage', () => {
  let component: FarmhousePage;
  let fixture: ComponentFixture<FarmhousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmhousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmhousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
