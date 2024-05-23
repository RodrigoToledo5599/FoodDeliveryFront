import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingItemComponent } from './serving-item.component';

describe('ServingItemComponent', () => {
  let component: ServingItemComponent;
  let fixture: ComponentFixture<ServingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServingItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
