import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosdetallesPage } from './productosdetalles.page';

describe('ProductosdetallesPage', () => {
  let component: ProductosdetallesPage;
  let fixture: ComponentFixture<ProductosdetallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosdetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
