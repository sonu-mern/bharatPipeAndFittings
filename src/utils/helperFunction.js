//check if an object has any empty keys
const hasEmptyKey = (obj) => {
  if (typeof obj !== 'object' || obj === null) return false;
  return Object.keys(obj).some(key => key === '');
}

export { hasEmptyKey };