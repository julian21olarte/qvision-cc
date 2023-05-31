export const sliceStr = (text: string, max: number = 25) =>
  text.length >= max ? text.slice(0, max) + "..." : text;
