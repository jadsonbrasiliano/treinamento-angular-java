import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCadastrarComponent } from './clientes-cadastrar.component';

describe('ClientesCadastrarComponent', () => {
  let component: ClientesCadastrarComponent;
  let fixture: ComponentFixture<ClientesCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
