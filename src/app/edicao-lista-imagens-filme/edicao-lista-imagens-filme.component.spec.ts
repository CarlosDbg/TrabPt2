import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoListaImagensFilmeComponent } from './edicao-lista-imagens-filme.component';

describe('EdicaoListaImagensFilmeComponent', () => {
  let component: EdicaoListaImagensFilmeComponent;
  let fixture: ComponentFixture<EdicaoListaImagensFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoListaImagensFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoListaImagensFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
