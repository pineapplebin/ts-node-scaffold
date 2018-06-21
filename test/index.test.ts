function add(x: number, y: number): number {
  return x + y;
}

test('test action', () => {
  expect(add(1, 2)).toEqual(3);
});

