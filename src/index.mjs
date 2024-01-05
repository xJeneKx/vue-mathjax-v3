import MathJax from "./index.vue";

MathJax.install = function (Vue) {
	Vue.component('MathJax', MathJax);
};

export default MathJax;
