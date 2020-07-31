import Map from '../Classes/Map';

jest.mock('../Classes/Map');

beforeEach(() => {
  Map.mockClear();
});

describe('Map', () => {
  const map = new Map();

  it('Should set the scene of the map', () => {
    map.scene = 'GameScene';
    expect(map.scene).toBe('GameScene');
  });

  it('Should set the key identifier for the map', () => {
    map.scene = 'map';
    expect(map.scene).toBe('map');
  });

  it('Should set the tileSetName layer level for the map', () => {
    map.tileSetName = 'background';
    expect(map.tileSetName).toBe('background');
  });

  it('Should set the bgLayerName layer level for the map', () => {
    map.bgLayerName = 'background';
    expect(map.bgLayerName).toBe('background');
  });

  it('Sould return an error if not same tileSetName', () => {
    map.bgLayerName = 'background';
    expect(map.bgLayerName).not.toBe('pizza');
  });

  it('Sould return an error if not same bgLayerName', () => {
    map.bgLayerName = 'background';
    expect(map.bgLayerName).not.toBe('pie');
  });
});
