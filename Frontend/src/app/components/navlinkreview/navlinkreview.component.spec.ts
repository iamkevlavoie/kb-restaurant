import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlinkreviewComponent } from './navlinkreview.component';

describe('NavlinkreviewComponent', () => {
  let component: NavlinkreviewComponent;
  let fixture: ComponentFixture<NavlinkreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavlinkreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlinkreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
