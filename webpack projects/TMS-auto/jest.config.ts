import { defaults } from 'jest-config';

const config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    transform: {'^.+\\.tsx?$': 'ts-jest'}
};

export default config;