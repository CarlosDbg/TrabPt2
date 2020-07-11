import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoTemaComponent } from './edicao-tema.component';

describe('EdicaoTemaComponent', () => {
  let component: EdicaoTemaComponent;
  let fixture: ComponentFixture<EdicaoTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
