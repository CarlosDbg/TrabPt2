import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTemaComponent } from './cadastro-tema.component';

describe('CadastroTemaComponent', () => {
  let component: CadastroTemaComponent;
  let fixture: ComponentFixture<CadastroTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
