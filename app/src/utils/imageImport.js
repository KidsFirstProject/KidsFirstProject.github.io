export const importAll = r => {
  const images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item)});
  return images;
}