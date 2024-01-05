<template>
  <span ref="mathjaxRef"></span>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps(['formula']);
const mathjaxRef = ref(null);
const setFunction = () => {
  mathjaxRef.value.innerHTML = props.formula;
  return [mathjaxRef.value]
}
const renderMathJax = async () => {
  return window.MathJax.typesetPromise(setFunction());
};

watch(() => props.formula, renderMathJax);

onMounted(() => {
  renderMathJax();
});
</script>
