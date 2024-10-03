import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizadoresgisPage } from './organizadoresgis.page';

describe('OrganizadoresgisPage', () => {
  let component: OrganizadoresgisPage;
  let fixture: ComponentFixture<OrganizadoresgisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadoresgisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
