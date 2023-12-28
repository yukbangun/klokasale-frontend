export function isValidNumber(value?: string | number): boolean {
  if (typeof value === 'number' && !isNaN(value)) {
    return true;
  } else if (typeof value === 'string') {
    const parsedNumber = Number(value);
    const parsedIntNumber = Number.parseInt(value, 10);
    if (!isNaN(parsedNumber) && !isNaN(parsedIntNumber)) {
      return true;
    }
  }
  return false;
}
