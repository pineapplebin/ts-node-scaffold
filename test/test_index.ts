import { expect } from 'chai'
import { test } from '../src'

describe('testing', function () {
  it('should be ok', function () {
    expect(test()).to.equal(1);
  })
});
