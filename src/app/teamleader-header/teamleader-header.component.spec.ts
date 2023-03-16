import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderHeaderComponent } from './teamleader-header.component';

describe('TeamleaderHeaderComponent', () => {
  let component: TeamleaderHeaderComponent;
  let fixture: ComponentFixture<TeamleaderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamleaderHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamleaderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
