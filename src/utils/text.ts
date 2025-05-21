export const textZeroFill = (text: string, length: number) => {
  const textLength = text.length;
  if (textLength >= length) {
    return text;
  }
  const zeroFill = '0'.repeat(length - textLength);
  return zeroFill + text;
};
