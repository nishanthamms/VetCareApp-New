import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBreedingPage } from './add-breeding.page';

describe('AddBreedingPage', () => {
  let component: AddBreedingPage;
  let fixture: ComponentFixture<AddBreedingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBreedingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBreedingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
