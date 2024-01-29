import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateooryComponent } from './cateoory.component';

describe('CateooryComponent', () => {
  let component: CateooryComponent;
  let fixture: ComponentFixture<CateooryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CateooryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CateooryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
