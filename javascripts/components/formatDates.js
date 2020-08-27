import { format, isValid } from 'date-fns';

const formatDates = () => {
  const dateElements = Array.from(document.querySelectorAll('[data-component-format-date]'));
  dateElements.forEach(dateElement => {
    const utcDate = new Date(dateElement.textContent);
    if (isValid(utcDate)) {
      dateElement.textContent = format(utcDate, 'dd-MMM-yyyy');
    }
  });
};

export default formatDates;
