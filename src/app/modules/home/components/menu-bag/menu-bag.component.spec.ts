import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBagComponent } from './menu-bag.component';

describe('MenuBagComponent', () => {
  let component: MenuBagComponent;
  let fixture: ComponentFixture<MenuBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
