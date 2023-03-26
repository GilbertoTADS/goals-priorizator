import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorizatorComponent } from './priorizator.component';

describe('PriorizatorComponent', () => {
  let component: PriorizatorComponent;
  let fixture: ComponentFixture<PriorizatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorizatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
