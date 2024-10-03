import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizadorPerfilPage } from './organizador-perfil.page';

describe('OrganizadorPerfilPage', () => {
  let component: OrganizadorPerfilPage;
  let fixture: ComponentFixture<OrganizadorPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
