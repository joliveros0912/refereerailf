import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArbitroPerfilPage } from './arbitro-perfil.page';

describe('ArbitroPerfilPage', () => {
  let component: ArbitroPerfilPage;
  let fixture: ComponentFixture<ArbitroPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
