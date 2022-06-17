import {example} from "./components/example";
import {reportForm} from "./components/report-form";

const start = () => {
	example();
	reportForm();
};

if (/complete|interactive/.test(document.readyState)) {
	start();
} else {
	document.addEventListener('DOMContentLoaded', start);
}
