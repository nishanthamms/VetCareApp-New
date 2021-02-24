import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmInfoPage } from './farm-info.page';

describe('FarmInfoPage', () => {
  let component: FarmInfoPage;
  let fixture: ComponentFixture<FarmInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
