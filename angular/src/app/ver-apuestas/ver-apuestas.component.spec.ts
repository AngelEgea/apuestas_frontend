import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerApuestasComponent } from './ver-apuestas.component';

describe('VerApuestasComponent', () => {
  let component: VerApuestasComponent;
  let fixture: ComponentFixture<VerApuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerApuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerApuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
