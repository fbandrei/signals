import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushPollComponent } from './push-poll.component';

describe('PushPollComponent', () => {
  let component: PushPollComponent;
  let fixture: ComponentFixture<PushPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushPollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PushPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
