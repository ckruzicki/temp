(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./projects/icons/src/shapes/commerce-shapes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./projects/icons/src/shapes/commerce-shapes.ts":
/*!******************************************************!*\
  !*** ./projects/icons/src/shapes/commerce-shapes.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceShapes = exports.ClrShapeFactory = exports.ClrShapeEmployee = exports.ClrShapeEmployeeGroup = exports.ClrShapeRuble = exports.ClrShapePeso = exports.ClrShapeCoinBag = exports.ClrShapeBitcoin = exports.ClrShapeYen = exports.ClrShapeWon = exports.ClrShapeRupee = exports.ClrShapePound = exports.ClrShapeECheck = exports.ClrShapeDollarBill = exports.ClrShapeBank = exports.ClrShapeCreditCard = exports.ClrShapeDollar = exports.ClrShapeEuro = exports.ClrShapeStore = exports.ClrShapeWallet = exports.ClrShapeShoppingCart = exports.ClrShapePiggyBank = exports.ClrShapeShoppingBag = exports.ClrShapeCalculator = void 0;
/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var descriptor_config_1 = __webpack_require__(/*! ../utils/descriptor-config */ "./projects/icons/src/utils/descriptor-config.ts");
var svg_tag_generator_1 = __webpack_require__(/*! ../utils/svg-tag-generator */ "./projects/icons/src/utils/svg-tag-generator.ts");
exports.ClrShapeCalculator = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM8,32V4H28V32Z\"/>\n            <path class=\"clr-i-outline clr-i-outline-path-2\" d=\"M12,8H25.67V6H11a1,1,0,0,0-1,1v4.67h2Z\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-3\" points=\"12 16 10 16 10 18 14 18 14 14 12 14 12 16\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-4\" points=\"24 16 22 16 22 18 26 18 26 14 24 14 24 16\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-5\" points=\"18 16 16 16 16 18 20 18 20 14 18 14 18 16\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-6\" points=\"12 22 10 22 10 24 14 24 14 20 12 20 12 22\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-7\" points=\"24 22 22 22 22 24 26 24 26 20 24 20 24 22\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-8\" points=\"18 22 16 22 16 24 20 24 20 20 18 20 18 22\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-9\" points=\"12 28 10 28 10 30 14 30 14 26 12 26 12 28\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-10\" points=\"24 28 22 28 22 30 26 30 26 26 24 26 24 28\"/>\n            <polygon class=\"clr-i-outline clr-i-outline-path-11\" points=\"18 28 16 28 16 30 20 30 20 26 18 26 18 28\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM12,28H10V26h2Zm0-6H10V20h2Zm0-6H10V14h2Zm7,12H17V26h2Zm0-6H17V20h2Zm0-6H17V14h2Zm7,12H24V26h2Zm0-6H24V20h2Zm0-6H24V14h2Zm0-7H10V5H26Z\"/>");
exports.ClrShapeShoppingBag = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M25,12V9.05a7,7,0,1,0-14,0v7a1,1,0,0,0,2,0V14h8V12H13V9.05a5,5,0,1,1,10,0V16a1,1,0,1,0,2,0V14h5V32H6V14H9V12H4V32.09A1.91,1.91,0,0,0,5.91,34H30.09A1.91,1.91,0,0,0,32,32.09V12Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M13,9.22a5,5,0,1,1,10,0V12h2V9.22a7,7,0,1,0-14,0V12h2Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-2\" d=\"M25,12v3.1a1,1,0,1,1-2,0V12H13v3.1a1,1,0,0,1-2,0V12H4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V12Z\"/>");
exports.ClrShapePiggyBank = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M19.72,10.47a11.65,11.65,0,0,0-6.31.52A.8.8,0,1,0,14,12.48,10.11,10.11,0,0,1,19.44,12a.8.8,0,1,0,.28-1.57Z\"/>\n            <circle class=\"clr-i-outline clr-i-outline-path-2\" cx=\"25.38\" cy=\"16.71\" r=\"1.36\"/>\n            <path class=\"clr-i-outline clr-i-outline-path-3\" d=\"M35.51,18.63a1,1,0,0,0-.84-.44,3.42,3.42,0,0,1-2.09-1.12,17.35,17.35,0,0,1-2.63-3.78l2.88-4.5A1.89,1.89,0,0,0,33,7a1.77,1.77,0,0,0-1.33-1,10.12,10.12,0,0,0-5.39.75,12.72,12.72,0,0,0-2.72,1.63,16.94,16.94,0,0,0-5.16-1.39C11.31,6.3,4.83,10.9,4,17H4a2.56,2.56,0,0,1-1.38-1.53,1.81,1.81,0,0,1,.14-1.4,1.19,1.19,0,0,1,.43-.43,1.08,1.08,0,0,0-1.12-1.85A3.31,3.31,0,0,0,.91,13a4,4,0,0,0-.33,3.08A4.76,4.76,0,0,0,3,18.95l.92.46a17.58,17.58,0,0,0,1.82,7l.17.38A23,23,0,0,0,9.2,31.88a1,1,0,0,0,.75.34h4.52a1,1,0,0,0,.92-1.38L15,29.94l1.18.13a20.33,20.33,0,0,0,4,0c.37.6.77,1.2,1.21,1.79a1,1,0,0,0,.8.41h4.34a1,1,0,0,0,.92-1.39c-.17-.4-.34-.83-.47-1.2-.18-.53-.32-1-.43-1.45A13.18,13.18,0,0,0,29.56,26a12.5,12.5,0,0,0,3,0,1,1,0,0,0,.78-.62l2.26-5.81A1,1,0,0,0,35.51,18.63Zm-3.78,5.44a11.37,11.37,0,0,1-2.35-.11h0a8.2,8.2,0,0,1-2.53-.87,1,1,0,0,0-.93,1.77,11.72,11.72,0,0,0,1.29.58,8,8,0,0,1-1.8,1.16l-1.06.48s.49,2.19.82,3.16H22.79c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.53,18.53,0,0,1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63,2.43.75,2.74v0H10.42A20.57,20.57,0,0,1,7.76,26l-.18-.39A14.62,14.62,0,0,1,6,17.48c.54-5.19,6.12-9.11,12.19-8.54a15.47,15.47,0,0,1,5.08,1.48l.62.29.5-.47A10.29,10.29,0,0,1,27,8.54a8.25,8.25,0,0,1,4-.65l-3.38,5.29.25.5h0a21.16,21.16,0,0,0,3.31,4.84,6.49,6.49,0,0,0,2.14,1.39Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M35,18.87A5.83,5.83,0,0,1,33,17.61a21.63,21.63,0,0,1-3.29-4.84l3.39-5.29a.9.9,0,0,0-.54-1.38,9.67,9.67,0,0,0-5.13.72,12,12,0,0,0-3.13,2A17.37,17.37,0,0,0,18.6,7.15C11.8,6.52,5.27,10.9,4.54,17l-.14-.07A2.76,2.76,0,0,1,2.9,15.29a2,2,0,0,1,.15-1.55,1.32,1.32,0,0,1,.47-.48,1.08,1.08,0,1,0-1.12-1.85,3.45,3.45,0,0,0-1.23,1.25A4.16,4.16,0,0,0,.84,15.9a5,5,0,0,0,2.57,3l1,.54a18.62,18.62,0,0,0,2,7.3,23,23,0,0,0,3,4.79,1,1,0,0,0,.8.38h3.61a.52.52,0,0,0,.4-.75L14,30.38a11,11,0,0,1-.33-1.18c.91.16,2.08.31,2.87.38a20.07,20.07,0,0,0,3.12,0c.39.7.79,1.33,1.15,1.85a.93.93,0,0,0,.77.41h3.11a.65.65,0,0,0,.61-.85c-.23-.74-.53-1.75-.71-2.37a15.9,15.9,0,0,0,3.75-1.76c.16-.11.32-.26.48-.39a13.77,13.77,0,0,1-2.42-1,.8.8,0,0,1,.74-1.42,11.64,11.64,0,0,0,3.18,1.1,13.31,13.31,0,0,0,2.68.12,1,1,0,0,0,.9-.66l1.73-4.44A1,1,0,0,0,35,18.87ZM13.79,11.59a.86.86,0,0,1-.3.05.85.85,0,0,1-.3-1.64,12.41,12.41,0,0,1,6.69-.55.85.85,0,1,1-.3,1.67A10.75,10.75,0,0,0,13.79,11.59Zm12.52,6.12a1.44,1.44,0,1,1,1.44-1.44A1.44,1.44,0,0,1,26.32,17.72Z\"/>");
exports.ClrShapeShoppingCart = (0, svg_tag_generator_1.clrIconSVG)("<circle cx=\"13.33\" cy=\"29.75\" r=\"2.25\" class=\"clr-i-outline clr-i-outline-path-1\" />\n            <circle cx=\"27\" cy=\"29.75\" r=\"2.25\" class=\"clr-i-outline clr-i-outline-path-2\" />\n            <path d=\"M33.08,5.37A1,1,0,0,0,32.31,5H11.49l.65,2H31L28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l3.17-14A1,1,0,0,0,33.08,5.37Z\" class=\"clr-i-outline clr-i-outline-path-3\" />\n            <circle cx=\"13.33\" cy=\"29.75\" r=\"2.25\" class=\"clr-i-outline--alerted clr-i-outline-path-1--alerted\" />\n            <circle cx=\"27\" cy=\"29.75\" r=\"2.25\" class=\"clr-i-outline--alerted clr-i-outline-path-2--alerted\" />\n            <polygon points=\"20.71 7 21.87 5 11.49 5 12.14 7 20.71 7\" class=\"clr-i-outline--alerted clr-i-outline-path-3--alerted\" />\n            <path d=\"M29.15,15.4,28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l1.09-4.82Z\" class=\"clr-i-outline--alerted clr-i-outline-path-4--alerted\" />\n            <path d=\"M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z\"  class=\"clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert\" />\n            <circle cx=\"13.33\" cy=\"29.75\" r=\"2.25\" class=\"clr-i-outline--badged clr-i-outline-path-1--badged\" />\n            <circle cx=\"27\" cy=\"29.75\" r=\"2.25\" class=\"clr-i-outline--badged clr-i-outline-path-2--badged\" />\n            <path d=\"M22.57,7a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H11.49l.65,2Z\" class=\"clr-i-outline--badged clr-i-outline-path-3--badged\" />\n            <path d=\"M30,13.5l-.42,0L28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l1.57-6.91A7.51,7.51,0,0,1,30,13.5Z\" class=\"clr-i-outline--badged clr-i-outline-path-4--badged\" />\n            <circle cx=\"30\" cy=\"6\" r=\"5\"  class=\"clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge\" />\n            <circle cx=\"13.5\" cy=\"29.5\" r=\"2.5\" class=\"clr-i-solid clr-i-solid-path-1\" />\n            <circle cx=\"26.5\" cy=\"29.5\" r=\"2.5\" class=\"clr-i-solid clr-i-solid-path-2\" />\n            <path d=\"M33.1,6.39A1,1,0,0,0,32.31,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l3.2-13A1,1,0,0,0,33.1,6.39Z\" class=\"clr-i-solid clr-i-solid-path-3\" />\n            <circle cx=\"13.5\" cy=\"29.5\" r=\"2.5\" class=\"clr-i-solid--alerted clr-i-solid-path-1--alerted\" />\n            <circle cx=\"26.5\" cy=\"29.5\" r=\"2.5\" class=\"clr-i-solid--alerted clr-i-solid-path-2--alerted\" />\n            <path d=\"M22.23,15.4A3.68,3.68,0,0,1,19,9.89L21.29,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l1.19-4.84Z\" class=\"clr-i-solid--alerted clr-i-solid-path-3--alerted\" />\n            <path d=\"M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z\"  class=\"clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert\" />\n            <circle cx=\"13.5\" cy=\"29.5\" r=\"2.5\" class=\"clr-i-solid--badged clr-i-solid-path-1--badged\" />\n            <circle cx=\"26.5\" cy=\"29.5\" r=\"2.5\" class=\"clr-i-solid--badged clr-i-solid-path-2--badged\" />\n            <path d=\"M30,13.5A7.5,7.5,0,0,1,22.5,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l1.71-7A7.49,7.49,0,0,1,30,13.5Z\" class=\"clr-i-solid--badged clr-i-solid-path-3--badged\" />\n            <circle cx=\"30\" cy=\"6\" r=\"5\"  class=\"clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge\" />");
exports.ClrShapeWallet = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M32,15H31V9a1,1,0,0,0-1-1H6a1,1,0,0,1-1-.82V6.82A1,1,0,0,1,6,6H29.58a1,1,0,0,0,0-2H6A3,3,0,0,0,3,7a3.08,3.08,0,0,0,0,.36V27.93A4.1,4.1,0,0,0,7.13,32H30a1,1,0,0,0,1-1V25h1a1,1,0,0,0,1-1V16A1,1,0,0,0,32,15ZM29,30H7.13A2.11,2.11,0,0,1,5,27.93V9.88A3.11,3.11,0,0,0,6,10H29v5H22a5,5,0,0,0,0,10h7Zm2-7H22a3,3,0,0,1,0-6H31Z\"/>\n            <circle class=\"clr-i-outline clr-i-outline-path-2\" cx=\"23.01\" cy=\"20\" r=\"1.5\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M32.94,14H31V9a1,1,0,0,0-1-1H6A1,1,0,0,1,5,7H5V7A1,1,0,0,1,6,6H29.6a1,1,0,1,0,0-2H6A2.94,2.94,0,0,0,3,6.88v21A4.13,4.13,0,0,0,7.15,32H30a1,1,0,0,0,1-1V26h1.94a.93.93,0,0,0,1-.91v-10A1.08,1.08,0,0,0,32.94,14ZM32,24l-8.58,0a3.87,3.87,0,0,1-3.73-4,3.87,3.87,0,0,1,3.73-4L32,16Z\"/>\n            <circle class=\"clr-i-solid clr-i-solid-path-2\" cx=\"24.04\" cy=\"19.92\" r=\"1.5\"/>");
exports.ClrShapeStore = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M28,30H16V22H14v8H8V22H6v8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22H28Z\"/>\n            <path class=\"clr-i-outline clr-i-outline-path-2\" d=\"M33.79,13.27,29.71,5.11A2,2,0,0,0,27.92,4H8.08A2,2,0,0,0,6.29,5.11L2.21,13.27a2,2,0,0,0-.21.9v3.08a2,2,0,0,0,.46,1.28A4.67,4.67,0,0,0,6,20.13a4.72,4.72,0,0,0,3-1.07,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.72,4.72,0,0,0,6.53-.52A2,2,0,0,0,34,17.26V14.17A2,2,0,0,0,33.79,13.27ZM30,18.13A2.68,2.68,0,0,1,27.82,17L27,15.88,26.19,17a2.71,2.71,0,0,1-4.37,0L21,15.88,20.19,17a2.71,2.71,0,0,1-4.37,0L15,15.88,14.19,17a2.71,2.71,0,0,1-4.37,0L9,15.88,8.18,17A2.68,2.68,0,0,1,6,18.13a2.64,2.64,0,0,1-2-.88V14.17L8.08,6H27.92L32,14.16v.67l0,2.39A2.67,2.67,0,0,1,30,18.13Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M28,30H16V22H14v8H8V22H6v8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22H28Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-2\" d=\"M33.79,13.27,29.71,5.11A2,2,0,0,0,27.92,4H8.08A2,2,0,0,0,6.29,5.11L2.21,13.27a2,2,0,0,0-.21.9v3.08a2,2,0,0,0,.46,1.28A4.67,4.67,0,0,0,6,20.13a4.72,4.72,0,0,0,3-1.07,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.72,4.72,0,0,0,6.53-.52A2,2,0,0,0,34,17.26V14.17A2,2,0,0,0,33.79,13.27ZM15,14.4v1.52L14.18,17a2.71,2.71,0,0,1-4.37,0L9,15.88V14.4L11.59,6H16Zm12,1.48L26.19,17a2.71,2.71,0,0,1-4.37,0L21,15.88l0,0V14.4L20,6h4.45L27,14.4Z\"/>");
exports.ClrShapeEuro = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M31.48,28.49a1,1,0,0,0-1.38-.32A12,12,0,0,1,12.45,22H24.16a1,1,0,0,0,0-2H11.93a11.16,11.16,0,0,1,0-4H24.16a1,1,0,0,0,0-2H12.45A12,12,0,0,1,30.06,7.8a1,1,0,0,0,1.06-1.7A14,14,0,0,0,10.34,14H3.54a1,1,0,1,0,0,2H9.91a14,14,0,0,0-.16,2,14,14,0,0,0,.16,2H3.54a1,1,0,1,0,0,2h6.8a14,14,0,0,0,20.83,7.87A1,1,0,0,0,31.48,28.49Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z\"/>");
exports.ClrShapeDollar = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M26,21.15a6.91,6.91,0,0,0-4.38-3.32A26,26,0,0,0,19,17.19V8.12A10.05,10.05,0,0,1,23.86,10a1,1,0,0,0,1.33-1.5A11.75,11.75,0,0,0,19,6.1V3a1,1,0,0,0-2,0V6c-4.4.1-6.83,2.29-7.57,4.18A5.56,5.56,0,0,0,11.66,17,13.2,13.2,0,0,0,17,18.84V28a12.3,12.3,0,0,1-7.14-2.74A1,1,0,1,0,8.49,26.7,14.09,14.09,0,0,0,17,30v3a1,1,0,0,0,2,0V30c2.82-.19,6.07-1.09,7.3-4.76A5.33,5.33,0,0,0,26,21.15ZM12.79,15.32a3.57,3.57,0,0,1-1.49-4.39C11.41,10.63,12.53,8.12,17,8v8.8A10.7,10.7,0,0,1,12.79,15.32ZM24.4,24.56c-.72,2.14-2.32,3.17-5.4,3.4V19.23c.64.14,1.3.3,2,.51a5,5,0,0,1,3.19,2.32A3.34,3.34,0,0,1,24.4,24.56Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\"\n                d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.65,21.59c-1,3-3.61,3.84-5.9,4v2a1.25,1.25,0,0,1-2.5,0V27.59A11.47,11.47,0,0,1,11,25a1.25,1.25,0,1,1,1.71-1.83,9.11,9.11,0,0,0,4.55,1.94V18.83a9.63,9.63,0,0,1-3.73-1.41,4.8,4.8,0,0,1-1.91-5.84c.59-1.51,2.42-3.23,5.64-3.51V6.25a1.25,1.25,0,0,1,2.5,0V8.11a9.67,9.67,0,0,1,4.9,2A1.25,1.25,0,0,1,23,11.95a7.14,7.14,0,0,0-3.24-1.31v6.13c.6.13,1.24.27,1.91.48a5.85,5.85,0,0,1,3.69,2.82A4.64,4.64,0,0,1,25.65,23.59Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-2\" d=\"M20.92,19.64c-.4-.12-.79-.22-1.17-.3v5.76c2-.2,3.07-.9,3.53-2.3a2.15,2.15,0,0,0-.15-1.58A3.49,3.49,0,0,0,20.92,19.64Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-3\" d=\"M13.94,12.48a2.31,2.31,0,0,0,1,2.87,6.53,6.53,0,0,0,2.32.92V10.55C15.16,10.8,14.19,11.84,13.94,12.48Z\"/>");
exports.ClrShapeCreditCard = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,2,0,12H4L4,8ZM4,28V24H32v4Z\" class=\"clr-i-outline clr-i-outline-path-1\" />\n            <rect x=\"7\" y=\"3\" width=\"22\" height=\"30\" rx=\"0.96\" ry=\"0.96\" transform=\"translate(36) rotate(90)\" fill=\"none\" stroke=\"#000\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"clr-i-solid clr-i-solid-path-1\" />\n            <path d=\"M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,18H4V20H32Z\" class=\"clr-i-solid clr-i-solid-path-2\" />");
exports.ClrShapeBank = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M3.5,13.56,18,5.23l14.5,8.33a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73Z\" class=\"clr-i-outline clr-i-outline-path-1\"/>\n            <path d=\"M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z\" class=\"clr-i-outline clr-i-outline-path-2\"/>\n            <rect x=\"5.02\" y=\"14\" width=\"26\" height=\"2\" class=\"clr-i-outline clr-i-outline-path-3\"/>\n            <path d=\"M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-4\"/>\n            <path d=\"M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z\" class=\"clr-i-outline clr-i-outline-path-5\"/>\n            <path d=\"M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z\" class=\"clr-i-outline--badged clr-i-outline-path-1--badged\"/>\n            <rect x=\"5.02\" y=\"14\" width=\"26\" height=\"2\" class=\"clr-i-outline--badged clr-i-outline-path-2--badged\"/>\n            <path d=\"M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z\" class=\"clr-i-outline--badged clr-i-outline-path-3--badged\"/>\n            <path d=\"M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z\" class=\"clr-i-outline--badged clr-i-outline-path-3--badged\"/>\n            <path d=\"M22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,22.77,8A7.49,7.49,0,0,1,22.5,6Z\" class=\"clr-i-outline--badged clr-i-outline-path-4--badged\"/>\n            <path d=\"M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z\" class=\"clr-i-outline--badged clr-i-outline-path-5--badged\"/>\n            <circle cx=\"30\" cy=\"6\" r=\"5\" class=\"clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge\"/>\n            <path d=\"M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z\" class=\"clr-i-outline--alerted clr-i-outline-path-1--alerted\"/>\n            <path d=\"M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z\" class=\"clr-i-outline--alerted clr-i-outline-path-2--alerted\"/>\n            <path d=\"M22.5,15A3.51,3.51,0,0,1,20,14H5v2H31V15Z\" class=\"clr-i-outline--alerted clr-i-outline-path-3--alerted\"/>\n            <path d=\"M19.46,9.74l.68-1.17-1.49-.85a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24,1.1.63C19.39,9.89,19.42,9.81,19.46,9.74Z\" class=\"clr-i-outline--alerted clr-i-outline-path-4--alerted\"/>\n            <path d=\"M22.05,5.25,18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,21.05,7Z\" class=\"clr-i-outline--alerted clr-i-outline-path-5--alerted\"/>\n            <path d=\"M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z\" class=\"clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert\"/>\n            <path d=\"M3.5,13.56,5,12.68V16H31V12.71l1.48.85a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73ZM17.85,7.11a.8.8,0,0,1,.8,0L25.37,11H22.15l-3.9-2.24L14.35,11H11.14Z\" class=\"clr-i-solid clr-i-solid-path-1\"/>\n            <path d=\"M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z\" class=\"clr-i-solid clr-i-solid-path-2\"/>\n            <path d=\"M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z\" class=\"clr-i-solid--badged clr-i-solid-path-1--badged\"/>\n            <path d=\"M30,13.5A7.47,7.47,0,0,1,24.39,11H22.15l-3.9-2.24L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l5,2.87A7.45,7.45,0,0,1,22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V13.42A7.53,7.53,0,0,1,30,13.5Z\" class=\"clr-i-solid--badged clr-i-solid-path-2--badged\"/>\n            <path d=\"M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z\" class=\"clr-i-solid--badged clr-i-solid-path-3--badged\"/>\n            <circle cx=\"30\" cy=\"6\" r=\"5\"  class=\"clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge\"/>\n            <path d=\"M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z\" class=\"clr-i-solid--alerted clr-i-solid-path-1--alerted\"/>\n            <path d=\"M22.5,15a3.51,3.51,0,0,1-3-5.26l.14-.24-1.35-.78L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l1.75,1,1.65-2.86L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V15Z\" class=\"clr-i-solid--alerted clr-i-solid-path-2--alerted\"/>\n            <path d=\"M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z\" class=\"clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert\"/>");
exports.ClrShapeDollarBill = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,6a4.25,4.25,0,0,1-3.9-4H32Zm0,1.62v4.83A5.87,5.87,0,0,0,26.49,26h-17A5.87,5.87,0,0,0,4,20.44V15.6A5.87,5.87,0,0,0,9.51,10h17A5.87,5.87,0,0,0,32,15.6ZM7.9,10A4.25,4.25,0,0,1,4,14V10ZM4,22.06A4.25,4.25,0,0,1,7.9,26H4ZM28.1,26A4.25,4.25,0,0,1,32,22.06V26Z\"/>\n            <path class=\"clr-i-outline clr-i-outline-path-2\" d=\"M18,10.85c-3.47,0-6.3,3.21-6.3,7.15s2.83,7.15,6.3,7.15,6.3-3.21,6.3-7.15S21.47,10.85,18,10.85Zm0,12.69c-2.59,0-4.7-2.49-4.7-5.55s2.11-5.55,4.7-5.55,4.7,2.49,4.7,5.55S20.59,23.55,18,23.55Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM4,26V21.15A5.18,5.18,0,0,1,8.79,26ZM4,14.85V10H8.79A5.18,5.18,0,0,1,4,14.85ZM18,25.15c-3.47,0-6.3-3.21-6.3-7.15s2.83-7.15,6.3-7.15,6.3,3.21,6.3,7.15S21.47,25.15,18,25.15ZM32,26H27.25A5.18,5.18,0,0,1,32,21.15Zm0-11.15A5.18,5.18,0,0,1,27.25,10H32Z\"/>\n            <ellipse class=\"clr-i-solid clr-i-solid-path-2\" cx=\"18\" cy=\"18\" rx=\"4\" ry=\"4.72\"/>");
exports.ClrShapeECheck = (0, svg_tag_generator_1.clrIconSVG)("<rect class=\"clr-i-outline clr-i-outline-path-1\" x=\"16\" y=\"16\" width=\"15\" height=\"2\"/>\n            <rect class=\"clr-i-outline clr-i-outline-path-2\" x=\"20\" y=\"21\" width=\"11\" height=\"2\"/>\n            <path class=\"clr-i-outline clr-i-outline-path-3\" d=\"M34,8H12.93a8.35,8.35,0,0,1,.79,2H33V26H3V19.9a7.83,7.83,0,0,1-2-1.34V27a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V9A1,1,0,0,0,34,8Z\"/>\n            <path class=\"clr-i-outline clr-i-outline-path-4\" d=\"M6.57,18.68a6.17,6.17,0,0,0,4.32-1.59,1.2,1.2,0,0,0,.36-.84,1.08,1.08,0,0,0-1.09-1.11,1,1,0,0,0-.71.25,4.32,4.32,0,0,1-2.84,1,3.35,3.35,0,0,1-3.46-3h7.53A1.29,1.29,0,0,0,12,12.06,5.68,5.68,0,0,0,6.27,6.14,6,6,0,0,0,.4,12.4v0A6,6,0,0,0,6.57,18.68ZM6.25,8.39c1.82,0,2.87,1.39,3,3.16H3.13C3.38,9.69,4.56,8.39,6.25,8.39Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M34,8H12.91a8.61,8.61,0,0,1,1.2,4.39,8,8,0,0,1-7.78,8.27A7.51,7.51,0,0,1,1,18.41V27a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V9A1,1,0,0,0,34,8ZM31,23H20V21H31Zm0-5H16V16H31Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-2\" d=\"M6.57,18.68A6,6,0,0,1,.4,12.44v0A6,6,0,0,1,6.27,6.14,5.68,5.68,0,0,1,12,12.06a1.29,1.29,0,0,1-1.3,1.32H3.15a3.35,3.35,0,0,0,3.46,3,4.32,4.32,0,0,0,2.84-1,1,1,0,0,1,.71-.25,1.08,1.08,0,0,1,1.09,1.11,1.2,1.2,0,0,1-.36.84A6.17,6.17,0,0,1,6.57,18.68ZM9.3,11.55c-.18-1.77-1.23-3.16-3-3.16s-2.87,1.3-3.12,3.16Z\"/>");
exports.ClrShapePound = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M27.9,30H13.4A8.45,8.45,0,0,0,15,24.65V21h4.31a1,1,0,0,0,0-2H15V11.31A5.24,5.24,0,0,1,20.21,6,5.19,5.19,0,0,1,24,7.73a1,1,0,0,0,1.48-1.35A7.19,7.19,0,0,0,13,11.31V19H8.72a1,1,0,1,0,0,2H13v3.65C13,29.38,10.12,30,10,30a1,1,0,0,0,.17,2H27.9a1,1,0,1,0,0-2Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm6.5,25.92H11.74a1.25,1.25,0,0,1-.22-2.48c.15,0,1.72-.49,1.72-3.54V19h-2.5a1,1,0,0,1,0-2h2.5V11.88a5.85,5.85,0,0,1,5.72-6,5.63,5.63,0,0,1,4.21,1.94A1.25,1.25,0,1,1,21.3,9.51,3.08,3.08,0,0,0,19,8.42a3.35,3.35,0,0,0-3.22,3.46V17h3a1,1,0,0,1,0,2h-3v2.9A7.65,7.65,0,0,1,15,25.42H24.5a1.25,1.25,0,0,1,0,2.5Z\"/>");
exports.ClrShapeRupee = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M28,8H24.14A7.52,7.52,0,0,0,22.6,6H28a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2h7.55a5.42,5.42,0,0,1,4.2,2H10a1,1,0,0,0,0,2H22.79A5.54,5.54,0,0,1,23,11.51,5.48,5.48,0,0,1,17.55,17H11.14a1,1,0,0,0-.75,1.66L22.06,32a1,1,0,1,0,1.5-1.32L13.35,19h4.21a7.51,7.51,0,0,0,7.3-9H28a1,1,0,0,0,0-2Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm5.88,9H26a1,1,0,0,1,0,2H24.26c0,.06,0,.12,0,.19a6.09,6.09,0,0,1-6,6.2h-2l6.82,8.06a1.25,1.25,0,0,1-1.91,1.62L12.63,18.94a1.25,1.25,0,0,1,1-2.06h4.71a3.59,3.59,0,0,0,3.48-3.69c0-.07,0-.13,0-.2h-9a1,1,0,0,1,0-2h8.32a3.41,3.41,0,0,0-2.78-1.5H12.75a1.25,1.25,0,0,1,0-2.5H26a1,1,0,0,1,0,2H22.68A6.23,6.23,0,0,1,23.88,11Z\"/>");
exports.ClrShapeWon = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M33,18H28.75l.5-2H33a1,1,0,0,0,0-2H29.74l2.17-8.76A1,1,0,0,0,30,4.76L27.68,14H21.31L19,4.76a1,1,0,0,0-1.94,0L14.79,14H8.42L6.13,4.76a1,1,0,0,0-1.94.48L6.36,14H3a1,1,0,0,0,0,2H6.85l.5,2H3a1,1,0,0,0,0,2H7.84l2.79,11.24a1,1,0,0,0,1.94,0L15.36,20h5.38l2.79,11.24a1,1,0,0,0,1.94,0L28.25,20H33a1,1,0,0,0,0-2Zm-5.82-2-.5,2H22.3l-.5-2ZM18,9.16,19.25,14h-2.4ZM8.91,16h5.38l-.5,2H9.41ZM11.6,26.84,9.91,20H13.3ZM15.85,18l.5-2h3.39l.5,2Zm8.64,8.84L22.8,20h3.39Z\"/>\n            <polygon class=\"clr-i-solid clr-i-solid-path-1\" points=\"17.74 16 17.22 18 18.85 18 18.32 16 17.74 16\"/>\n            <polygon class=\"clr-i-solid clr-i-solid-path-2\" points=\"11.94 18 14.63 18 15.16 16 11.41 16 11.94 18\"/>\n            <polygon class=\"clr-i-solid clr-i-solid-path-3\" points=\"13.29 23.1 14.1 20 12.47 20 13.29 23.1\"/>\n            <polygon class=\"clr-i-solid clr-i-solid-path-4\" points=\"21.44 18 24.13 18 24.66 16 20.91 16 21.44 18\"/>\n            <polygon class=\"clr-i-solid clr-i-solid-path-5\" points=\"22.78 23.1 23.6 20 21.97 20 22.78 23.1\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-6\" d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM29,20H26.19L24,28.32a1.25,1.25,0,0,1-2.42,0L19.38,20H16.69l-2.19,8.32a1.25,1.25,0,0,1-2.42,0L9.88,20H7a1,1,0,0,1,0-2H9.35l-.53-2H7a1,1,0,0,1,0-2H8.3l-1-3.68a1.25,1.25,0,0,1,2.42-.64L10.88,14h4.8l1.14-4.32a1.25,1.25,0,0,1,2.42,0L20.38,14h4.8l1.14-4.32a1.25,1.25,0,0,1,2.42.64l-1,3.68H29a1,1,0,0,1,0,2H27.24l-.53,2H29a1,1,0,0,1,0,2Z\"/>");
exports.ClrShapeYen = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M29.34,4.55a1,1,0,1,0-1.67-1.1L18,18.23,8.33,3.45a1,1,0,0,0-1.67,1.1L17,20.35V22.2H12a.8.8,0,0,0,0,1.6h5v2.4H12a.8.8,0,0,0,0,1.6h5V32a1,1,0,0,0,2,0V27.8h5a.8.8,0,0,0,0-1.6H19V23.8h5a.8.8,0,0,0,0-1.6H19V20.35Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8.07,7.91L19.74,20H22a1,1,0,0,1,0,2H19.25v2H22a1,1,0,0,1,0,2H19.25v2.75a1.25,1.25,0,0,1-2.5,0V26H14a1,1,0,1,1,0-2h2.75V22H14a1,1,0,1,1,0-2h2.26L9.93,9.91a1.25,1.25,0,1,1,2.12-1.33L18,18.08l5.95-9.49a1.25,1.25,0,1,1,2.12,1.33Z\"/>");
exports.ClrShapeBitcoin = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M24.11,16.88A5.49,5.49,0,0,0,21,7V4a1,1,0,0,0-2,0V7H16V4a1,1,0,0,0-2,0V7H11a1,1,0,0,0-1,1V28a1,1,0,0,0,1,1h3v3a1,1,0,0,0,2,0V29h3v3a1,1,0,0,0,2,0V29h.08A6.07,6.07,0,0,0,27,22.81v-.62A6.25,6.25,0,0,0,24.11,16.88ZM12,9h8.69a3.59,3.59,0,0,1,3.43,2.36A3.51,3.51,0,0,1,20.79,16H12ZM25,22.81A4.08,4.08,0,0,1,21.06,27H12V18h9.06A4.08,4.08,0,0,1,25,22.19Z\" class=\"clr-i-outline clr-i-outline-path-1\" />\n            <path d=\"M21.18,18.47H14.5v6h6.68a2.7,2.7,0,0,0,2.63-2.77v-.48A2.71,2.71,0,0,0,21.18,18.47Z\" class=\"clr-i-solid clr-i-solid-path-1\" />\n            <path d=\"M23,13.75a2.24,2.24,0,0,0-2.23-2.25H14.5V16h6.3A2.22,2.22,0,0,0,23,13.75Z\" class=\"clr-i-solid clr-i-solid-path-2\" />\n            <path d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8.31,19.73A5.22,5.22,0,0,1,21.18,27H21v1.9a1,1,0,0,1-2,0V27H17v1.9a1,1,0,0,1-2,0V27H13.25A1.25,1.25,0,0,1,12,25.75V17.23h0v-7A1.25,1.25,0,0,1,13.25,9H15V7.07a1,1,0,0,1,2,0V9h2V7.07a1,1,0,0,1,2,0V9a4.72,4.72,0,0,1,3.2,8,5.31,5.31,0,0,1,2.11,4.24Z\" class=\"clr-i-solid clr-i-solid-path-3\" />");
exports.ClrShapeCoinBag = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M21.6,29a1,1,0,0,0-1-1h-6a1,1,0,0,0,0,2h6A1,1,0,0,0,21.6,29Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M22.54,24h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M22,32H16a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M32.7,32h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-4\" /><path d=\"M33.7,28h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z\" class=\"clr-i-outline clr-i-outline-path-5\" /><path d=\"M33.74,26a28,28,0,0,0-2.82-10.12A20.24,20.24,0,0,0,24.6,8.71L27,3.42a1,1,0,0,0-.07-1A1,1,0,0,0,26.13,2H9.8a1,1,0,0,0-.91,1.42l2.45,5.31a20.33,20.33,0,0,0-6.28,7.15c-2.15,4-2.82,8.89-3,12.28a3.6,3.6,0,0,0,1,2.71A3.79,3.79,0,0,0,5.8,31.94H12V30H5.72a1.68,1.68,0,0,1-1.21-.52,1.62,1.62,0,0,1-.45-1.23c.14-2.61.69-7.58,2.76-11.45A18,18,0,0,1,13.08,10h1a30.81,30.81,0,0,0-1.87,2.92,22.78,22.78,0,0,0-1.47,3.34l1.37.92a24,24,0,0,1,1.49-3.47A29.1,29.1,0,0,1,16.05,10h1a21.45,21.45,0,0,1,1.41,5,22.54,22.54,0,0,1,.32,3.86l1.58-1.11a24.15,24.15,0,0,0-.32-3A24.82,24.82,0,0,0,18.76,10h.78l.91-2H13.21L11.36,4H24.57l-2.5,5.47a9.93,9.93,0,0,1,1.23.78,18.63,18.63,0,0,1,5.86,6.57A26.59,26.59,0,0,1,31.73,26Z\" class=\"clr-i-outline clr-i-outline-path-6\" />\n    <path d=\"M24.89,26h7.86c-.66-8.71-4.41-14.12-9.22-17.32L25.72,3.9a1,1,0,0,0-.91-1.4H11.1a1,1,0,0,0-.91,1.4l1.2,2.6H21.51l-.9,2H18.76A24.9,24.9,0,0,1,20,13.19a24.49,24.49,0,0,1,.32,3l-1.58,1.11a22.54,22.54,0,0,0-.32-3.86A21.74,21.74,0,0,0,17,8.5h-1a28.22,28.22,0,0,0-2.48,3.7,23.91,23.91,0,0,0-1.49,3.46l-1.37-.91a22.78,22.78,0,0,1,1.47-3.34A30.81,30.81,0,0,1,14.05,8.5H12.3l.08.17C7.08,12.2,3.05,18.4,3.05,28.75A1.65,1.65,0,0,0,4.61,30.5h8A2.67,2.67,0,0,1,14.21,26a2.67,2.67,0,0,1-.37-1.34,2.7,2.7,0,0,1,2.7-2.7h6a2.7,2.7,0,0,1,2.7,2.7A2.63,2.63,0,0,1,24.89,26Z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M21.6,28.5a1,1,0,0,0-1-1h-6a1,1,0,0,0,0,2h6A1,1,0,0,0,21.6,28.5Z\" class=\"clr-i-solid clr-i-solid-path-2\" /><path d=\"M22.54,23.5h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z\" class=\"clr-i-solid clr-i-solid-path-3\" /><path d=\"M22,31.5H16a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z\" class=\"clr-i-solid clr-i-solid-path-4\" /><path d=\"M32.7,31.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z\" class=\"clr-i-solid clr-i-solid-path-5\" /><path d=\"M33.7,27.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z\" class=\"clr-i-solid clr-i-solid-path-6\" />");
exports.ClrShapePeso = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M31,13.2H27.89A6.81,6.81,0,0,0,28,12a7.85,7.85,0,0,0-.1-1.19h2.93a.8.8,0,0,0,0-1.6H27.46A8.44,8.44,0,0,0,19.57,4H11a1,1,0,0,0-1,1V9.2H7a.8.8,0,0,0,0,1.6h3v2.4H7a.8.8,0,0,0,0,1.6h3V31a1,1,0,0,0,2,0V20h7.57a8.45,8.45,0,0,0,7.89-5.2H31a.8.8,0,0,0,0-1.6ZM12,6h7.57a6.51,6.51,0,0,1,5.68,3.2H12Zm0,4.8H25.87a5.6,5.6,0,0,1,0,2.4H12ZM19.57,18H12V14.8H25.25A6.51,6.51,0,0,1,19.57,18Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M14.18,13.8V16h9.45a5.26,5.26,0,0,0,.08-.89,4.72,4.72,0,0,0-.2-1.31Z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M14.18,19.7h5.19a4.28,4.28,0,0,0,3.5-1.9H14.18Z\" class=\"clr-i-solid clr-i-solid-path-2\" /><path d=\"M19.37,10.51H14.18V12h8.37A4.21,4.21,0,0,0,19.37,10.51Z\" class=\"clr-i-solid clr-i-solid-path-3\" /><path d=\"M17.67,2a16,16,0,1,0,16,16A16,16,0,0,0,17.67,2Zm10.5,15.8H25.7a6.87,6.87,0,0,1-6.33,4.4H14.18v6.54a1.25,1.25,0,1,1-2.5,0V17.8H8.76a.9.9,0,1,1,0-1.8h2.92V13.8H8.76a.9.9,0,1,1,0-1.8h2.92V9.26A1.25,1.25,0,0,1,12.93,8h6.44a6.84,6.84,0,0,1,6.15,4h2.65a.9.9,0,0,1,0,1.8H26.09a6.91,6.91,0,0,1,.12,1.3,6.8,6.8,0,0,1-.06.9h2a.9.9,0,0,1,0,1.8Z\" class=\"clr-i-solid clr-i-solid-path-4\" />");
exports.ClrShapeRuble = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M20.57,20A8.23,8.23,0,0,0,29,12a8.23,8.23,0,0,0-8.43-8H12a1,1,0,0,0-1,1V18H9a1,1,0,0,0,0,2h2v2H9a1,1,0,0,0,0,2h2v7a1,1,0,0,0,2,0V24h9a1,1,0,0,0,0-2H13V20ZM13,6h7.57A6.24,6.24,0,0,1,27,12a6.23,6.23,0,0,1-6.43,6H13Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M20.75,9.25H15v8.81h5.79a4.66,4.66,0,0,0,4.86-4.4A4.65,4.65,0,0,0,20.75,9.25Z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm2.75,18.56H15V22h8.29a1,1,0,0,1,0,2H15v5a1.25,1.25,0,0,1-2.5,0V24H11.25a1,1,0,0,1,0-2h1.21V20.56H11.25a1.25,1.25,0,0,1,0-2.5h1.21V8a1.25,1.25,0,0,1,1.25-1.25h7a7.14,7.14,0,0,1,7.36,6.9A7.15,7.15,0,0,1,20.75,20.56Z\" class=\"clr-i-solid clr-i-solid-path-2\" />");
exports.ClrShapeEmployeeGroup = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M18.42,16.31a5.7,5.7,0,1,1,5.76-5.7A5.74,5.74,0,0,1,18.42,16.31Zm0-9.4a3.7,3.7,0,1,0,3.76,3.7A3.74,3.74,0,0,0,18.42,6.91Z\" class=\"clr-i-outline clr-i-outline-path-1\"/>\n  <path d=\"M18.42,16.31a5.7,5.7,0,1,1,5.76-5.7A5.74,5.74,0,0,1,18.42,16.31Zm0-9.4a3.7,3.7,0,1,0,3.76,3.7A3.74,3.74,0,0,0,18.42,6.91Z\" class=\"clr-i-outline clr-i-outline-path-2\"/>\n  <path d=\"M21.91,17.65a20.6,20.6,0,0,0-13,2A1.77,1.77,0,0,0,8,21.25v3.56a1,1,0,0,0,2,0V21.38a18.92,18.92,0,0,1,12-1.68Z\" class=\"clr-i-outline clr-i-outline-path-3\"/>\n  <path d=\"M33,22H26.3V20.52a1,1,0,0,0-2,0V22H17a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V23A1,1,0,0,0,33,22ZM32,32H18V24h6.3v.41a1,1,0,0,0,2,0V24H32Z\" class=\"clr-i-outline clr-i-outline-path-4\"/>\n  <rect x=\"21.81\" y=\"27.42\" width=\"5.96\" height=\"1.4\" class=\"clr-i-outline clr-i-outline-path-5\"/>\n  <path d=\"M10.84,12.24a18,18,0,0,0-7.95,2A1.67,1.67,0,0,0,2,15.71v3.1a1,1,0,0,0,2,0v-2.9a16,16,0,0,1,7.58-1.67A7.28,7.28,0,0,1,10.84,12.24Z\" class=\"clr-i-outline clr-i-outline-path-6\"/>\n  <path d=\"M33.11,14.23a17.8,17.8,0,0,0-7.12-2,7.46,7.46,0,0,1-.73,2A15.89,15.89,0,0,1,32,15.91v2.9a1,1,0,1,0,2,0v-3.1A1.67,1.67,0,0,0,33.11,14.23Z\" class=\"clr-i-outline clr-i-outline-path-7\"/>\n  <path d=\"M10.66,10.61c0-.23,0-.45,0-.67a3.07,3.07,0,0,1,.54-6.11,3.15,3.15,0,0,1,2.2.89,8.16,8.16,0,0,1,1.7-1.08,5.13,5.13,0,0,0-9,3.27,5.1,5.1,0,0,0,4.7,5A7.42,7.42,0,0,1,10.66,10.61Z\" class=\"clr-i-outline clr-i-outline-path-8\"/>\n  <path d=\"M24.77,1.83a5.17,5.17,0,0,0-3.69,1.55,7.87,7.87,0,0,1,1.9,1,3.14,3.14,0,0,1,4.93,2.52,3.09,3.09,0,0,1-1.79,2.77,7.14,7.14,0,0,1,.06.93,7.88,7.88,0,0,1-.1,1.2,5.1,5.1,0,0,0,3.83-4.9A5.12,5.12,0,0,0,24.77,1.83Z\" class=\"clr-i-outline clr-i-outline-path-9\"/>\n  \n  <ellipse cx=\"18\" cy=\"11.28\" rx=\"4.76\" ry=\"4.7\" class=\"clr-i-solid clr-i-solid-path-1\"/>\n  <path d=\"M10.78,11.75c.16,0,.32,0,.48,0,0-.15,0-.28,0-.43a6.7,6.7,0,0,1,3.75-6,4.62,4.62,0,1,0-4.21,6.46Z\" class=\"clr-i-solid clr-i-solid-path-2\"/>\n  <path d=\"M24.76,11.28c0,.15,0,.28,0,.43.16,0,.32,0,.48,0A4.58,4.58,0,1,0,21,5.29,6.7,6.7,0,0,1,24.76,11.28Z\" class=\"clr-i-solid clr-i-solid-path-3\"/>\n  <path d=\"M22.29,16.45a21.45,21.45,0,0,1,5.71,2,2.71,2.71,0,0,1,.68.53H34V15.56a.72.72,0,0,0-.38-.64,18,18,0,0,0-8.4-2.05l-.66,0A6.66,6.66,0,0,1,22.29,16.45Z\" class=\"clr-i-solid clr-i-solid-path-4\"/>\n  <path d=\"M6.53,20.92A2.76,2.76,0,0,1,8,18.47a21.45,21.45,0,0,1,5.71-2,6.66,6.66,0,0,1-2.27-3.55l-.66,0a18,18,0,0,0-8.4,2.05.72.72,0,0,0-.38.64V22H6.53Z\" class=\"clr-i-solid clr-i-solid-path-5\"/>\n  <rect x=\"21.46\" y=\"26.69\" width=\"5.96\" height=\"1.4\" class=\"clr-i-solid clr-i-solid-path-6\"/>\n  <path d=\"M32.81,21.26H25.94v-1a1,1,0,0,0-2,0v1H22V18.43A20.17,20.17,0,0,0,18,18a19.27,19.27,0,0,0-9.06,2.22.76.76,0,0,0-.41.68v5.61h7.11v6.09a1,1,0,0,0,1,1H32.81a1,1,0,0,0,1-1V22.26A1,1,0,0,0,32.81,21.26Zm-1,10.36H17.64V23.26h6.3v.91a1,1,0,0,0,2,0v-.91h5.87Z\" class=\"clr-i-solid clr-i-solid-path-7\"/>");
exports.ClrShapeEmployee = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M16.43,16.69a7,7,0,1,1,7-7A7,7,0,0,1,16.43,16.69Zm0-11.92a5,5,0,1,0,5,5A5,5,0,0,0,16.43,4.77Z\" class=\"clr-i-outline clr-i-outline-path-1\"/>\n  <path d=\"M22,17.9A25.41,25.41,0,0,0,5.88,19.57a4.06,4.06,0,0,0-2.31,3.68V29.2a1,1,0,1,0,2,0V23.25a2,2,0,0,1,1.16-1.86,22.91,22.91,0,0,1,9.7-2.11,23.58,23.58,0,0,1,5.57.66Z\" class=\"clr-i-outline clr-i-outline-path-2\"/>\n  <rect x=\"22.14\" y=\"27.41\" width=\"6.14\" height=\"1.4\" class=\"clr-i-outline clr-i-outline-path-3\"/>\n  <path d=\"M33.17,21.47H28v2h4.17v8.37H18V23.47h6.3v.42a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0v1.47H17a1,1,0,0,0-1,1V32.84a1,1,0,0,0,1,1H33.17a1,1,0,0,0,1-1V22.47A1,1,0,0,0,33.17,21.47Z\" class=\"clr-i-outline clr-i-outline-path-4\"/>\n  \n  <circle cx=\"16.86\" cy=\"9.73\" r=\"6.46\" class=\"clr-i-solid clr-i-solid-path-1\"/>\n  <rect x=\"21\" y=\"28\" width=\"7\" height=\"1.4\" class=\"clr-i-solid clr-i-solid-path-2\"/>\n  <path d=\"M15,30v3a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V23a1,1,0,0,0-1-1H26V20.53a1,1,0,0,0-2,0V22H22V18.42A32.12,32.12,0,0,0,16.86,18a26,26,0,0,0-11,2.39,3.28,3.28,0,0,0-1.88,3V30Zm17,2H17V24h7v.42a1,1,0,0,0,2,0V24h6Z\" class=\"clr-i-solid clr-i-solid-path-3\"/>");
exports.ClrShapeFactory = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M33.47,7.37a1,1,0,0,0-1,.06L23,13.77V8.26a1,1,0,0,0-1.64-.77L13.48,14H10V4.62a1,1,0,0,0-.78-1l-4-.9a1,1,0,0,0-.85.2A1,1,0,0,0,4,3.73V14H3a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V8.26A1,1,0,0,0,33.47,7.37ZM6,5l2,.44V14H6ZM32,30H4V16h9.83a1,1,0,0,0,.64-.23L21,10.37v5.28a1,1,0,0,0,1.56.83L32,10.14Z\" class=\"clr-i-outline clr-i-outline-path-1\"/>\n  <rect x=\"6\" y=\"17.99\" width=\"8\" height=\"2\" class=\"clr-i-outline clr-i-outline-path-2\"/>\n  <rect x=\"6\" y=\"21.99\" width=\"8\" height=\"2\" class=\"clr-i-outline clr-i-outline-path-3\"/>\n  <rect x=\"6\" y=\"25.99\" width=\"8\" height=\"2\" class=\"clr-i-outline clr-i-outline-path-4\"/>\n  <rect x=\"19\" y=\"18.99\" width=\"2\" height=\"3\" class=\"clr-i-outline clr-i-outline-path-5\"/>\n  <rect x=\"19\" y=\"24.99\" width=\"2\" height=\"3\" class=\"clr-i-outline clr-i-outline-path-6\"/>\n  <rect x=\"23\" y=\"18.99\" width=\"2\" height=\"3\" class=\"clr-i-outline clr-i-outline-path-7\"/>\n  <rect x=\"23\" y=\"24.99\" width=\"2\" height=\"3\" class=\"clr-i-outline clr-i-outline-path-8\"/>\n  <rect x=\"27\" y=\"18.99\" width=\"2\" height=\"3\" class=\"clr-i-outline clr-i-outline-path-9\"/>\n  <rect x=\"27\" y=\"24.99\" width=\"2\" height=\"3\" class=\"clr-i-outline clr-i-outline-path-10\"/>\n  \n  <path d=\"M32.45,8.44,22,15.3V9.51a1,1,0,0,0-1.63-.78L14.07,14H10V4.06L4,2.71V14H2V31a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V9.27A1,1,0,0,0,32.45,8.44ZM14,29H6V27h8Zm0-4H6V23h8Zm0-4H6V19h8Zm8,8H20V26h2Zm0-6H20V20h2Zm4,6H24V26h2Zm0-6H24V20h2Zm4,6H28V26h2Zm0-6H28V20h2Z\" class=\"clr-i-solid clr-i-solid-path-1\"/>");
exports.CommerceShapes = {
    calculator: exports.ClrShapeCalculator,
    'piggy-bank': exports.ClrShapePiggyBank,
    'shopping-bag': exports.ClrShapeShoppingBag,
    'shopping-cart': exports.ClrShapeShoppingCart,
    wallet: exports.ClrShapeWallet,
    store: exports.ClrShapeStore,
    euro: exports.ClrShapeEuro,
    dollar: exports.ClrShapeDollar,
    peso: exports.ClrShapePeso,
    'credit-card': exports.ClrShapeCreditCard,
    bank: exports.ClrShapeBank,
    'dollar-bill': exports.ClrShapeDollarBill,
    'e-check': exports.ClrShapeECheck,
    pound: exports.ClrShapePound,
    rupee: exports.ClrShapeRupee,
    won: exports.ClrShapeWon,
    yen: exports.ClrShapeYen,
    bitcoin: exports.ClrShapeBitcoin,
    ruble: exports.ClrShapeRuble,
    'coin-bag': exports.ClrShapeCoinBag,
    'employee-group': exports.ClrShapeEmployeeGroup,
    employee: exports.ClrShapeEmployee,
    factory: exports.ClrShapeFactory,
};
Object.defineProperty(exports.CommerceShapes, 'savings', (0, descriptor_config_1.descriptorConfig)(exports.CommerceShapes['piggy-bank']));
if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
    window.ClarityIcons.add(exports.CommerceShapes);
}


/***/ }),

/***/ "./projects/icons/src/utils/descriptor-config.ts":
/*!*******************************************************!*\
  !*** ./projects/icons/src/utils/descriptor-config.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptorConfig = void 0;
function descriptorConfig(value) {
    return { enumerable: true, writable: true, configurable: true, value: value };
}
exports.descriptorConfig = descriptorConfig;


/***/ }),

/***/ "./projects/icons/src/utils/svg-tag-generator.ts":
/*!*******************************************************!*\
  !*** ./projects/icons/src/utils/svg-tag-generator.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clrIconSVG = void 0;
var BADGED_CLASS_SUBSTRING = '--badged';
var ALERTED_CLASS_SUBSTRING = '--alerted';
var SOLID_CLASS = 'clr-i-solid';
function clrIconSVG(content) {
    var classes = '';
    if (content.indexOf(BADGED_CLASS_SUBSTRING) > -1) {
        classes += 'can-badge ';
    }
    if (content.indexOf(ALERTED_CLASS_SUBSTRING) > -1) {
        classes += 'can-alert ';
    }
    if (content.indexOf(SOLID_CLASS) > -1) {
        classes += 'has-solid ';
    }
    var openingTag;
    if (classes) {
        openingTag = "<svg version=\"1.1\" class=\"" + classes + "\" viewBox=\"0 0 36 36\" preserveAspectRatio=\"xMidYMid meet\"\n    xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" focusable=\"false\" role=\"img\">";
    }
    else {
        openingTag = "<svg version=\"1.1\" viewBox=\"0 0 36 36\" preserveAspectRatio=\"xMidYMid meet\"\n    xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" focusable=\"false\" role=\"img\">";
    }
    var closingTag = "</svg>";
    return openingTag + content + closingTag;
}
exports.clrIconSVG = clrIconSVG;


/***/ })

/******/ });
});
//# sourceMappingURL=commerce-shapes.js.map