import tsconfig from './tsconfig.json';

const mapPaths = () => {
  const paths = tsconfig.compilerOptions.paths;
  const moduleNameMapper = {};
  Object.keys(paths).forEach((path) => {
    let name = path;
    let value = paths[path][0];
    if (name.indexOf('/*') !== -1) {
      name = name.split('/')[0].trim() + '/(.*)';
      value = '<rootDir>/' + value.split('/*')[0].trim() + '/$1';
    } else {
      value = '<rootDir>/' + value;
    }
    moduleNameMapper[name] = value;
  });
  return moduleNameMapper;
};

module.exports = {
  roots: ['src'],
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'json'],
  testRegex: '.*\\.spec\\.ts$',
  transform: { '^.+\\.ts$': 'ts-jest' },
  collectCoverageFrom: ['src/**/service.ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleNameMapper: mapPaths()
};
