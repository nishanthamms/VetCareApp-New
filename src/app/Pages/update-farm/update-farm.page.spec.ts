import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateFarmPage } from './update-farm.page';

describe('UpdateFarmPage', () => {
  let component: UpdateFarmPage;
  let fixture: ComponentFixture<UpdateFarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateFarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
