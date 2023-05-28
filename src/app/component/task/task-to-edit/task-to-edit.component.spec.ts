import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskToEditComponent } from './task-to-edit.component';

describe('TaskToEditComponent', () => {
  let component: TaskToEditComponent;
  let fixture: ComponentFixture<TaskToEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskToEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
