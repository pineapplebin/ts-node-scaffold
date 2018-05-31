import { action, matrixToNumber } from '../src'

test('test action', () => {
  expect(action()).toEqual(1);
});

test('matrixToNumber', () => {
  // 100001010
  expect(matrixToNumber([
    [true, false, false],
    [false, false, true],
    [false, true, false]
  ])).toEqual(parseInt('100001010', 2));

  expect(matrixToNumber([
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ])).toEqual(511);
})
