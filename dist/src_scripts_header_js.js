"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkYouniqueDesigns"] = self["webpackChunkYouniqueDesigns"] || []).push([["src_scripts_header_js"],{

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: function() { return /* binding */ init; }\n/* harmony export */ });\nfunction init(contentWrapper) {\n  // const container = window.appContainer;\n\n  //create header div for the top of page with class of header\n  const header = document.createElement(\"div\");\n  header.setAttribute(\"class\", \"header box-borders\");\n  contentWrapper.appendChild(header);\n\n  // //add wave bkgrd image to header div\n  header.style.backgroundImage = \"url('assets/images/bg_logo.png')\";\n  // header.style.backgroundImage = \"url('assets/images/waves.svg')\";\n\n  //create contactLinksDiv(LEFT) and playBtmDiv(RIGHT) and add to the header btm div\n  const contactLinksDiv = document.createElement(\"div\");\n  const playBtnDiv = document.createElement(\"div\");\n  playBtnDiv.setAttribute(\"class\", \"playBtnDiv\");\n  header.append(contactLinksDiv, playBtnDiv);\n  // header.append(contactLinksDiv);\n\n  //create link for gitHub page\n  const gitlink = document.createElement(\"a\"); // create the link\n  gitlink.setAttribute(\"href\", \"https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git\");\n\n  //create gitHub logo image with class of logo\n  const github_logo = document.createElement(\"img\");\n  github_logo.src = \"assets/images/github.svg\";\n  // github_logo.src = \"assets/images/waves.svg\";\n  gitlink.setAttribute(\"class\", \"logo\");\n  gitlink.setAttribute(\"alt\", \"gitHub logo\");\n  gitlink.setAttribute(\"aria-label\", \"gitHub logo and link\");\n  //add the gitHub logo image to the gitHub link\n  gitlink.append(github_logo);\n\n  //create link for LinkedIn page\n  const linkedin_link = document.createElement(\"a\");\n  linkedin_link.setAttribute(\"href\", \"https://www.linkedin.com/in/tara-oliver\");\n\n  //create LinkedIn logo image with class of logo\n  const linkedin_logo = document.createElement(\"img\");\n  linkedin_logo.src = \"assets/images/linkedin.svg\";\n  linkedin_link.setAttribute(\"class\", \"logo\");\n  linkedin_link.setAttribute(\"alt\", \"LinkedIn logo\");\n  linkedin_link.setAttribute(\"aria-label\", \"LinkedIn logo and link\");\n\n  //create link for initial page\n  const initialLink = document.createElement(\"a\"); // create the link\n  initialLink.setAttribute(\"href\", \"https://tara-oliver.vercel.app/\");\n\n  //create initial logo image with class of logo\n  const initial_logo = document.createElement(\"img\");\n  initial_logo.src = \"assets/images/initial.svg\";\n  // initial_logo.src = \"assets/images/waves.svg\";\n  initialLink.setAttribute(\"class\", \"logo\");\n  initialLink.setAttribute(\"alt\", \"initial logo\");\n  initialLink.setAttribute(\"aria-label\", \"initial logo and link\");\n  //add the initial logo image to the initial link\n  initialLink.append(initial_logo);\n\n  //add the LinkedIn logo image to the LinkedIn link\n  linkedin_link.append(linkedin_logo);\n\n  // add LinkedIn and gitHub logos to the contactLinks div(left side of header btm)\n  contactLinksDiv.append(gitlink, linkedin_link, initialLink);\n\n  //create how to play button with classes btn and playbtn\n  const howToPlayBtn = document.createElement(\"button\");\n  howToPlayBtn.setAttribute(\"class\", \"btn playbtn\");\n  howToPlayBtn.setAttribute(\"id\", \"modalBtn\");\n  howToPlayBtn.innerText = \"How to Play\";\n\n  // add play button to the playbtn div(right side of header btm)\n  playBtnDiv.appendChild(howToPlayBtn);\n  // contactLinksDiv.appendChild(howToPlayBtn);\n\n  //add header  btm div to the header\n  // header.append(headerBtm);\n\n  //ADD MODAL TO PAGE\n\n  // howToPlayBtn.onclick = function () {\n  // \tmodal.style.display = \"block\";\n  // \tcontainer.style.filter = \"blur(4px)\";\n  // \tmodal.style.filter = \"none\";\n  // };\n\n  // closebtn.onclick = function () {\n  // \tmodal.style.display = \"none\";\n\n  // \t// Remove blur when modal closes\n  // \tcontainer.style.filter = \"none\";\n  // };\n  // window.onclick = function (event) {\n  // \tif (event.target == modal) {\n  // \t\tmodal.style.display = \"none\";\n  // \t}\n  // };\n}\n// linkedin_link.setAttribute(\"class\", \"logo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7RUFFM0Q7RUFDQSxNQUFNRSxZQUFZLEdBQUdoQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDckRlLFlBQVksQ0FBQ2QsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7RUFDakRjLFlBQVksQ0FBQ2QsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7RUFDM0NjLFlBQVksQ0FBQ0MsU0FBUyxHQUFHLGFBQWE7O0VBRXRDO0VBQ0FWLFVBQVUsQ0FBQ0osV0FBVyxDQUFDYSxZQUFZLENBQUM7RUFDcEM7O0VBRUE7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Zb3VuaXF1ZURlc2lnbnMvLi9zcmMvc2NyaXB0cy9oZWFkZXIuanM/NTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaW5pdChjb250ZW50V3JhcHBlcikge1xuXHQvLyBjb25zdCBjb250YWluZXIgPSB3aW5kb3cuYXBwQ29udGFpbmVyO1xuXG5cdC8vY3JlYXRlIGhlYWRlciBkaXYgZm9yIHRoZSB0b3Agb2YgcGFnZSB3aXRoIGNsYXNzIG9mIGhlYWRlclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRoZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXIgYm94LWJvcmRlcnNcIik7XG5cblx0Y29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXHQvLyAvL2FkZCB3YXZlIGJrZ3JkIGltYWdlIHRvIGhlYWRlciBkaXZcblx0aGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdhc3NldHMvaW1hZ2VzL2JnX2xvZ28ucG5nJylcIjtcblx0Ly8gaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdhc3NldHMvaW1hZ2VzL3dhdmVzLnN2ZycpXCI7XG5cblx0Ly9jcmVhdGUgY29udGFjdExpbmtzRGl2KExFRlQpIGFuZCBwbGF5QnRtRGl2KFJJR0hUKSBhbmQgYWRkIHRvIHRoZSBoZWFkZXIgYnRtIGRpdlxuXHRjb25zdCBjb250YWN0TGlua3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBwbGF5QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cGxheUJ0bkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsYXlCdG5EaXZcIik7XG5cdGhlYWRlci5hcHBlbmQoY29udGFjdExpbmtzRGl2LCBwbGF5QnRuRGl2KTtcblx0Ly8gaGVhZGVyLmFwcGVuZChjb250YWN0TGlua3NEaXYpO1xuXG5cdC8vY3JlYXRlIGxpbmsgZm9yIGdpdEh1YiBwYWdlXG5cdGNvbnN0IGdpdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTsgLy8gY3JlYXRlIHRoZSBsaW5rXG5cdGdpdGxpbmsuc2V0QXR0cmlidXRlKFxuXHRcdFwiaHJlZlwiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL3RhcmFvMTE4NS9ZT1UtTklRVUUtREVTSUdOUy5naXRcIlxuXHQpO1xuXG5cdC8vY3JlYXRlIGdpdEh1YiBsb2dvIGltYWdlIHdpdGggY2xhc3Mgb2YgbG9nb1xuXHRjb25zdCBnaXRodWJfbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGdpdGh1Yl9sb2dvLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9naXRodWIuc3ZnXCI7XG5cdC8vIGdpdGh1Yl9sb2dvLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy93YXZlcy5zdmdcIjtcblx0Z2l0bGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG5cdGdpdGxpbmsuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiZ2l0SHViIGxvZ29cIik7XG5cdGdpdGxpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcImdpdEh1YiBsb2dvIGFuZCBsaW5rXCIpO1xuXHQvL2FkZCB0aGUgZ2l0SHViIGxvZ28gaW1hZ2UgdG8gdGhlIGdpdEh1YiBsaW5rXG5cdGdpdGxpbmsuYXBwZW5kKGdpdGh1Yl9sb2dvKTtcblxuXHQvL2NyZWF0ZSBsaW5rIGZvciBMaW5rZWRJbiBwYWdlXG5cdGNvbnN0IGxpbmtlZGluX2xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGlua2VkaW5fbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RhcmEtb2xpdmVyXCIpO1xuXG5cdC8vY3JlYXRlIExpbmtlZEluIGxvZ28gaW1hZ2Ugd2l0aCBjbGFzcyBvZiBsb2dvXG5cdGNvbnN0IGxpbmtlZGluX2xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRsaW5rZWRpbl9sb2dvLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9saW5rZWRpbi5zdmdcIjtcblx0bGlua2VkaW5fbGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG5cdGxpbmtlZGluX2xpbmsuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiTGlua2VkSW4gbG9nb1wiKTtcblx0bGlua2VkaW5fbGluay5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiTGlua2VkSW4gbG9nbyBhbmQgbGlua1wiKTtcblxuXHQvL2NyZWF0ZSBsaW5rIGZvciBpbml0aWFsIHBhZ2Vcblx0Y29uc3QgaW5pdGlhbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTsgLy8gY3JlYXRlIHRoZSBsaW5rXG5cdGluaXRpYWxMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3RhcmEtb2xpdmVyLnZlcmNlbC5hcHAvXCIpO1xuXG5cdC8vY3JlYXRlIGluaXRpYWwgbG9nbyBpbWFnZSB3aXRoIGNsYXNzIG9mIGxvZ29cblx0Y29uc3QgaW5pdGlhbF9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aW5pdGlhbF9sb2dvLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9pbml0aWFsLnN2Z1wiO1xuXHQvLyBpbml0aWFsX2xvZ28uc3JjID0gXCJhc3NldHMvaW1hZ2VzL3dhdmVzLnN2Z1wiO1xuXHRpbml0aWFsTGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG5cdGluaXRpYWxMaW5rLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImluaXRpYWwgbG9nb1wiKTtcblx0aW5pdGlhbExpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcImluaXRpYWwgbG9nbyBhbmQgbGlua1wiKTtcblx0Ly9hZGQgdGhlIGluaXRpYWwgbG9nbyBpbWFnZSB0byB0aGUgaW5pdGlhbCBsaW5rXG5cdGluaXRpYWxMaW5rLmFwcGVuZChpbml0aWFsX2xvZ28pO1xuXG5cdC8vYWRkIHRoZSBMaW5rZWRJbiBsb2dvIGltYWdlIHRvIHRoZSBMaW5rZWRJbiBsaW5rXG5cdGxpbmtlZGluX2xpbmsuYXBwZW5kKGxpbmtlZGluX2xvZ28pO1xuXG5cdC8vIGFkZCBMaW5rZWRJbiBhbmQgZ2l0SHViIGxvZ29zIHRvIHRoZSBjb250YWN0TGlua3MgZGl2KGxlZnQgc2lkZSBvZiBoZWFkZXIgYnRtKVxuXHRjb250YWN0TGlua3NEaXYuYXBwZW5kKGdpdGxpbmssIGxpbmtlZGluX2xpbmssIGluaXRpYWxMaW5rKTtcblxuXHQvL2NyZWF0ZSBob3cgdG8gcGxheSBidXR0b24gd2l0aCBjbGFzc2VzIGJ0biBhbmQgcGxheWJ0blxuXHRjb25zdCBob3dUb1BsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRob3dUb1BsYXlCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gcGxheWJ0blwiKTtcblx0aG93VG9QbGF5QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWxCdG5cIik7XG5cdGhvd1RvUGxheUJ0bi5pbm5lclRleHQgPSBcIkhvdyB0byBQbGF5XCI7XG5cblx0Ly8gYWRkIHBsYXkgYnV0dG9uIHRvIHRoZSBwbGF5YnRuIGRpdihyaWdodCBzaWRlIG9mIGhlYWRlciBidG0pXG5cdHBsYXlCdG5EaXYuYXBwZW5kQ2hpbGQoaG93VG9QbGF5QnRuKTtcblx0Ly8gY29udGFjdExpbmtzRGl2LmFwcGVuZENoaWxkKGhvd1RvUGxheUJ0bik7XG5cblx0Ly9hZGQgaGVhZGVyICBidG0gZGl2IHRvIHRoZSBoZWFkZXJcblx0Ly8gaGVhZGVyLmFwcGVuZChoZWFkZXJCdG0pO1xuXG5cdC8vQUREIE1PREFMIFRPIFBBR0VcblxuXHQvLyBob3dUb1BsYXlCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHQvLyBcdGNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJsdXIoNHB4KVwiO1xuXHQvLyBcdG1vZGFsLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuXHQvLyB9O1xuXG5cdC8vIGNsb3NlYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdC8vIFx0Ly8gUmVtb3ZlIGJsdXIgd2hlbiBtb2RhbCBjbG9zZXNcblx0Ly8gXHRjb250YWluZXIuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG5cdC8vIH07XG5cdC8vIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdC8vIFx0aWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuXHQvLyBcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHQvLyBcdH1cblx0Ly8gfTtcbn1cbi8vIGxpbmtlZGluX2xpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuIl0sIm5hbWVzIjpbImluaXQiLCJjb250ZW50V3JhcHBlciIsImhlYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb250YWN0TGlua3NEaXYiLCJwbGF5QnRuRGl2IiwiYXBwZW5kIiwiZ2l0bGluayIsImdpdGh1Yl9sb2dvIiwic3JjIiwibGlua2VkaW5fbGluayIsImxpbmtlZGluX2xvZ28iLCJpbml0aWFsTGluayIsImluaXRpYWxfbG9nbyIsImhvd1RvUGxheUJ0biIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/header.js\n");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: function() { return /* binding */ init; }\n/* harmony export */ });\nfunction init(contentWrapper) {\n  // const container = window.appContainer;\n\n  //create header div for the top of page with class of header\n  const header = document.createElement(\"div\");\n  header.setAttribute(\"class\", \"header box-borders\");\n  contentWrapper.appendChild(header);\n\n  // //add wave bkgrd image to header div\n  header.style.backgroundImage = \"url('assets/images/bg_logo.png')\";\n  // header.style.backgroundImage = \"url('assets/images/waves.svg')\";\n\n  //create contactLinksDiv(LEFT) and playBtmDiv(RIGHT) and add to the header btm div\n  const contactLinksDiv = document.createElement(\"div\");\n  const playBtnDiv = document.createElement(\"div\");\n  playBtnDiv.setAttribute(\"class\", \"playBtnDiv\");\n  header.append(contactLinksDiv, playBtnDiv);\n  // header.append(contactLinksDiv);\n\n  //////create link for gitHub page/////\n  const gitlink = document.createElement(\"a\"); // create the link\n  gitlink.setAttribute(\"href\", \"https://github.com/tarao1185/YOU-NIQUE-DESIGNS.git\");\n\n  //////create gitHub logo image with class of logo//////\n  const github_logo = document.createElement(\"img\");\n  github_logo.src = \"assets/images/github.svg\";\n  // github_logo.src = \"assets/images/waves.svg\";\n  gitlink.setAttribute(\"class\", \"logo\");\n  gitlink.setAttribute(\"alt\", \"gitHub logo\");\n  gitlink.setAttribute(\"aria-label\", \"gitHub logo and link\");\n  //add the gitHub logo image to the gitHub link\n  gitlink.append(github_logo);\n\n  //////create link for LinkedIn page//////\n  const linkedin_link = document.createElement(\"a\");\n  linkedin_link.setAttribute(\"href\", \"https://www.linkedin.com/in/tara-oliver\");\n\n  //////create LinkedIn logo image with class of logo//////\n  const linkedin_logo = document.createElement(\"img\");\n  linkedin_logo.src = \"assets/images/linkedin.svg\";\n  linkedin_link.setAttribute(\"class\", \"logo\");\n  linkedin_link.setAttribute(\"alt\", \"LinkedIn logo\");\n  linkedin_link.setAttribute(\"aria-label\", \"LinkedIn logo and link\");\n\n  //create link for portfolio page\n  const initial_link = document.createElement(\"a\"); // create the link\n  gitlink.setAttribute(\"href\", \"https://tara-oliver.vercel.app/\");\n\n  //create initial logo image with class of logo\n  const initial_logo = document.createElement(\"img\");\n  initial_logo.src = \"assets/images/initial.svg\";\n  // github_logo.src = \"assets/images/waves.svg\";\n  initial_link.setAttribute(\"class\", \"logo\");\n  initial_link.setAttribute(\"alt\", \"personal logo\");\n  initial_link.setAttribute(\"aria-label\", \"personal logo and link\");\n\n  //add the gitHub logo image to the gitHub link\n  gitlink.append(github_logo);\n\n  //add the LinkedIn logo image to the LinkedIn link\n  linkedin_link.append(linkedin_logo);\n\n  //add the initial logo image to the initial link\n  initial_link.append(initial_logo);\n\n  // add LinkedIn and gitHub logos to the contactLinks div(left side of header btm)\n  contactLinksDiv.append(gitlink, linkedin_link, initial_link);\n\n  //create how to play button with classes btn and playbtn\n  const howToPlayBtn = document.createElement(\"button\");\n  howToPlayBtn.setAttribute(\"class\", \"btn playbtn\");\n  howToPlayBtn.setAttribute(\"id\", \"modalBtn\");\n  howToPlayBtn.innerText = \"How to Play\";\n\n  // add play button to the playbtn div(right side of header btm)\n  playBtnDiv.appendChild(howToPlayBtn);\n  // contactLinksDiv.appendChild(howToPlayBtn);\n\n  //add header  btm div to the header\n  // header.append(headerBtm);\n\n  //ADD MODAL TO PAGE\n\n  // howToPlayBtn.onclick = function () {\n  // \tmodal.style.display = \"block\";\n  // \tcontainer.style.filter = \"blur(4px)\";\n  // \tmodal.style.filter = \"none\";\n  // };\n\n  // closebtn.onclick = function () {\n  // \tmodal.style.display = \"none\";\n\n  // \t// Remove blur when modal closes\n  // \tcontainer.style.filter = \"none\";\n  // };\n  // window.onclick = function (event) {\n  // \tif (event.target == modal) {\n  // \t\tmodal.style.display = \"none\";\n  // \t}\n  // };\n}\n// linkedin_link.setAttribute(\"class\", \"logo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxDQUFDRSxNQUFNLENBQUNDLE9BQU8sRUFBRUcsYUFBYSxFQUFFRSxZQUFZLENBQUM7O0VBRTVEO0VBQ0EsTUFBTUUsWUFBWSxHQUFHaEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ3JEZSxZQUFZLENBQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO0VBQ2pEYyxZQUFZLENBQUNkLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO0VBQzNDYyxZQUFZLENBQUNDLFNBQVMsR0FBRyxhQUFhOztFQUV0QztFQUNBVixVQUFVLENBQUNKLFdBQVcsQ0FBQ2EsWUFBWSxDQUFDO0VBQ3BDOztFQUVBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vWW91bmlxdWVEZXNpZ25zLy4vc3JjL3NjcmlwdHMvaGVhZGVyLmpzPzUzOTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluaXQoY29udGVudFdyYXBwZXIpIHtcblx0Ly8gY29uc3QgY29udGFpbmVyID0gd2luZG93LmFwcENvbnRhaW5lcjtcblxuXHQvL2NyZWF0ZSBoZWFkZXIgZGl2IGZvciB0aGUgdG9wIG9mIHBhZ2Ugd2l0aCBjbGFzcyBvZiBoZWFkZXJcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyIGJveC1ib3JkZXJzXCIpO1xuXG5cdGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblx0Ly8gLy9hZGQgd2F2ZSBia2dyZCBpbWFnZSB0byBoZWFkZXIgZGl2XG5cdGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL2ltYWdlcy9iZ19sb2dvLnBuZycpXCI7XG5cdC8vIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL2ltYWdlcy93YXZlcy5zdmcnKVwiO1xuXG5cdC8vY3JlYXRlIGNvbnRhY3RMaW5rc0RpdihMRUZUKSBhbmQgcGxheUJ0bURpdihSSUdIVCkgYW5kIGFkZCB0byB0aGUgaGVhZGVyIGJ0bSBkaXZcblx0Y29uc3QgY29udGFjdExpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgcGxheUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHBsYXlCdG5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5QnRuRGl2XCIpO1xuXHRoZWFkZXIuYXBwZW5kKGNvbnRhY3RMaW5rc0RpdiwgcGxheUJ0bkRpdik7XG5cdC8vIGhlYWRlci5hcHBlbmQoY29udGFjdExpbmtzRGl2KTtcblxuXHQvLy8vLy9jcmVhdGUgbGluayBmb3IgZ2l0SHViIHBhZ2UvLy8vL1xuXHRjb25zdCBnaXRsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7IC8vIGNyZWF0ZSB0aGUgbGlua1xuXHRnaXRsaW5rLnNldEF0dHJpYnV0ZShcblx0XHRcImhyZWZcIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS90YXJhbzExODUvWU9VLU5JUVVFLURFU0lHTlMuZ2l0XCJcblx0KTtcblxuXHQvLy8vLy9jcmVhdGUgZ2l0SHViIGxvZ28gaW1hZ2Ugd2l0aCBjbGFzcyBvZiBsb2dvLy8vLy8vXG5cdGNvbnN0IGdpdGh1Yl9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0aHViX2xvZ28uc3JjID0gXCJhc3NldHMvaW1hZ2VzL2dpdGh1Yi5zdmdcIjtcblx0Ly8gZ2l0aHViX2xvZ28uc3JjID0gXCJhc3NldHMvaW1hZ2VzL3dhdmVzLnN2Z1wiO1xuXHRnaXRsaW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nb1wiKTtcblx0Z2l0bGluay5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJnaXRIdWIgbG9nb1wiKTtcblx0Z2l0bGluay5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiZ2l0SHViIGxvZ28gYW5kIGxpbmtcIik7XG5cdC8vYWRkIHRoZSBnaXRIdWIgbG9nbyBpbWFnZSB0byB0aGUgZ2l0SHViIGxpbmtcblx0Z2l0bGluay5hcHBlbmQoZ2l0aHViX2xvZ28pO1xuXG5cdC8vLy8vL2NyZWF0ZSBsaW5rIGZvciBMaW5rZWRJbiBwYWdlLy8vLy8vXG5cdGNvbnN0IGxpbmtlZGluX2xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGlua2VkaW5fbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RhcmEtb2xpdmVyXCIpO1xuXG5cdC8vLy8vL2NyZWF0ZSBMaW5rZWRJbiBsb2dvIGltYWdlIHdpdGggY2xhc3Mgb2YgbG9nby8vLy8vL1xuXHRjb25zdCBsaW5rZWRpbl9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bGlua2VkaW5fbG9nby5zcmMgPSBcImFzc2V0cy9pbWFnZXMvbGlua2VkaW4uc3ZnXCI7XG5cdGxpbmtlZGluX2xpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuXHRsaW5rZWRpbl9saW5rLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkxpbmtlZEluIGxvZ29cIik7XG5cdGxpbmtlZGluX2xpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkxpbmtlZEluIGxvZ28gYW5kIGxpbmtcIik7XG5cblx0Ly9jcmVhdGUgbGluayBmb3IgcG9ydGZvbGlvIHBhZ2Vcblx0Y29uc3QgaW5pdGlhbF9saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7IC8vIGNyZWF0ZSB0aGUgbGlua1xuXHRnaXRsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3RhcmEtb2xpdmVyLnZlcmNlbC5hcHAvXCIpO1xuXG5cdC8vY3JlYXRlIGluaXRpYWwgbG9nbyBpbWFnZSB3aXRoIGNsYXNzIG9mIGxvZ29cblx0Y29uc3QgaW5pdGlhbF9sb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aW5pdGlhbF9sb2dvLnNyYyA9IFwiYXNzZXRzL2ltYWdlcy9pbml0aWFsLnN2Z1wiO1xuXHQvLyBnaXRodWJfbG9nby5zcmMgPSBcImFzc2V0cy9pbWFnZXMvd2F2ZXMuc3ZnXCI7XG5cdGluaXRpYWxfbGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG5cdGluaXRpYWxfbGluay5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwZXJzb25hbCBsb2dvXCIpO1xuXHRpbml0aWFsX2xpbmsuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcInBlcnNvbmFsIGxvZ28gYW5kIGxpbmtcIik7XG5cblx0Ly9hZGQgdGhlIGdpdEh1YiBsb2dvIGltYWdlIHRvIHRoZSBnaXRIdWIgbGlua1xuXHRnaXRsaW5rLmFwcGVuZChnaXRodWJfbG9nbyk7XG5cblx0Ly9hZGQgdGhlIExpbmtlZEluIGxvZ28gaW1hZ2UgdG8gdGhlIExpbmtlZEluIGxpbmtcblx0bGlua2VkaW5fbGluay5hcHBlbmQobGlua2VkaW5fbG9nbyk7XG5cblx0Ly9hZGQgdGhlIGluaXRpYWwgbG9nbyBpbWFnZSB0byB0aGUgaW5pdGlhbCBsaW5rXG5cdGluaXRpYWxfbGluay5hcHBlbmQoaW5pdGlhbF9sb2dvKTtcblxuXHQvLyBhZGQgTGlua2VkSW4gYW5kIGdpdEh1YiBsb2dvcyB0byB0aGUgY29udGFjdExpbmtzIGRpdihsZWZ0IHNpZGUgb2YgaGVhZGVyIGJ0bSlcblx0Y29udGFjdExpbmtzRGl2LmFwcGVuZChnaXRsaW5rLCBsaW5rZWRpbl9saW5rLCBpbml0aWFsX2xpbmspO1xuXG5cdC8vY3JlYXRlIGhvdyB0byBwbGF5IGJ1dHRvbiB3aXRoIGNsYXNzZXMgYnRuIGFuZCBwbGF5YnRuXG5cdGNvbnN0IGhvd1RvUGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGhvd1RvUGxheUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBwbGF5YnRuXCIpO1xuXHRob3dUb1BsYXlCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbEJ0blwiKTtcblx0aG93VG9QbGF5QnRuLmlubmVyVGV4dCA9IFwiSG93IHRvIFBsYXlcIjtcblxuXHQvLyBhZGQgcGxheSBidXR0b24gdG8gdGhlIHBsYXlidG4gZGl2KHJpZ2h0IHNpZGUgb2YgaGVhZGVyIGJ0bSlcblx0cGxheUJ0bkRpdi5hcHBlbmRDaGlsZChob3dUb1BsYXlCdG4pO1xuXHQvLyBjb250YWN0TGlua3NEaXYuYXBwZW5kQ2hpbGQoaG93VG9QbGF5QnRuKTtcblxuXHQvL2FkZCBoZWFkZXIgIGJ0bSBkaXYgdG8gdGhlIGhlYWRlclxuXHQvLyBoZWFkZXIuYXBwZW5kKGhlYWRlckJ0bSk7XG5cblx0Ly9BREQgTU9EQUwgVE8gUEFHRVxuXG5cdC8vIGhvd1RvUGxheUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHQvLyBcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdC8vIFx0Y29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiYmx1cig0cHgpXCI7XG5cdC8vIFx0bW9kYWwuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG5cdC8vIH07XG5cblx0Ly8gY2xvc2VidG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gXHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0Ly8gXHQvLyBSZW1vdmUgYmx1ciB3aGVuIG1vZGFsIGNsb3Nlc1xuXHQvLyBcdGNvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcblx0Ly8gfTtcblx0Ly8gd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0Ly8gXHRpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG5cdC8vIFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdC8vIFx0fVxuXHQvLyB9O1xufVxuLy8gbGlua2VkaW5fbGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG4iXSwibmFtZXMiOlsiaW5pdCIsImNvbnRlbnRXcmFwcGVyIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNvbnRhY3RMaW5rc0RpdiIsInBsYXlCdG5EaXYiLCJhcHBlbmQiLCJnaXRsaW5rIiwiZ2l0aHViX2xvZ28iLCJzcmMiLCJsaW5rZWRpbl9saW5rIiwibGlua2VkaW5fbG9nbyIsImluaXRpYWxfbGluayIsImluaXRpYWxfbG9nbyIsImhvd1RvUGxheUJ0biIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/header.js\n");
>>>>>>> 1d9bb52151d663e1cea3970af65b03ac5032b8cd

/***/ })

}]);