import { expect } from 'chai';
import Example from '../src/example';

describe('Example', () => {
  it('#add()', () => {
    expect(Example.add(1, 1)).to.equal(2);
  });
});
