import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamelCaseComponent } from './camel-case.component';

describe('CamelCaseComponent', () => {
  let component: CamelCaseComponent;
  let fixture: ComponentFixture<CamelCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamelCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamelCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
