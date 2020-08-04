import PlayerContainer from './test_files/PlayerContainer';

jest.mock('./test_files/PlayerContainer');

beforeEach(() => {
  PlayerContainer.mockClear();
});

describe('Player', () => {
  const player = new PlayerContainer();

  const Direction = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    UP: 'UP',
    DOWN: 'DOWN',
  };

  it('Should set the belonging scene to the player', () => {
    player.scene = 'GameScene';
    expect(player.scene).toBe('GameScene');
  });

  it('Should return an error if player\'s assinged scene doesn\'t match', () => {
    player.scene = 'GameScene';
    expect(player.scene).not.toBe('GameOver');
  });

  it('Player\'s velocity should be an interger value', () => {
    player.velocity = 100;
    expect(Number.isInteger(player.velocity)).toBe(true);
  });

  it('Should set the player\'s velocity', () => {
    player.velocity = 100;
    expect(player.velocity).toBe(100);
  });

  it('Should set player\'s direction to currentDirection', () => {
    player.currentDirection = Direction.RIGHT;
    expect(player.currentDirection).toBe(Direction.RIGHT);
  });

  it('Should return an error if player\'s direction is not currentDirection', () => {
    player.currentDirection = Direction.LEFT;
    expect(player.currentDirection).not.toBe(Direction.RIGHT);
  });

  it('Should set the player\'s initial attack status to false', () => {
    player.playerAttacking = false;
    expect(player.playerAttacking).not.toBe(true);
  });
});
