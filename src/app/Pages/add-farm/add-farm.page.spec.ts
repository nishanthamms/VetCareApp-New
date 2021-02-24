import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFarmPage } from './add-farm.page';

describe('AddFarmPage', () => {
  let component: AddFarmPage;
  let fixture: ComponentFixture<AddFarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
