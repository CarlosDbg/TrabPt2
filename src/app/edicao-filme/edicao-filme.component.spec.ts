import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoFilmeComponent } from './edicao-filme.component';

describe('EdicaoFilmeComponent', () => {
  let component: EdicaoFilmeComponent;
  let fixture: ComponentFixture<EdicaoFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
