import {myComponent} from '../components/my-component';

afterEach(() => {
    jest.clearAllMocks();
});

test('Should log to console', () => {
	const logSpy = jest.spyOn(global.console, 'log').mockImplementation(() => {});
	myComponent();
	expect(logSpy).toHaveBeenCalledWith('My component ran on the page');
})
