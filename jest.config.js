module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
