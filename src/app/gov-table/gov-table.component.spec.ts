import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovTableComponent } from './gov-table.component';

describe('GovTableComponent', () => {
  let component: GovTableComponent;
  let fixture: ComponentFixture<GovTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
