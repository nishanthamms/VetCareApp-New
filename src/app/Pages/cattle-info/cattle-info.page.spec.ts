import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CattleInfoPage } from './cattle-info.page';

describe('CattleInfoPage', () => {
  let component: CattleInfoPage;
  let fixture: ComponentFixture<CattleInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CattleInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
