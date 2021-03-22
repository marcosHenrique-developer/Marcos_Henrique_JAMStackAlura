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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/theme/index.js + 1 modules
var theme = __webpack_require__("C+fU");

// EXTERNAL MODULE: external "styled-normalize"
var external_styled_normalize_ = __webpack_require__("BhmS");

// CONCATENATED MODULE: ./src/theme/GlobalStyle/index.js


const GlobalStyle = external_styled_components_["createGlobalStyle"]`
* {
  box-sizing: border-box;
}
${external_styled_normalize_["normalize"]}
html,
body {
  margin: 0;
  padding: 0;
  font-family: ${({
  theme
}) => theme.fontFamily}
}
/* Full height layout */
html, body {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;
/* harmony default export */ var theme_GlobalStyle = (GlobalStyle);
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable react/jsx-props-no-spreading */




 // eslint-disable-next-line react/prop-types

function App({
  Component,
  pageProps
}) {
  return (// eslint-disable-next-line react/jsx-filename-extension
    __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      rel: "stylesheet"
    })), __jsx(external_styled_components_["ThemeProvider"], {
      theme: theme["b" /* default */]
    }, __jsx(theme_GlobalStyle, null), __jsx(Component, pageProps)))
  );
}

/***/ }),

/***/ "BhmS":
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),

/***/ "C+fU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ breakpoints; });

// CONCATENATED MODULE: ./src/theme/variantTypography.js
/* eslint-disable import/prefer-default-export */
const typographyVariants = {
  // [title]
  title: {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: 1.25 // 125%

  },
  titleXS: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25 // 125%

  },
  // [subTitle]
  subTitle: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25 // 125%

  },
  // [paragraph1]
  paragraph1: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25 // 125%

  },
  // [paragraph2]
  paragraph2: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1.25 // 125%

  },
  // [smallestException]
  smallestException: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: 1 // 100%

  }
};
// CONCATENATED MODULE: ./src/theme/index.js

const colors = {
  background: {
    light: {
      color: '#FFFFFF'
    },
    main: {
      color: '#F2F2F2'
    }
  },
  borders: {
    main: {
      color: '#F1F1F1'
    }
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff'
    }
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff'
    }
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff'
    },
    light: {
      color: '#88989E',
      contrastText: '#fff'
    }
  },
  modes: {
    dark: {}
  }
};
const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
};
/* harmony default export */ var theme = __webpack_exports__["b"] = ({
  colors,
  typographyVariants: typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Rubik', sans-serif",
  transition: '200ms ease-in-out'
});

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });