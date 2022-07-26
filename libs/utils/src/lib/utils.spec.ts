import { toUpper } from './utils';

describe('utils', () => {
  it('should work', () => {
    expect(toUpper('test')).toEqual('TEST');
  });
});
