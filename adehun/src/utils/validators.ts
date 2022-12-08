export const regexValidator = (pattern: string, data: any): boolean => {
  const regex = new RegExp(pattern);
  return regex.test(data);
};
