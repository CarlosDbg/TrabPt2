import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnoComponent } from './cadastro-ano.component';

describe('CadastroAnoComponent', () => {
  let component: CadastroAnoComponent;
  let fixture: ComponentFixture<CadastroAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
