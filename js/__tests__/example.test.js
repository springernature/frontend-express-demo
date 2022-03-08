import {example} from '../components/example';

afterEach(() => {
    jest.clearAllMocks();
});

test('Should log to console', () => {
	const logSpy = jest.spyOn(global.console, 'log').mockImplementation(() => {});
	example();
	expect(logSpy).toHaveBeenCalledWith('The example component ran on the page');
})
