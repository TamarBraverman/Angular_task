import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListComponentComponent } from './package-list-component.component';

describe('PackageListComponentComponent', () => {
  let component: PackageListComponentComponent;
  let fixture: ComponentFixture<PackageListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
