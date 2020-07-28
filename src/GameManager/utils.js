export const SpawnerType = {
  MONSTER: 'MONSTER',
  CHEST: 'CHEST',
};

export function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

/* eslint-disable consistent-return */
export function getTiledProperty(obj, propertyName) {
  for (let propertyIndex = 0; propertyIndex < obj.properties.length; propertyIndex += 1) {
    const property = obj.properties[propertyIndex];
    if (property.name === propertyName) {
      return property.value;
    }
  }
}
