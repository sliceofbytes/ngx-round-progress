import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundProgressComponent } from './ngx-round-progress.component';
import { ROUND_PROGRESS_DEFAULTS_PROVIDER } from './ngx-round-progress.config';

describe('RoundProgressComponent', () => {
  let component: RoundProgressComponent;
  let fixture: ComponentFixture<RoundProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundProgressComponent ],
      providers: [ROUND_PROGRESS_DEFAULTS_PROVIDER]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
