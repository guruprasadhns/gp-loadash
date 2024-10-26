export function countBy<T>(
  array: Array<T>,
  iteratee: (value: T) => number | string
): Record<string, number> {
  const result = array.reduce((acc: Record<string, number>, i: T) => {
    const key = iteratee(i);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  return result;
}
