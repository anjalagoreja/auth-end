import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPageComponent } from './email-page.component';

describe('EmailPageComponent', () => {
  let component: EmailPageComponent;
  let fixture: ComponentFixture<EmailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailPageComponent]
    });
    fixture = TestBed.createComponent(EmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
