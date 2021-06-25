import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoroutingComponent } from './todorouting.component';

describe('TodoroutingComponent', () => {
  let component: TodoroutingComponent;
  let fixture: ComponentFixture<TodoroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoroutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
