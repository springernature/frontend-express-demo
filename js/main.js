import {myComponent} from "./components/my-component";

const start = () => {
	myComponent();
};

if (/complete|interactive/.test(document.readyState)) {
	start();
} else {
	document.addEventListener('DOMContentLoaded', start);
}
