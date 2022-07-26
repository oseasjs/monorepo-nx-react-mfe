import { toUpperCase } from './utils';

describe('utils', () => {
  it('should work', () => {
    expect(toUpperCase('test')).toEqual('TEST');
  });
});
