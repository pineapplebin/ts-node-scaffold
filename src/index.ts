export function action(): number {
  return 1;
}

export function matrixToNumber(matrix: boolean[][]): number {
  const flate = matrix.reduce((acc, arr) => [...acc, ...arr], []).map(b => +b).join('');
  return parseInt(flate, 2);
}
