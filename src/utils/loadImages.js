// ✅ THIS FILE

const productModules = import.meta.glob(
  "../assets/images/products/*.jpg",
  { eager: true, import: "default" }
);

const bannerModules = import.meta.glob(
  "../assets/images/banners/*.jpg",
  { eager: true, import: "default" }
);

const formatImages = (modules) => {
  const images = {};
  for (const path in modules) {
    const fileName = path.split("/").pop().split(".")[0];
    images[fileName] = modules[path];
  }
  return images;
};

export const productImages = formatImages(productModules);
export const bannerImages = formatImages(bannerModules);
