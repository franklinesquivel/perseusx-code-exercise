import {pathsToModuleNameMapper} from 'ts-jest';
import {compilerOptions} from './tsconfig.json';

/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};