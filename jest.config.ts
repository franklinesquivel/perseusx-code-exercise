import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions }                               from './tsconfig.json';


const jestConfig: JestConfigWithTsJest = {
    preset:            'ts-jest',
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper:  pathsToModuleNameMapper(compilerOptions.paths)
};

// noinspection JSUnusedGlobalSymbols
export default jestConfig;
