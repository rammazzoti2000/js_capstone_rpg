import Chest from './test_files/Chest';

jest.mock('./test_files/Chest');

beforeEach(() => {
  Chest.mockClear();
});

describe('Chest', () => {
  const chest = new Chest();

  it('Should set the belonging scene', () => {
    chest.scene = 'GameScene';
    expect(chest.scene).toBe('GameScene');
  });

  it('Should set the chest\'s coins amount as an integer value', () => {
    chest.coins = 10.2;
    expect(Number.isInteger(chest.coins)).not.toBe(10);
  });

  it('Should set the chest\'s coins amount', () => {
    chest.coins = 10;
    expect(chest.coins).toBe(10);
  });

  it('Should set the chest\'s id', () => {
    chest.id = 10;
    expect(chest.id).toBe(10);
  });
});
