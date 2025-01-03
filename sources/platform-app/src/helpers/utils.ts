export const range = (start: number, end: number): number[] => {
  return [...Array(end - start).keys()].map((index) => start + index);
};

export const pick = <T>(index: number, items: T[]): T => {
  return items[index];
};

export const throwError = (message: string): never => {
  throw new Error(message);
};
