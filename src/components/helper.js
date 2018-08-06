export const f2c = temp => {
  return (((temp - 32) * (5 / 9)) / 9).toFixed(0);
};
export const getImage = (icon, images) => {
  for (const image of Object.keys(images)) {
    if (image === icon) return images[image];
  }
};
