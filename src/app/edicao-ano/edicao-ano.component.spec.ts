import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoAnoComponent } from './edicao-ano.component';

describe('EdicaoAnoComponent', () => {
  let component: EdicaoAnoComponent;
  let fixture: ComponentFixture<EdicaoAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
