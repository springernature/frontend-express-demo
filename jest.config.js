export default {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        url: 'http://localhost:3001'
    },
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    transformIgnorePatterns: [],
    testPathIgnorePatterns: ['public'],
    setupFiles: []
};