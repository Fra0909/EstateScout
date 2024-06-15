import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { propertyResolver } from './property.resolver';

describe('propertyResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => propertyResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
