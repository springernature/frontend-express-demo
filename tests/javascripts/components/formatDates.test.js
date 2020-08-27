import formatDates from '../../../javascripts/components/formatDates';
import template from '../../../views/index.hbs';
const renderObjectInstance = require('../../helpers/renderObject');

describe('formatDates', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('when it encounters a valid date', () => {
    beforeEach(() => {
      const html = template(renderObjectInstance);
      document.body.innerHTML = html;
      formatDates();
    });

    test('should display the date in dd-MMM-yyyy format', () => {
      expect(document.querySelector('[data-test="review-date"]').textContent.trim()).toBe('26-Aug-2020');
    });
  });

  describe('when it encounters an invalid date', () => {
    beforeEach(() => {
      renderObjectInstance.reviewDate = '32nd Decembuary 2020'; // An invalid or null date
      const html = template(renderObjectInstance);
      document.body.innerHTML = html;
      formatDates();
    });

    test('should display the provided data unchanged', () => {
      expect(document.querySelector('[data-test="review-date"]').textContent.trim()).toBe('32nd Decembuary 2020');
    });
  });
});
