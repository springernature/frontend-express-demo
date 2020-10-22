import 'core-js/features/array/from';
import 'regenerator-runtime/runtime';
import formatDates from './components/formatDates';

const start = () => {
  formatDates();
};

if (/complete|interactive/.test(document.readyState)) {
  start();
} else {
  document.addEventListener('DOMContentLoaded', start);
}
