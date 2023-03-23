import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniatureTicketComponent } from './miniature-ticket.component';

describe('MiniatureTicketComponent', () => {
  let component: MiniatureTicketComponent;
  let fixture: ComponentFixture<MiniatureTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniatureTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniatureTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
