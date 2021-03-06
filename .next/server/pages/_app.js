module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/theme */ \"./src/theme/index.js\");\n/* harmony import */ var _src_theme_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/theme/GlobalStyle */ \"./src/theme/GlobalStyle/index.js\");\nvar _jsxFileName = \"/Users/apple/Downloads/Projetos/Projeto Jam-Stack/Project-portifolio/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\n // eslint-disable-next-line react/prop-types\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return (// eslint-disable-next-line react/jsx-filename-extension\n    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }, __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }, \"Portif\\xF3lio Marcos\"), __jsx(\"link\", {\n      rel: \"preconnect\",\n      href: \"https://fonts.gstatic.com\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }), __jsx(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    })), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n      theme: _src_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }, __jsx(_src_theme_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }), __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    }))))\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDZSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDcEQsU0FDRTtBQUNBLHVFQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFFRTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQywyQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFDRSxVQUFJLEVBQUMsMkpBRFA7QUFFRSxTQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FERixFQVNFLE1BQUMsK0RBQUQ7QUFBZSxXQUFLLEVBQUVDLGtEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkYsQ0FURjtBQUZGO0FBaUJEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zcmMvdGhlbWUnO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL3NyYy90aGVtZS9HbG9iYWxTdHlsZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb25cbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb3J0aWbDs2xpbyBNYXJjb3M8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/theme/GlobalStyle/index.js":
/*!****************************************!*\
  !*** ./src/theme/GlobalStyle/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n* {\n  box-sizing: border-box;\n}\n${styled_normalize__WEBPACK_IMPORTED_MODULE_1__[\"normalize\"]}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: ${({\n  theme\n}) => theme.fontFamily}\n}\n/* Full height layout */\nhtml, body {\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n}\n#__next {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvR2xvYmFsU3R5bGUvaW5kZXguanM/MDY1NSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwidGhlbWUiLCJmb250RmFtaWx5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEVBQUVDLDBEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxVQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdEJBO0FBd0JlSiwwRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS9HbG9iYWxTdHlsZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiR7bm9ybWFsaXplfVxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRGYW1pbHl9XG59XG4vKiBGdWxsIGhlaWdodCBsYXlvdXQgKi9cbmh0bWwsIGJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jX19uZXh0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/GlobalStyle/index.js\n");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: breakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakpoints\", function() { return breakpoints; });\n/* harmony import */ var _variantTypography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variantTypography */ \"./src/theme/variantTypography.js\");\n\nconst colors = {\n  background: {\n    light: {\n      color: '#FFFFFF'\n    },\n    main: {\n      color: '#F2F2F2'\n    }\n  },\n  borders: {\n    main: {\n      color: '#F1F1F1'\n    }\n  },\n  primary: {\n    main: {\n      color: '#D7385E',\n      contrastText: '#fff'\n    }\n  },\n  secondary: {\n    main: {\n      color: '#FB7B6B',\n      contrastText: '#fff'\n    }\n  },\n  tertiary: {\n    main: {\n      color: '#070C0E',\n      contrastText: '#fff'\n    },\n    light: {\n      color: '#88989E',\n      contrastText: '#fff'\n    }\n  },\n  modes: {\n    dark: {}\n  }\n};\nconst breakpoints = {\n  xs: 0,\n  sm: 480,\n  md: 768,\n  lg: 992,\n  xl: 1200\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  colors,\n  typographyVariants: _variantTypography__WEBPACK_IMPORTED_MODULE_0__[\"typographyVariants\"],\n  breakpoints,\n  borderRadius: '8px',\n  fontFamily: \"'Rubik', sans-serif\",\n  transition: '200ms ease-in-out'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanM/MGJlNyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwibGlnaHQiLCJjb2xvciIsIm1haW4iLCJib3JkZXJzIiwicHJpbWFyeSIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwibW9kZXMiLCJkYXJrIiwiYnJlYWtwb2ludHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwidHlwb2dyYXBoeVZhcmlhbnRzIiwiYm9yZGVyUmFkaXVzIiwiZm9udEZhbWlseSIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFlBQVUsRUFBRTtBQUNWQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFO0FBREYsS0FERztBQUlWQyxRQUFJLEVBQUU7QUFDSkQsV0FBSyxFQUFFO0FBREg7QUFKSSxHQURDO0FBU2JFLFNBQU8sRUFBRTtBQUNQRCxRQUFJLEVBQUU7QUFDSkQsV0FBSyxFQUFFO0FBREg7QUFEQyxHQVRJO0FBY2JHLFNBQU8sRUFBRTtBQUNQRixRQUFJLEVBQUU7QUFDSkQsV0FBSyxFQUFFLFNBREg7QUFFSkksa0JBQVksRUFBRTtBQUZWO0FBREMsR0FkSTtBQW9CYkMsV0FBUyxFQUFFO0FBQ1RKLFFBQUksRUFBRTtBQUNKRCxXQUFLLEVBQUUsU0FESDtBQUVKSSxrQkFBWSxFQUFFO0FBRlY7QUFERyxHQXBCRTtBQTBCYkUsVUFBUSxFQUFFO0FBQ1JMLFFBQUksRUFBRTtBQUNKRCxXQUFLLEVBQUUsU0FESDtBQUVKSSxrQkFBWSxFQUFFO0FBRlYsS0FERTtBQUtSTCxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLFNBREY7QUFFTEksa0JBQVksRUFBRTtBQUZUO0FBTEMsR0ExQkc7QUFvQ2JHLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUU7QUFERDtBQXBDTSxDQUFmO0FBeUNPLE1BQU1DLFdBQVcsR0FBRztBQUN6QkMsSUFBRSxFQUFFLENBRHFCO0FBRXpCQyxJQUFFLEVBQUUsR0FGcUI7QUFHekJDLElBQUUsRUFBRSxHQUhxQjtBQUl6QkMsSUFBRSxFQUFFLEdBSnFCO0FBS3pCQyxJQUFFLEVBQUU7QUFMcUIsQ0FBcEI7QUFPUTtBQUNiakIsUUFEYTtBQUVia0IsMkZBRmE7QUFHYk4sYUFIYTtBQUliTyxjQUFZLEVBQUUsS0FKRDtBQUtiQyxZQUFVLEVBQUUscUJBTEM7QUFNYkMsWUFBVSxFQUFFO0FBTkMsQ0FBZiIsImZpbGUiOiIuL3NyYy90aGVtZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cG9ncmFwaHlWYXJpYW50cyB9IGZyb20gJy4vdmFyaWFudFR5cG9ncmFwaHknO1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gIGJhY2tncm91bmQ6IHtcbiAgICBsaWdodDoge1xuICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICB9LFxuICAgIG1haW46IHtcbiAgICAgIGNvbG9yOiAnI0YyRjJGMicsXG4gICAgfSxcbiAgfSxcbiAgYm9yZGVyczoge1xuICAgIG1haW46IHtcbiAgICAgIGNvbG9yOiAnI0YxRjFGMScsXG4gICAgfSxcbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIG1haW46IHtcbiAgICAgIGNvbG9yOiAnI0Q3Mzg1RScsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxuICBzZWNvbmRhcnk6IHtcbiAgICBtYWluOiB7XG4gICAgICBjb2xvcjogJyNGQjdCNkInLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgfSxcbiAgfSxcbiAgdGVydGlhcnk6IHtcbiAgICBtYWluOiB7XG4gICAgICBjb2xvcjogJyMwNzBDMEUnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgfSxcbiAgICBsaWdodDoge1xuICAgICAgY29sb3I6ICcjODg5ODlFJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgIH0sXG4gIH0sXG4gIG1vZGVzOiB7XG4gICAgZGFyazoge30sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gIHhzOiAwLFxuICBzbTogNDgwLFxuICBtZDogNzY4LFxuICBsZzogOTkyLFxuICB4bDogMTIwMCxcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG9ycyxcbiAgdHlwb2dyYXBoeVZhcmlhbnRzLFxuICBicmVha3BvaW50cyxcbiAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgZm9udEZhbWlseTogXCInUnViaWsnLCBzYW5zLXNlcmlmXCIsXG4gIHRyYW5zaXRpb246ICcyMDBtcyBlYXNlLWluLW91dCcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/index.js\n");

/***/ }),

/***/ "./src/theme/variantTypography.js":
/*!****************************************!*\
  !*** ./src/theme/variantTypography.js ***!
  \****************************************/
/*! exports provided: typographyVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typographyVariants\", function() { return typographyVariants; });\n/* eslint-disable import/prefer-default-export */\nconst typographyVariants = {\n  // [title]\n  title: {\n    fontSize: '32px',\n    fontWeight: '700',\n    lineHeight: 1.25 // 125%\n\n  },\n  titleXS: {\n    fontSize: '24px',\n    fontWeight: '500',\n    lineHeight: 1.25 // 125%\n\n  },\n  // [subTitle]\n  subTitle: {\n    fontSize: '24px',\n    fontWeight: '500',\n    lineHeight: 1.25 // 125%\n\n  },\n  // [paragraph1]\n  paragraph1: {\n    fontSize: '16px',\n    fontWeight: '400',\n    lineHeight: 1.25 // 125%\n\n  },\n  // [paragraph2]\n  paragraph2: {\n    fontSize: '14px',\n    fontWeight: '400',\n    lineHeight: 1.25 // 125%\n\n  },\n  // [smallestException]\n  smallestException: {\n    fontSize: '12px',\n    fontWeight: '400',\n    lineHeight: 1 // 100%\n\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvdmFyaWFudFR5cG9ncmFwaHkuanM/MTJiZSJdLCJuYW1lcyI6WyJ0eXBvZ3JhcGh5VmFyaWFudHMiLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ0aXRsZVhTIiwic3ViVGl0bGUiLCJwYXJhZ3JhcGgxIiwicGFyYWdyYXBoMiIsInNtYWxsZXN0RXhjZXB0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDTyxNQUFNQSxrQkFBa0IsR0FBRztBQUNoQztBQUNBQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLE1BREw7QUFFTEMsY0FBVSxFQUFFLEtBRlA7QUFHTEMsY0FBVSxFQUFFLElBSFAsQ0FHYTs7QUFIYixHQUZ5QjtBQU9oQ0MsU0FBTyxFQUFFO0FBQ1BILFlBQVEsRUFBRSxNQURIO0FBRVBDLGNBQVUsRUFBRSxLQUZMO0FBR1BDLGNBQVUsRUFBRSxJQUhMLENBR1c7O0FBSFgsR0FQdUI7QUFZaEM7QUFDQUUsVUFBUSxFQUFFO0FBQ1JKLFlBQVEsRUFBRSxNQURGO0FBRVJDLGNBQVUsRUFBRSxLQUZKO0FBR1JDLGNBQVUsRUFBRSxJQUhKLENBR1U7O0FBSFYsR0Fic0I7QUFrQmhDO0FBQ0FHLFlBQVUsRUFBRTtBQUNWTCxZQUFRLEVBQUUsTUFEQTtBQUVWQyxjQUFVLEVBQUUsS0FGRjtBQUdWQyxjQUFVLEVBQUUsSUFIRixDQUdROztBQUhSLEdBbkJvQjtBQXdCaEM7QUFDQUksWUFBVSxFQUFFO0FBQ1ZOLFlBQVEsRUFBRSxNQURBO0FBRVZDLGNBQVUsRUFBRSxLQUZGO0FBR1ZDLGNBQVUsRUFBRSxJQUhGLENBR1E7O0FBSFIsR0F6Qm9CO0FBOEJoQztBQUNBSyxtQkFBaUIsRUFBRTtBQUNqQlAsWUFBUSxFQUFFLE1BRE87QUFFakJDLGNBQVUsRUFBRSxLQUZLO0FBR2pCQyxjQUFVLEVBQUUsQ0FISyxDQUdGOztBQUhFO0FBL0JhLENBQTNCIiwiZmlsZSI6Ii4vc3JjL3RoZW1lL3ZhcmlhbnRUeXBvZ3JhcGh5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuZXhwb3J0IGNvbnN0IHR5cG9ncmFwaHlWYXJpYW50cyA9IHtcbiAgLy8gW3RpdGxlXVxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAnMzJweCcsXG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgbGluZUhlaWdodDogMS4yNSwgLy8gMTI1JVxuICB9LFxuICB0aXRsZVhTOiB7XG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICBsaW5lSGVpZ2h0OiAxLjI1LCAvLyAxMjUlXG4gIH0sXG4gIC8vIFtzdWJUaXRsZV1cbiAgc3ViVGl0bGU6IHtcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgIGxpbmVIZWlnaHQ6IDEuMjUsIC8vIDEyNSVcbiAgfSxcbiAgLy8gW3BhcmFncmFwaDFdXG4gIHBhcmFncmFwaDE6IHtcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgIGxpbmVIZWlnaHQ6IDEuMjUsIC8vIDEyNSVcbiAgfSxcbiAgLy8gW3BhcmFncmFwaDJdXG4gIHBhcmFncmFwaDI6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgIGxpbmVIZWlnaHQ6IDEuMjUsIC8vIDEyNSVcbiAgfSxcbiAgLy8gW3NtYWxsZXN0RXhjZXB0aW9uXVxuICBzbWFsbGVzdEV4Y2VwdGlvbjoge1xuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgbGluZUhlaWdodDogMSwgLy8gMTAwJVxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme/variantTypography.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-normalize\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtbm9ybWFsaXplXCI/ZWRlNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLW5vcm1hbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-normalize\n");

/***/ })

/******/ });