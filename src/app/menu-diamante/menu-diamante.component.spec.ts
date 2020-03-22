import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiamanteComponent } from './menu-diamante.component';

describe('MenuDiamanteComponent', () => {
  let component: MenuDiamanteComponent;
  let fixture: ComponentFixture<MenuDiamanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDiamanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDiamanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
