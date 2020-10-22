
import dummyComponent from './components/dummy-component';

const start = () => {
  dummyComponent();
};

if (/complete|interactive/.test(document.readyState)) {
  start();
} else {
  document.addEventListener('DOMContentLoaded', start);
}
