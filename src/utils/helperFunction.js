import { constantValue } from "./constantValue";

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
const handleWhatsAppClick = () => {
  const phoneNumber = constantValue.phone; // Change this to your WhatsApp number (with country code)
  const message = constantValue.whatsAppMessage;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
};
export { hasEmptyKey, slugify, handleWhatsAppClick };