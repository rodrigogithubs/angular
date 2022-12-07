import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentpropioComponent } from './componentpropio.component';

describe('ComponentpropioComponent', () => {
  let component: ComponentpropioComponent;
  let fixture: ComponentFixture<ComponentpropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentpropioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentpropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
