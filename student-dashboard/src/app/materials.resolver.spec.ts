import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { materialsResolver } from './materials.resolver';

describe('materialsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => materialsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
