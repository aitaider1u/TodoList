import { TestBed } from '@angular/core/testing';

import { ListTodosService } from './list-todos.service';

describe('ListTodosService', () => {
  let service: ListTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
