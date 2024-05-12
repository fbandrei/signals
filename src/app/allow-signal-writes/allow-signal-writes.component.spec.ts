import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowSignalWritesComponent } from './allow-signal-writes.component';

describe('AllowSignalWritesComponent', () => {
  let component: AllowSignalWritesComponent;
  let fixture: ComponentFixture<AllowSignalWritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllowSignalWritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllowSignalWritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
