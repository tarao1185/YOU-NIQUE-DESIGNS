"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkYouniqueDesigns"] = self["webpackChunkYouniqueDesigns"] || []).push([["src_scripts_design_area_js"],{

/***/ "./src/scripts/design_area.js":
/*!************************************!*\
  !*** ./src/scripts/design_area.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: function() { return /* binding */ init; },\n/* harmony export */   oopsBtn: function() { return /* binding */ oopsBtn; }\n/* harmony export */ });\n/* harmony import */ var _palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette.js */ \"./src/scripts/palette.js\");\n\nconst container = window.appContainer;\nconst design_area = document.createElement(\"div\");\ndesign_area.setAttribute(\"class\", \"design box-borders\");\nconst design_title = document.createElement(\"div\");\ndesign_title.innerText = \"Design away\";\ndesign_title.setAttribute = (\"id\", \"design_title\");\ndesign_area.appendChild(design_title);\ncontainer.appendChild(design_area);\nconst oopsBtn = document.createElement(\"button\");\noopsBtn.innerText = \"Oops!\";\noopsBtn.setAttribute(\"id\", \"oopsBtn\");\noopsBtn.setAttribute(\"class\", \"btn oopsbtn\");\ndesign_title.appendChild(oopsBtn);\noopsBtn.onclick = function () {\n  _palette_js__WEBPACK_IMPORTED_MODULE_0__.changes[_palette_js__WEBPACK_IMPORTED_MODULE_0__.changes.length - 1].element.style.fill = _palette_js__WEBPACK_IMPORTED_MODULE_0__.changes[_palette_js__WEBPACK_IMPORTED_MODULE_0__.changes.length - 1].previousColor;\n  _palette_js__WEBPACK_IMPORTED_MODULE_0__.changes.pop();\n};\nconst largePump = document.querySelector(\"#Layer_1\");\nconst largeFlat = document.querySelector(\"#Layer_2\");\nconst largeSnkr = document.querySelector(\"#Layer_3\");\ndesign_area.append(largePump, largeSnkr, largeFlat);\ndocument.getElementById(\"pumpBtn\").addEventListener(\"click\", displayImage);\ndocument.getElementById(\"flatBtn\").addEventListener(\"click\", displayImage);\ndocument.getElementById(\"snkrBtn\").addEventListener(\"click\", displayImage);\nfunction displayImage(ev) {\n  if (ev.currentTarget.id == \"pumpBtn\") {\n    document.querySelector(\"#Layer_2\").style.display = \"none\";\n    document.querySelector(\"#Layer_3\").style.display = \"none\";\n    document.querySelector(\"#Layer_1\").style.display = \"inline-block\";\n  } else if (ev.currentTarget.id == \"flatBtn\") {\n    document.querySelector(\"#Layer_2\").style.display = \"inline-block\";\n    document.querySelector(\"#Layer_1\").style.display = \"none\";\n    document.querySelector(\"#Layer_3\").style.display = \"none\";\n  } else {\n    document.querySelector(\"#Layer_2\").style.display = \"none\";\n    document.querySelector(\"#Layer_1\").style.display = \"none\";\n    document.querySelector(\"#Layer_3\").style.display = \"inline-block\";\n  }\n}\nfunction init(container) {\n  // Use the container element for sidebar initialization\n  // ...\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kZXNpZ25fYXJlYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFlBQVk7QUFFckMsTUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDakRGLFdBQVcsQ0FBQ0csWUFBWSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQztBQUV2RCxNQUFNQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUNsREUsWUFBWSxDQUFDQyxTQUFTLEdBQUcsYUFBYTtBQUN0Q0QsWUFBWSxDQUFDRCxZQUFZLElBQUksSUFBSSxFQUFFLGNBQWMsQ0FBQztBQUVsREgsV0FBVyxDQUFDTSxXQUFXLENBQUNGLFlBQVksQ0FBQztBQUNyQ1AsU0FBUyxDQUFDUyxXQUFXLENBQUNOLFdBQVcsQ0FBQztBQUUzQixNQUFNTyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUN2REssT0FBTyxDQUFDRixTQUFTLEdBQUcsT0FBTztBQUMzQkUsT0FBTyxDQUFDSixZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUNyQ0ksT0FBTyxDQUFDSixZQUFZLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztBQUM1Q0MsWUFBWSxDQUFDRSxXQUFXLENBQUNDLE9BQU8sQ0FBQztBQUVqQ0EsT0FBTyxDQUFDQyxPQUFPLEdBQUcsWUFBWTtFQUM3QlosZ0RBQU8sQ0FBQ0EsZ0RBQU8sQ0FBQ2EsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxHQUM3Q2hCLGdEQUFPLENBQUNBLGdEQUFPLENBQUNhLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ0ksYUFBYTtFQUMxQ2pCLGdEQUFPLENBQUNrQixHQUFHLENBQUMsQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNQyxTQUFTLEdBQUdkLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNwRCxNQUFNQyxTQUFTLEdBQUdoQixRQUFRLENBQUNlLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDcEQsTUFBTUUsU0FBUyxHQUFHakIsUUFBUSxDQUFDZSxhQUFhLENBQUMsVUFBVSxDQUFDO0FBRXBEaEIsV0FBVyxDQUFDbUIsTUFBTSxDQUFDSixTQUFTLEVBQUVHLFNBQVMsRUFBRUQsU0FBUyxDQUFDO0FBRW5EaEIsUUFBUSxDQUFDbUIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLFlBQVksQ0FBQztBQUMxRXJCLFFBQVEsQ0FBQ21CLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxZQUFZLENBQUM7QUFDMUVyQixRQUFRLENBQUNtQixjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO0FBRTFFLFNBQVNBLFlBQVlBLENBQUNDLEVBQUUsRUFBRTtFQUN6QixJQUFJQSxFQUFFLENBQUNDLGFBQWEsQ0FBQ0MsRUFBRSxJQUFJLFNBQVMsRUFBRTtJQUNyQ3hCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDTCxLQUFLLENBQUNlLE9BQU8sR0FBRyxNQUFNO0lBQ3pEekIsUUFBUSxDQUFDZSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNMLEtBQUssQ0FBQ2UsT0FBTyxHQUFHLE1BQU07SUFDekR6QixRQUFRLENBQUNlLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ0wsS0FBSyxDQUFDZSxPQUFPLEdBQUcsY0FBYztFQUNsRSxDQUFDLE1BQU0sSUFBSUgsRUFBRSxDQUFDQyxhQUFhLENBQUNDLEVBQUUsSUFBSSxTQUFTLEVBQUU7SUFDNUN4QixRQUFRLENBQUNlLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ0wsS0FBSyxDQUFDZSxPQUFPLEdBQUcsY0FBYztJQUNqRXpCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDTCxLQUFLLENBQUNlLE9BQU8sR0FBRyxNQUFNO0lBQ3pEekIsUUFBUSxDQUFDZSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNMLEtBQUssQ0FBQ2UsT0FBTyxHQUFHLE1BQU07RUFDMUQsQ0FBQyxNQUFNO0lBQ056QixRQUFRLENBQUNlLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ0wsS0FBSyxDQUFDZSxPQUFPLEdBQUcsTUFBTTtJQUN6RHpCLFFBQVEsQ0FBQ2UsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDTCxLQUFLLENBQUNlLE9BQU8sR0FBRyxNQUFNO0lBQ3pEekIsUUFBUSxDQUFDZSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNMLEtBQUssQ0FBQ2UsT0FBTyxHQUFHLGNBQWM7RUFDbEU7QUFDRDtBQUVPLFNBQVNDLElBQUlBLENBQUM5QixTQUFTLEVBQUU7RUFDL0I7RUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vWW91bmlxdWVEZXNpZ25zLy4vc3JjL3NjcmlwdHMvZGVzaWduX2FyZWEuanM/MmIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGFuZ2VzIH0gZnJvbSBcIi4vcGFsZXR0ZS5qc1wiO1xuXG5jb25zdCBjb250YWluZXIgPSB3aW5kb3cuYXBwQ29udGFpbmVyO1xuXG5jb25zdCBkZXNpZ25fYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXNpZ25fYXJlYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2lnbiBib3gtYm9yZGVyc1wiKTtcblxuY29uc3QgZGVzaWduX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRlc2lnbl90aXRsZS5pbm5lclRleHQgPSBcIkRlc2lnbiBhd2F5XCI7XG5kZXNpZ25fdGl0bGUuc2V0QXR0cmlidXRlID0gKFwiaWRcIiwgXCJkZXNpZ25fdGl0bGVcIik7XG5cbmRlc2lnbl9hcmVhLmFwcGVuZENoaWxkKGRlc2lnbl90aXRsZSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzaWduX2FyZWEpO1xuXG5leHBvcnQgY29uc3Qgb29wc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5vb3BzQnRuLmlubmVyVGV4dCA9IFwiT29wcyFcIjtcbm9vcHNCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvb3BzQnRuXCIpO1xub29wc0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBvb3BzYnRuXCIpO1xuZGVzaWduX3RpdGxlLmFwcGVuZENoaWxkKG9vcHNCdG4pO1xuXG5vb3BzQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdGNoYW5nZXNbY2hhbmdlcy5sZW5ndGggLSAxXS5lbGVtZW50LnN0eWxlLmZpbGwgPVxuXHRcdGNoYW5nZXNbY2hhbmdlcy5sZW5ndGggLSAxXS5wcmV2aW91c0NvbG9yO1xuXHRjaGFuZ2VzLnBvcCgpO1xufTtcblxuY29uc3QgbGFyZ2VQdW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8xXCIpO1xuY29uc3QgbGFyZ2VGbGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8yXCIpO1xuY29uc3QgbGFyZ2VTbmtyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8zXCIpO1xuXG5kZXNpZ25fYXJlYS5hcHBlbmQobGFyZ2VQdW1wLCBsYXJnZVNua3IsIGxhcmdlRmxhdCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVtcEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUltYWdlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxhdEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUltYWdlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25rckJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUltYWdlKTtcblxuZnVuY3Rpb24gZGlzcGxheUltYWdlKGV2KSB7XG5cdGlmIChldi5jdXJyZW50VGFyZ2V0LmlkID09IFwicHVtcEJ0blwiKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8yXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xheWVyXzNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTGF5ZXJfMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0fSBlbHNlIGlmIChldi5jdXJyZW50VGFyZ2V0LmlkID09IFwiZmxhdEJ0blwiKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8yXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTGF5ZXJfMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8zXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xheWVyXzJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTGF5ZXJfMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNMYXllcl8zXCIpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KGNvbnRhaW5lcikge1xuXHQvLyBVc2UgdGhlIGNvbnRhaW5lciBlbGVtZW50IGZvciBzaWRlYmFyIGluaXRpYWxpemF0aW9uXG5cdC8vIC4uLlxufVxuIl0sIm5hbWVzIjpbImNoYW5nZXMiLCJjb250YWluZXIiLCJ3aW5kb3ciLCJhcHBDb250YWluZXIiLCJkZXNpZ25fYXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRlc2lnbl90aXRsZSIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwib29wc0J0biIsIm9uY2xpY2siLCJsZW5ndGgiLCJlbGVtZW50Iiwic3R5bGUiLCJmaWxsIiwicHJldmlvdXNDb2xvciIsInBvcCIsImxhcmdlUHVtcCIsInF1ZXJ5U2VsZWN0b3IiLCJsYXJnZUZsYXQiLCJsYXJnZVNua3IiLCJhcHBlbmQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5SW1hZ2UiLCJldiIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImRpc3BsYXkiLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/design_area.js\n");

/***/ }),

/***/ "./src/scripts/palette.js":
/*!********************************!*\
  !*** ./src/scripts/palette.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changes: function() { return /* binding */ changes; },\n/* harmony export */   init: function() { return /* binding */ init; }\n/* harmony export */ });\nconst container = window.appContainer;\n//add palette to page\nconst palette = document.createElement(\"div\");\npalette.setAttribute(\"class\", \"palette box-borders\");\n// palette.innerText = \"Pick a color\" + \"&rarr;\";\nconst span = document.createElement(\"label\");\nconst textNode = document.createTextNode(\"Pick a color \");\nspan.appendChild(textNode);\n\n// const arrowNode = document.createTextNode(\" \" + \"\\u2192\"); // Unicode character code for the right arrow\n// span.appendChild(arrowNode);\n\n// document.body.appendChild(span);\n\npalette.appendChild(span);\ncontainer.appendChild(palette);\n\n//color picker\nconst colorPicker = document.createElement(\"input\");\ncolorPicker.setAttribute(\"type\", \"color\");\ncolorPicker.setAttribute(\"class\", \"colorPicker\");\ncolorPicker.setAttribute(\"value\", \"#ffffff\");\npalette.append(colorPicker);\n\n//div to store colors picked by user\nconst pickedColors = document.createElement(\"div\");\npickedColors.setAttribute(\"class\", \"pickedColors\");\npalette.append(pickedColors);\nlet currentColor;\ncolorPicker.onchange = function () {\n  currentColor = colorPicker.value;\n  let i = 0;\n  let previousColor = document.createElement(\"div\");\n  previousColor.setAttribute(\"class\", \"prevColor\");\n  previousColor.style.backgroundColor = currentColor;\n  for (let i = 0; i < 16; i++) {\n    pickedColors.appendChild(previousColor);\n  }\n};\npickedColors.onclick = function (event) {\n  currentColor = event.target.style.backgroundColor;\n};\nconst paths = document.querySelectorAll(\"path\");\nlet changes = [];\nlet orgColor = \"#ffffff\";\npaths.forEach(path => {\n  path.onclick = function (event) {\n    orgColor = event.target.style.fill;\n    const action = {\n      element: event.target,\n      previousColor: orgColor\n    };\n\n    // console.log(changes);\n    event.target.style.fill = currentColor;\n    changes.push(action);\n  };\n});\nfunction init(container, changes) {\n  // Use the container element for sidebar initialization\n  // ...\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFFSyxTQUFTRyxJQUFJQSxDQUFDbEMsU0FBUyxFQUFFMEIsT0FBTyxFQUFFO0VBQ3hDO0VBQ0E7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1lvdW5pcXVlRGVzaWducy8uL3NyYy9zY3JpcHRzL3BhbGV0dGUuanM/ODg4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWluZXIgPSB3aW5kb3cuYXBwQ29udGFpbmVyO1xuLy9hZGQgcGFsZXR0ZSB0byBwYWdlXG5jb25zdCBwYWxldHRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxucGFsZXR0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhbGV0dGUgYm94LWJvcmRlcnNcIik7XG4vLyBwYWxldHRlLmlubmVyVGV4dCA9IFwiUGljayBhIGNvbG9yXCIgKyBcIiZyYXJyO1wiO1xuY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlBpY2sgYSBjb2xvciBcIik7XG5zcGFuLmFwcGVuZENoaWxkKHRleHROb2RlKTtcblxuLy8gY29uc3QgYXJyb3dOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgXCIgKyBcIlxcdTIxOTJcIik7IC8vIFVuaWNvZGUgY2hhcmFjdGVyIGNvZGUgZm9yIHRoZSByaWdodCBhcnJvd1xuLy8gc3Bhbi5hcHBlbmRDaGlsZChhcnJvd05vZGUpO1xuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5wYWxldHRlLmFwcGVuZENoaWxkKHNwYW4pO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQocGFsZXR0ZSk7XG5cbi8vY29sb3IgcGlja2VyXG5jb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbG9yUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbmNvbG9yUGlja2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29sb3JQaWNrZXJcIik7XG5jb2xvclBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiNmZmZmZmZcIik7XG5cbnBhbGV0dGUuYXBwZW5kKGNvbG9yUGlja2VyKTtcblxuLy9kaXYgdG8gc3RvcmUgY29sb3JzIHBpY2tlZCBieSB1c2VyXG5jb25zdCBwaWNrZWRDb2xvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGlja2VkQ29sb3JzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGlja2VkQ29sb3JzXCIpO1xucGFsZXR0ZS5hcHBlbmQocGlja2VkQ29sb3JzKTtcblxubGV0IGN1cnJlbnRDb2xvcjtcbmNvbG9yUGlja2VyLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRjdXJyZW50Q29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcblx0bGV0IGkgPSAwO1xuXHRsZXQgcHJldmlvdXNDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0cHJldmlvdXNDb2xvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByZXZDb2xvclwiKTtcblx0cHJldmlvdXNDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyZW50Q29sb3I7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHRcdHBpY2tlZENvbG9ycy5hcHBlbmRDaGlsZChwcmV2aW91c0NvbG9yKTtcblx0fVxufTtcblxucGlja2VkQ29sb3JzLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0Y3VycmVudENvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbn07XG5cbmNvbnN0IHBhdGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInBhdGhcIik7XG5leHBvcnQgbGV0IGNoYW5nZXMgPSBbXTtcbmxldCBvcmdDb2xvciA9IFwiI2ZmZmZmZlwiO1xuXG5wYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG5cdHBhdGgub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdG9yZ0NvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmZpbGw7XG5cblx0XHRjb25zdCBhY3Rpb24gPSB7XG5cdFx0XHRlbGVtZW50OiBldmVudC50YXJnZXQsXG5cdFx0XHRwcmV2aW91c0NvbG9yOiBvcmdDb2xvcixcblx0XHR9O1xuXG5cdFx0Ly8gY29uc29sZS5sb2coY2hhbmdlcyk7XG5cdFx0ZXZlbnQudGFyZ2V0LnN0eWxlLmZpbGwgPSBjdXJyZW50Q29sb3I7XG5cdFx0Y2hhbmdlcy5wdXNoKGFjdGlvbik7XG5cdH07XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoY29udGFpbmVyLCBjaGFuZ2VzKSB7XG5cdC8vIFVzZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgZm9yIHNpZGViYXIgaW5pdGlhbGl6YXRpb25cblx0Ly8gLi4uXG59XG4iXSwibmFtZXMiOlsiY29udGFpbmVyIiwid2luZG93IiwiYXBwQ29udGFpbmVyIiwicGFsZXR0ZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInNwYW4iLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJjb2xvclBpY2tlciIsImFwcGVuZCIsInBpY2tlZENvbG9ycyIsImN1cnJlbnRDb2xvciIsIm9uY2hhbmdlIiwidmFsdWUiLCJpIiwicHJldmlvdXNDb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwib25jbGljayIsImV2ZW50IiwidGFyZ2V0IiwicGF0aHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hhbmdlcyIsIm9yZ0NvbG9yIiwiZm9yRWFjaCIsInBhdGgiLCJmaWxsIiwiYWN0aW9uIiwiZWxlbWVudCIsInB1c2giLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/palette.js\n");

/***/ })

}]);