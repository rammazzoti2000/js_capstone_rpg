export default class Map {
  constructor(scene, key, tileSetName, bgLayerName, blockedLayerName) {
    this.scene = scene;
    this.key = key;
    this.tileSetName = tileSetName;
    this.bgLayerName = bgLayerName;
    this.blockedLayerName = blockedLayerName;
  }
}
