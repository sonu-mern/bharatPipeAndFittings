//check if an object has any empty keys
const hasEmptyKey = (obj) => {
  if (typeof obj !== 'object' || obj === null) return false;
  return Object.keys(obj).some(key => key === '');
}
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[,&]/g, "")       // Remove commas and ampersands
    .replace(/\s+/g, "-")       // Replace spaces with hyphens
    .trim();                    // Remove leading/trailing whitespace
};
export { hasEmptyKey, slugify };