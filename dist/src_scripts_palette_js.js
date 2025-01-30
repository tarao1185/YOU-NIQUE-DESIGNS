"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkYouniqueDesigns"] = self["webpackChunkYouniqueDesigns"] || []).push([["src_scripts_palette_js"],{

/***/ "./src/scripts/palette.js":
/*!********************************!*\
  !*** ./src/scripts/palette.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changes: function() { return /* binding */ changes; },\n/* harmony export */   init: function() { return /* binding */ init; }\n/* harmony export */ });\nlet changes = [];\nfunction init(contentWrapper, changes) {\n  // const container = window.appContainer;\n  //add palette to page\n  const palette = document.createElement(\"div\");\n  palette.setAttribute(\"class\", \"palette box-borders\");\n  // palette.innerText = \"Pick a color\" + \"&rarr;\";\n  const span = document.createElement(\"label\");\n  const textNode = document.createTextNode(\"Pick a color \");\n  span.appendChild(textNode);\n\n  // const arrowNode = document.createTextNode(\" \" + \"\\u2192\"); // Unicode character code for the right arrow\n  // span.appendChild(arrowNode);\n\n  // document.body.appendChild(span);\n\n  palette.appendChild(span);\n  contentWrapper.appendChild(palette);\n\n  //color picker\n  const colorPicker = document.createElement(\"input\");\n  colorPicker.setAttribute(\"type\", \"color\");\n  colorPicker.setAttribute(\"class\", \"colorPicker\");\n  colorPicker.setAttribute(\"value\", \"#ffffff\");\n  palette.append(colorPicker);\n\n  //div to store colors picked by user\n  const pickedColors = document.createElement(\"div\");\n  pickedColors.setAttribute(\"class\", \"pickedColors\");\n  palette.append(pickedColors);\n  let currentColor;\n  colorPicker.onchange = function () {\n    currentColor = colorPicker.value;\n    let i = 0;\n    let previousColor = document.createElement(\"div\");\n    previousColor.setAttribute(\"class\", \"prevColor\");\n    previousColor.style.backgroundColor = currentColor;\n    for (let i = 0; i < 16; i++) {\n      pickedColors.appendChild(previousColor);\n    }\n  };\n  pickedColors.onclick = function (event) {\n    currentColor = event.target.style.backgroundColor;\n  };\n  const paths = document.querySelectorAll(\"path\");\n  let orgColor = \"#ffffff\";\n  paths.forEach(path => {\n    path.onclick = function (event) {\n      orgColor = event.target.style.fill;\n      const action = {\n        element: event.target,\n        previousColor: orgColor\n      };\n\n      // console.log(changes);\n      event.target.style.fill = currentColor;\n      changes.push(action);\n    };\n  });\n\n  // Use the container element for sidebar initialization\n  // ...\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Zb3VuaXF1ZURlc2lnbnMvLi9zcmMvc2NyaXB0cy9wYWxldHRlLmpzPzg4OGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBjaGFuZ2VzID0gW107XG5leHBvcnQgZnVuY3Rpb24gaW5pdChjb250ZW50V3JhcHBlciwgY2hhbmdlcykge1xuXHQvLyBjb25zdCBjb250YWluZXIgPSB3aW5kb3cuYXBwQ29udGFpbmVyO1xuXHQvL2FkZCBwYWxldHRlIHRvIHBhZ2Vcblx0Y29uc3QgcGFsZXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0cGFsZXR0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhbGV0dGUgYm94LWJvcmRlcnNcIik7XG5cdC8vIHBhbGV0dGUuaW5uZXJUZXh0ID0gXCJQaWNrIGEgY29sb3JcIiArIFwiJnJhcnI7XCI7XG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cblx0Y29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlBpY2sgYSBjb2xvciBcIik7XG5cdHNwYW4uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXG5cdC8vIGNvbnN0IGFycm93Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiICsgXCJcXHUyMTkyXCIpOyAvLyBVbmljb2RlIGNoYXJhY3RlciBjb2RlIGZvciB0aGUgcmlnaHQgYXJyb3dcblx0Ly8gc3Bhbi5hcHBlbmRDaGlsZChhcnJvd05vZGUpO1xuXG5cdC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblx0cGFsZXR0ZS5hcHBlbmRDaGlsZChzcGFuKTtcblxuXHRjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChwYWxldHRlKTtcblxuXHQvL2NvbG9yIHBpY2tlclxuXHRjb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29sb3JQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpO1xuXHRjb2xvclBpY2tlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbG9yUGlja2VyXCIpO1xuXHRjb2xvclBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiNmZmZmZmZcIik7XG5cblx0cGFsZXR0ZS5hcHBlbmQoY29sb3JQaWNrZXIpO1xuXG5cdC8vZGl2IHRvIHN0b3JlIGNvbG9ycyBwaWNrZWQgYnkgdXNlclxuXHRjb25zdCBwaWNrZWRDb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwaWNrZWRDb2xvcnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwaWNrZWRDb2xvcnNcIik7XG5cdHBhbGV0dGUuYXBwZW5kKHBpY2tlZENvbG9ycyk7XG5cblx0bGV0IGN1cnJlbnRDb2xvcjtcblx0Y29sb3JQaWNrZXIub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y3VycmVudENvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdGxldCBwcmV2aW91c0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRcdHByZXZpb3VzQ29sb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcmV2Q29sb3JcIik7XG5cdFx0cHJldmlvdXNDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyZW50Q29sb3I7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0XHRwaWNrZWRDb2xvcnMuYXBwZW5kQ2hpbGQocHJldmlvdXNDb2xvcik7XG5cdFx0fVxuXHR9O1xuXG5cdHBpY2tlZENvbG9ycy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Y3VycmVudENvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcblx0fTtcblxuXHRjb25zdCBwYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwYXRoXCIpO1xuXG5cdGxldCBvcmdDb2xvciA9IFwiI2ZmZmZmZlwiO1xuXG5cdHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcblx0XHRwYXRoLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdG9yZ0NvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmZpbGw7XG5cblx0XHRcdGNvbnN0IGFjdGlvbiA9IHtcblx0XHRcdFx0ZWxlbWVudDogZXZlbnQudGFyZ2V0LFxuXHRcdFx0XHRwcmV2aW91c0NvbG9yOiBvcmdDb2xvcixcblx0XHRcdH07XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuXHRcdFx0ZXZlbnQudGFyZ2V0LnN0eWxlLmZpbGwgPSBjdXJyZW50Q29sb3I7XG5cdFx0XHRjaGFuZ2VzLnB1c2goYWN0aW9uKTtcblx0XHR9O1xuXHR9KTtcblxuXHQvLyBVc2UgdGhlIGNvbnRhaW5lciBlbGVtZW50IGZvciBzaWRlYmFyIGluaXRpYWxpemF0aW9uXG5cdC8vIC4uLlxufVxuIl0sIm5hbWVzIjpbImNoYW5nZXMiLCJpbml0IiwiY29udGVudFdyYXBwZXIiLCJwYWxldHRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3BhbiIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNvbG9yUGlja2VyIiwiYXBwZW5kIiwicGlja2VkQ29sb3JzIiwiY3VycmVudENvbG9yIiwib25jaGFuZ2UiLCJ2YWx1ZSIsImkiLCJwcmV2aW91c0NvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXRocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcmdDb2xvciIsImZvckVhY2giLCJwYXRoIiwiZmlsbCIsImFjdGlvbiIsImVsZW1lbnQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/palette.js\n");

/***/ })

}]);