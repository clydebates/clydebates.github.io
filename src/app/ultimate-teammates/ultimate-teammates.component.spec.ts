import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateTeammatesComponent } from './ultimate-teammates.component';

describe('UltimateTeammatesComponent', () => {
  let component: UltimateTeammatesComponent;
  let fixture: ComponentFixture<UltimateTeammatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimateTeammatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimateTeammatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
