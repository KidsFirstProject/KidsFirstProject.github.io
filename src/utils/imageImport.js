const importAll = r => {
  const images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item).default;
  });
  return images;
};

export default importAll;
