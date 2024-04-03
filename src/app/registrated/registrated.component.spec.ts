import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratedComponent } from './registrated.component';

describe('RegistratedComponent', () => {
  let component: RegistratedComponent;
  let fixture: ComponentFixture<RegistratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistratedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
