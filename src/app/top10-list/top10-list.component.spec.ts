import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ListComponent } from './top10-list.component';

describe('Top10ListComponent', () => {
  let component: Top10ListComponent;
  let fixture: ComponentFixture<Top10ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top10ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top10ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
