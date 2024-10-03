import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArbitroPage } from './arbitro.page';

describe('ArbitroPage', () => {
  let component: ArbitroPage;
  let fixture: ComponentFixture<ArbitroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
