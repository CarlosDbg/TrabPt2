import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoImagemFilmeComponent } from './edicao-imagem-filme.component';

describe('EdicaoImagemFilmeComponent', () => {
  let component: EdicaoImagemFilmeComponent;
  let fixture: ComponentFixture<EdicaoImagemFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoImagemFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoImagemFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
