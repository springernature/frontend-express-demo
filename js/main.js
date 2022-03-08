import {example} from "./components/example";

const start = () => {
	example();
};

if (/complete|interactive/.test(document.readyState)) {
	start();
} else {
	document.addEventListener('DOMContentLoaded', start);
}
