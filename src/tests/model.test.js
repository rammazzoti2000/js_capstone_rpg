import Model from './test_files/Model';

describe('Model', () => {
  it('Should set userName ', () => {
    Model.userName = 'Nikulay';
    expect(Model.userName).toBe('Nikulay');
  });

  it('Should throw an error if different username ', () => {
    Model.userName = 'Nikulay';
    expect(Model.userName).not.toBe('Vzdrizni');
  });

  it('Should set the user\'s score ', () => {
    Model.score = '400';
    expect(Model.score).toBe('400');
  });

  it('Should throw an error if wrong user score  ', () => {
    Model.score = '';
    expect(Model.score).not.toBe('200');
  });
});
