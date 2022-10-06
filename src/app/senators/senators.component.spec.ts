import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorsComponent } from './senators.component';

describe('SenatorsComponent', () => {
  let component: SenatorsComponent;
  let fixture: ComponentFixture<SenatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
