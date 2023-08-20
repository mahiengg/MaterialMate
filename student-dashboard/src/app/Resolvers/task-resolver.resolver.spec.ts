import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { taskResolverResolver } from './task-resolver.resolver';

describe('taskResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => taskResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
