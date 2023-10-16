import { defaults } from 'jest-config';
import type {Config} from 'jest';

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    transform: {'^.+\\.tsx?$': 'ts-jest'},
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '^@maket/(.*)': '<rootDir>/maket/$1',
        '^@docs/(.*)': '<rootDir>/docs/$1',
        '^@js/(.*)': '<rootDir>/maket/js/$1',
        '^@types/(.*)': '<rootDir>/maket/js/types/$1',
        '^@redux/(.*)': '<rootDir>/maket/js/redux/$1',

        '^@components/(.*)': '<rootDir>/maket/js/components/$1',
        '^@mainComponents/(.*)': '<rootDir>/maket/js/components/mainComponents/$1',
        '^@middleComponents/(.*)': '<rootDir>/maket/js/components/middleComponents/$1',
        '^@componentModules/(.*)': '<rootDir>/maket/js/components/componentModules/$1',

        '^@mainFunctions/(.*)': '<rootDir>/maket/js/mainFunctions/$1',
        '^@events/(.*)': '<rootDir>/maket/js/mainFunctions/events/$1',

        '^@middleFunctions/(.*)': '<rootDir>/maket/js/middleFunctions/$1',

        '^@firebaseFolder/(.*)': '<rootDir>/maket/js/firebaseFolder/$1',
    },
    
};

export default config;