# vue-mathjax-v3

## Install
1) Add the config and a link to mathjax in index.html
For example:
```html
<script>
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']],
          processEscapes: true,
          processEnvironments: true,
        },
        options: {
          enableMenu: false,
        },
        chtml: {
          displayAlign: 'left'
        },
      };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" id="MathJax-script"></script>
```
---
2) Install vue-mathjax-v3
```shell
npm install -S vue-mathjax-v3
```
---
## Use example
```vue
<script setup>
import MathJax from "vue-mathjax-v3";
</script>

<template>
  <MathJax :formula="'$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$'" />
</template>
```