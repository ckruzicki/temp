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
/******/ 	return __webpack_require__(__webpack_require__.s = "./projects/icons/src/shapes/travel-shapes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./projects/icons/src/shapes/travel-shapes.ts":
/*!****************************************************!*\
  !*** ./projects/icons/src/shapes/travel-shapes.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelShapes = exports.ClrShapeOnHoliday = exports.ClrShapeTrailer = exports.ClrShapeFerry = exports.ClrShapeCaravan = exports.ClrShapeCampervan = exports.ClrShapeBoat = exports.ClrShapeBicycle = exports.ClrShapeMapMarker = exports.ClrShapeCompass = exports.ClrShapeMap = exports.ClrShapeCar = exports.ClrShapeAirplane = exports.ClrShapeTruck = void 0;
/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var descriptor_config_1 = __webpack_require__(/*! ../utils/descriptor-config */ "./projects/icons/src/utils/descriptor-config.ts");
var svg_tag_generator_1 = __webpack_require__(/*! ../utils/svg-tag-generator */ "./projects/icons/src/utils/svg-tag-generator.ts");
exports.ClrShapeTruck = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M30,12H26V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V25a1,1,0,0,0,1,1H4V8H24V19.7a6.45,6.45,0,0,1,1.56-.2c.15,0,.29,0,.44,0V14h4a2,2,0,0,1,2,2v1H28v2h4v5H29.6a4.54,4.54,0,0,0-8.34,0H14.43a4.5,4.5,0,0,0-4.17-2.76A4.38,4.38,0,1,0,14.72,26H21a4.49,4.49,0,0,0,8.92,0H33a1,1,0,0,0,1-1V16A4,4,0,0,0,30,12ZM10.26,28a2.38,2.38,0,1,1,0-4.75,2.38,2.38,0,1,1,0,4.75Zm15.17,0a2.38,2.38,0,1,1,2.5-2.37A2.44,2.44,0,0,1,25.43,28Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M30,12H26V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V25a1,1,0,0,0,1,1H4V8H24V21.49A4.45,4.45,0,0,0,21.25,24H14.43a4.5,4.5,0,0,0-4.17-2.76A4.38,4.38,0,1,0,14.72,26H21a4.48,4.48,0,0,0,8.91,0H34V16A4,4,0,0,0,30,12ZM10.26,28a2.38,2.38,0,1,1,0-4.75,2.38,2.38,0,1,1,0,4.75Zm15.17,0a2.38,2.38,0,1,1,2.5-2.37A2.44,2.44,0,0,1,25.42,28ZM32,17H26V14h4a2,2,0,0,1,2,2Z\"/>");
exports.ClrShapeAirplane = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M35.77,8.16a2.43,2.43,0,0,0-1.9-2L28,4.87a4.5,4.5,0,0,0-3.65.79L7,18.3,2.14,18.1A1.86,1.86,0,0,0,.91,21.41l5,3.93c.6.73,1,.59,10.93-4.82l.93,9.42a1.36,1.36,0,0,0,.85,1.18,1.43,1.43,0,0,0,.54.1,1.54,1.54,0,0,0,1-.41l2.39-2.18a1.52,1.52,0,0,0,.46-.83L25.2,15.9c3.57-2,6.95-3.88,9.36-5.25A2.43,2.43,0,0,0,35.77,8.16Zm-2.2.75c-2.5,1.42-6,3.41-9.76,5.47l-.41.23L21.07,27.28l-1.47,1.34L18.5,17.32,17.17,18C10,22,7.61,23.16,6.79,23.52l-4.3-3.41,5.08.22,18-13.06a2.51,2.51,0,0,1,2-.45l5.85,1.26a.43.43,0,0,1,.35.37A.42.42,0,0,1,33.57,8.91Z\"/>\n            <path class=\"clr-i-outline clr-i-outline-path-2\" d=\"M7,12.54l3.56,1,1.64-1.19-4-1.16L10,10.09l5.47-.16,2.3-1.67L10,8.5a1.25,1.25,0,0,0-.7.17L6.67,10.2A1.28,1.28,0,0,0,7,12.54Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z\"/>\n            <path class=\"clr-i-solid clr-i-solid-path-2\" d=\"M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z\"/>");
exports.ClrShapeCar = (0, svg_tag_generator_1.clrIconSVG)("<rect class=\"clr-i-outline clr-i-outline-path-1\" x=\"15\" y=\"17\" width=\"3\" height=\"2\"/>\n                <path class=\"clr-i-outline clr-i-outline-path-2\" d=\"M26.45,14.17A22.1,22.1,0,0,0,19.38,7a9.64,9.64,0,0,0-9-.7,8.6,8.6,0,0,0-4.82,6.4c-.08.47-.14.92-.2,1.36A4,4,0,0,0,2,18v6.13a2,2,0,0,0,2,2V20H4V18a2,2,0,0,1,2-2H24.73A7.28,7.28,0,0,1,32,23.27V24h-2a4.53,4.53,0,1,0,.33,2H32a2,2,0,0,0,2-2v-.73A9.28,9.28,0,0,0,26.45,14.17ZM11,14H6.93c0-.31.09-.63.15-1A6.52,6.52,0,0,1,11,8h0Zm2,0V7.58a8.17,8.17,0,0,1,5.36,1.16A19,19,0,0,1,23.9,14ZM25.8,28.38a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,25.8,28.38Z\"/>\n                <path class=\"clr-i-outline clr-i-outline-path-3\" d=\"M14.17,24a4.53,4.53,0,1,0,.33,2h5.3c0-.08,0-.17,0-.25A6,6,0,0,1,20,24ZM10,28.38a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,10,28.38Z\"/>\n                <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M26.87,14.28A22.36,22.36,0,0,0,19.65,6.9a9.64,9.64,0,0,0-9-.7,8.6,8.6,0,0,0-4.82,6.4c-.08.49-.15,1-.21,1.4h-1A2.59,2.59,0,0,0,2,16.59v8.55a.86.86,0,0,0,.86.86H4.59c0-.13,0-.26,0-.39a5.77,5.77,0,0,1,7.71-5.45l-1,1a4.56,4.56,0,0,0-4.34,1.58,3,3,0,0,0-.63.93A4.5,4.5,0,1,0,14.82,26h5.48c0-.13,0-.26,0-.39A5.77,5.77,0,0,1,28,20.16l-1,1a4.56,4.56,0,0,0-4.34,1.58,3,3,0,0,0-.63.93A4.5,4.5,0,1,0,30.53,26h2.61a.86.86,0,0,0,.86-.86V23.36A9.39,9.39,0,0,0,26.87,14.28ZM12,14H8c0-.35.1-.71.16-1.07a6.52,6.52,0,0,1,3.87-5h0ZM10.36,28.36a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,10.36,28.36ZM19,19H16V17h3Zm-6-5V7.47a8.16,8.16,0,0,1,5.4,1.15A19.15,19.15,0,0,1,24,14ZM26.06,28.36a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,26.06,28.36Z\"/>");
exports.ClrShapeMap = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M33.59,6.19A1,1,0,0,0,32.7,6L23.09,9,13.46,4.11a1,1,0,0,0-.84,0L2.62,8.2A1,1,0,0,0,2,9.13V29.61a1,1,0,0,0,1.38.92L13,26.58l9.59,4.92a1,1,0,0,0,.46.11,1,1,0,0,0,.3,0l10-3.12a1,1,0,0,0,.7-1V7A1,1,0,0,0,33.59,6.19ZM32,26.75l-8.32,2.6V27.06h-1.6v2l-8.4-4.31V23.06h-1.6v1.72L4,28.11V9.79l8.08-3.33V8.81h1.6V6.47l8.4,4.3v2.1h1.6V11L32,8.36Z\"/>\n                <rect class=\"clr-i-outline clr-i-outline-path-2\" x=\"22.08\" y=\"15.06\" width=\"1.6\" height=\"3.81\"/>\n                <rect class=\"clr-i-outline clr-i-outline-path-3\" x=\"22.08\" y=\"21.06\" width=\"1.6\" height=\"3.81\"/>\n                <rect class=\"clr-i-outline clr-i-outline-path-4\" x=\"12.08\" y=\"11.06\" width=\"1.6\" height=\"3.81\"/>\n                <rect class=\"clr-i-outline clr-i-outline-path-5\" x=\"12.08\" y=\"17.13\" width=\"1.6\" height=\"3.75\"/>\n                <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M33.31,7.35,25,9.94V14H23V10.29L14,5.68V9H12V5.27l-9.67,4A.53.53,0,0,0,2,9.75V30.45a.53.53,0,0,0,.74.49L12,27.12V23h2v4.53l9,4.61V28h2v3.79l8.63-2.7a.53.53,0,0,0,.37-.51V7.86A.53.53,0,0,0,33.31,7.35ZM14,21H12V17h2Zm0-6H12V11h2ZM25,26H23V22h2Zm0-6H23V16h2Z\"/>");
exports.ClrShapeCompass = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M20.82,15.31h0L10.46,9c-.46-.26-1.11.37-.86.84l6.15,10.56,10.56,6.15a.66.66,0,0,0,.84-.86Zm-4,4,3-3,4.55,7.44Z\" class=\"clr-i-outline clr-i-outline-path-1\" />\n            <path d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm1,29.95V29.53H17v2.42A14,14,0,0,1,4.05,19H6.47V17H4.05A14,14,0,0,1,17,4.05V6.47h2V4.05A14,14,0,0,1,31.95,17H29.53v2h2.42A14,14,0,0,1,19,31.95Z\" class=\"clr-i-outline clr-i-outline-path-2\" />\n            <path d=\"M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM6.47,19H4.05c0-.33-.05-.66-.05-1s0-.67.05-1H6.47ZM17,4.05c.33,0,.66-.05,1-.05s.67,0,1,.05V6.47H17Zm2,27.9c-.33,0-.66.05-1,.05s-.67,0-1-.05V29.53h2Zm8-5.58a.59.59,0,0,1-.69.16L15.75,20.38,9.6,9.82c-.25-.47.39-1.1.86-.84l10.37,6.33h0l6.33,10.37A.59.59,0,0,1,27,26.37ZM29.53,19V17h2.42c0,.33.05.66.05,1s0,.67-.05,1Z\" class=\"clr-i-solid clr-i-solid-path-1\" />\n            <polygon points=\"16.77 19.35 24.35 23.77 19.8 16.33 16.77 19.35\" class=\"clr-i-solid clr-i-solid-path-2\" />");
exports.ClrShapeMapMarker = (0, svg_tag_generator_1.clrIconSVG)("<path class=\"clr-i-outline clr-i-outline-path-1\" d=\"M18,6.72a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,18,6.72Zm0,9.46a3.73,3.73,0,1,1,3.73-3.73A3.73,3.73,0,0,1,18,16.17Z\"/>\n                <path class=\"clr-i-outline clr-i-outline-path-2\" d=\"M18,2A11.79,11.79,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42A11.79,11.79,0,0,0,18,2ZM23.59,24l-.36.53c-1.72,2.58-4,5.47-5.23,6.9-1.18-1.43-3.51-4.32-5.23-6.9L12.42,24c-1.77-2.64-4.2-6.25-4.2-10.31a9.78,9.78,0,1,1,19.56,0C27.78,17.79,25.36,21.4,23.59,24Z\"/>\n                <path class=\"clr-i-outline--badged clr-i-outline-path-1--badged\" d=\"M18,6.72a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,18,6.72Zm0,9.46a3.73,3.73,0,1,1,3.73-3.73A3.73,3.73,0,0,1,18,16.17Z\"/>\n                <path class=\"clr-i-outline--badged clr-i-outline-path-2--badged\" d=\"M29.77,13.49a7.49,7.49,0,0,1-2-.33c0,.19,0,.38,0,.57,0,4.06-2.42,7.67-4.19,10.31l-.36.53c-1.72,2.58-4,5.47-5.23,6.9-1.18-1.43-3.51-4.32-5.23-6.9L12.42,24c-1.77-2.64-4.2-6.25-4.2-10.31A9.77,9.77,0,0,1,22.56,5.09a7.45,7.45,0,0,1,.52-2A11.75,11.75,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42C29.78,13.65,29.77,13.57,29.77,13.49Z\"/>\n                <circle class=\"clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge\" cx=\"30\" cy=\"6\" r=\"5\"/>\n                <path class=\"clr-i-solid clr-i-solid-path-1\" d=\"M18,2A11.79,11.79,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42A11.79,11.79,0,0,0,18,2Zm0,17a6.56,6.56,0,1,1,6.56-6.56A6.56,6.56,0,0,1,18,19Z\"/>\n                <circle class=\"clr-i-solid clr-i-solid-path-2\" cx=\"18\" cy=\"12.44\" r=\"3.73\"/>\n                <path class=\"clr-i-solid--badged clr-i-solid-path-1--badged\" d=\"M29.77,13.49A7.47,7.47,0,0,1,24.38,11a6.58,6.58,0,1,1-1.61-3,7.42,7.42,0,0,1,.31-4.84A11.75,11.75,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42C29.78,13.65,29.77,13.57,29.77,13.49Z\"/>\n                <circle class=\"clr-i-solid--badged clr-i-solid-path-2--badged\" cx=\"18\" cy=\"12.44\" r=\"3.73\"/>\n                <circle class=\"clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge\" cx=\"30\" cy=\"6\" r=\"5\"/>");
exports.ClrShapeBicycle = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M8.5,29.65A6.51,6.51,0,0,1,2,23.15a6.39,6.39,0,0,1,6.5-6.36A6.39,6.39,0,0,1,15,23.15,6.51,6.51,0,0,1,8.5,29.65Zm0-11a4.5,4.5,0,1,0,4.5,4.5A4.51,4.51,0,0,0,8.5,18.65Z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M27.5,29.65a6.51,6.51,0,0,1-6.5-6.5,6.5,6.5,0,0,1,13,0A6.51,6.51,0,0,1,27.5,29.65Zm0-11a4.5,4.5,0,1,0,4.5,4.5A4.51,4.51,0,0,0,27.5,18.65Z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M19,24.66H8a1,1,0,0,1-.89-1.45l5-10,1.78.9L9.62,22.73H19Z\" class=\"clr-i-outline clr-i-outline-path-3\" /><rect x=\"13\" y=\"12.68\" width=\"11\" height=\"1.91\" class=\"clr-i-outline clr-i-outline-path-4\" /><path d=\"M28,24.66a1,1,0,0,1-.94-.66L22.29,10.66H20a1,1,0,0,1-1-1,1,1,0,0,1,1-.93h3a.94.94,0,0,1,.94.6l5,14a1,1,0,0,1-.6,1.27A1,1,0,0,1,28,24.66Z\" class=\"clr-i-outline clr-i-outline-path-5\" /><path d=\"M13,14.66a1,1,0,0,1-.71-.29l-1.7-1.71H8a1,1,0,0,1-1-1,.94.94,0,0,1,1-1h3a1.08,1.08,0,0,1,.75.27l2,2a1,1,0,0,1,0,1.41A1,1,0,0,1,13,14.66Z\" class=\"clr-i-outline clr-i-outline-path-6\" /><path d=\"M15,21.9c-0.2-2-1.2-3.8-2.9-4.9l-2.5,4.9H15z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M7.2,23.4c-0.2-0.3-0.2-0.7,0-1l3.2-6.3c-0.6-0.2-1.2-0.2-1.8-0.2C5,15.9,2,18.8,2,22.4c0,3.6,2.9,6.5,6.5,6.5\n\tc3,0,5.6-2.1,6.3-5H8C7.7,23.9,7.3,23.7,7.2,23.4z\" class=\"clr-i-solid clr-i-solid-path-2\" /><path d=\"M19,21.9h-4c0,0.2,0,0.3,0,0.5c0,0.5-0.1,1-0.2,1.5H19V21.9z\" class=\"clr-i-solid clr-i-solid-path-3\" /><path d=\"M27.5,15.9c-0.3,0-0.6,0-0.9,0.1l2.4,6.6c0.2,0.5-0.1,1.1-0.6,1.3c-0.1,0-0.2,0.1-0.3,0.1c-0.4,0-0.8-0.3-0.9-0.7l-2.4-6.7\n\tc-3.2,1.6-4.5,5.5-3,8.7c1.6,3.2,5.5,4.5,8.7,3c3.2-1.6,4.5-5.5,3-8.7C32.2,17.3,30,15.9,27.5,15.9z\" class=\"clr-i-solid clr-i-solid-path-4\" /><path d=\"M24.7,16.7c0.6-0.3,1.3-0.5,1.9-0.6l-2.7-7.4C23.8,8.2,23.4,8,23,7.9h-3c-0.6,0-1,0.5-1,1.1c0,0.5,0.4,0.9,1,0.9\n\tc0,0,0,0,0,0h2.3l0.7,2h-9.6l-1.7-1.7C11.5,10.1,11.3,10,11,10H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.6l1.2,1.2l-1.5,3\n\tc0.6,0.2,1.3,0.5,1.8,0.8l1.6-3.2h10L24.7,16.7z\" class=\"clr-i-solid clr-i-solid-path-5\" />");
exports.ClrShapeBoat = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M29.1,27.1C28,27,26.9,27.4,26,28.2c-1.1,1.1-2.9,1.1-4.1,0c-1-0.7-2.1-1.1-3.3-1.1c-1.2-0.1-2.4,0.3-3.3,1.1\n\t\tC14.7,28.7,14,29,13.2,29s-1.5-0.3-2.1-0.8c-1-0.8-2.2-1.2-3.4-1.2s-2.4,0.4-3.4,1.2C3.7,28.7,2.8,29,2,29v2\n\t\tc1.3,0.1,2.6-0.3,3.6-1.2C6.2,29.3,7.1,29,7.9,29c0.7,0,1.5,0.3,2.1,0.8c1.8,1.6,4.6,1.6,6.5,0c0.6-0.5,1.3-0.8,2.1-0.8\n\t\tc0.7,0,1.4,0.3,2,0.8c1.9,1.6,4.6,1.6,6.5,0c0.5-0.5,1.3-0.8,2-0.8c0.7,0,1.4,0.3,1.9,0.8c0.9,0.7,1.9,1.1,3,1.2v-2\n\t\tc-1,0-1.2-0.4-1.7-0.8C31.4,27.5,30.3,27.1,29.1,27.1z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M6,23c0-0.6,0.5-1,1.1-1H32l-3.5,3.1h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2c0.7-0.8,0.6-2.1-0.2-2.8\n\t\tC33,20.2,32.6,20,32.1,20h-25c-1.7,0-3,1.3-3,3v3.2c0.5-0.5,1.2-0.8,1.9-1.1V23z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M8.9,19H15v-7.8c0-0.6-0.3-1.2-0.8-1.6C13.3,8.9,12,9.1,11.4,10l-4.1,5.9c-0.4,0.6-0.4,1.4-0.1,2.1C7.5,18.6,8.2,19,8.9,19\n\t\tz M13.1,11.2L13,17H8.9L13.1,11.2z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M26,18c0.4-0.6,0.4-1.4,0-2L19.7,5.6c-0.4-0.6-1-1-1.7-1c-1.1,0-2,0.9-2,2V19h8.3C25,19,25.7,18.6,26,18z M17.9,6.6\n\t\tl6.4,10.5h-6.4V6.6z\" class=\"clr-i-outline clr-i-outline-path-4\" /><path d=\"M34,31c-1.1-0.1-2.1-0.5-3-1.2c-0.5-0.5-1.2-0.8-2-0.8c-0.7,0-1.5,0.3-2,0.8c-0.9,0.8-2,1.1-3.1,1.1c-1.2,0-2.4-0.4-3.3-1.1\n\tc-1.2-1.1-3-1.1-4.1,0c-0.9,0.8-2.1,1.2-3.4,1.2c-1.2,0-2.3-0.4-3.2-1.2c-0.6-0.5-1.3-0.8-2-0.8c-0.8,0-1.7,0.3-2.3,0.8\n\tc-1,0.8-2.3,1.2-3.5,1.1V29c0.8,0,1.7-0.3,2.3-0.9c1-0.8,2.2-1.2,3.4-1.1c1.2,0,2.4,0.4,3.3,1.2c1.2,1.1,3,1.1,4.2,0\n\tc1.9-1.6,4.7-1.6,6.5,0c1.2,1.1,3,1.1,4.1,0c0.9-0.8,2.1-1.2,3.3-1.2c1.1,0,2.2,0.4,3,1.2C32.8,28.7,33,29,34,29L34,31z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M4.1,26.2c0.6-0.5,1.2-0.8,1.9-1V23c0-0.6,0.4-1.1,1-1.1h25L28.4,25h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2\n\tc0.7-0.9,0.5-2.1-0.4-2.8C32.9,20.1,32.4,20,32,20H7c-1.7,0-3,1.3-3,3L4.1,26.2L4.1,26.2z\" class=\"clr-i-solid clr-i-solid-path-2\" /><path d=\"M14.9,18.9H8.9c-1.1,0-2-0.9-2-2c0-0.4,0.1-0.8,0.4-1.2l4.1-5.8c0.6-0.9,1.9-1.1,2.8-0.5c0.5,0.4,0.8,1,0.8,1.6V18.9z\" class=\"clr-i-solid clr-i-solid-path-3\" /><path d=\"M24.3,18.9H16V6.4c0-1.1,0.9-2,2-2c0.7,0,1.3,0.4,1.7,1L26,15.8c0.6,1,0.2,2.2-0.7,2.7C25,18.7,24.6,18.8,24.3,18.9\n\tL24.3,18.9z\" class=\"clr-i-solid clr-i-solid-path-4\" />");
exports.ClrShapeCampervan = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M9.5,24C9.5,24,9.5,24,9.5,24C7.6,24,6,25.6,6,27.5c0,0,0,0,0,0C6,29.4,7.6,31,9.5,31c1.9,0,3.5-1.6,3.5-3.5\n\t\tS11.4,24,9.5,24z M9.5,29C8.7,29,8,28.3,8,27.5S8.7,26,9.5,26s1.5,0.7,1.5,1.5S10.3,29,9.5,29z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M23.5,24C23.5,24,23.5,24,23.5,24c-1.9,0-3.5,1.6-3.5,3.5c0,0,0,0,0,0c0,1.9,1.5,3.5,3.5,3.5c1.9,0,3.5-1.6,3.5-3.5\n\t\tS25.4,24,23.5,24z M23.5,29c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S24.3,29,23.5,29z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M33,20.1V20h-0.1l-3.5-5.5C31,13.6,32,12,32,10.3V9.7C32,7.1,29.9,5,27.3,5h-8.5c-1.9,0-3.7,1.2-4.4,3H5c-1.7,0-3,1.3-3,3\n\t\tv17h2V11c0-0.6,0.4-1,1-1h10.9L16,9.2C16.3,7.9,17.4,7,18.7,7h8.5C28.8,7,30,8.2,30,9.7v0.5c0,1.5-1.2,2.7-2.7,2.7H24v9h7.8\n\t\tl0.2,0.3V25c0,0.6-0.4,1-1,1h-2v2h2c1.7,0,3-1.3,3-3v-3.3L33,20.1z M26,20v-5h1.5l3.1,5H26z\" class=\"clr-i-outline clr-i-outline-path-3\" /><rect x=\"19\" y=\"9\" width=\"8\" height=\"2\" class=\"clr-i-outline clr-i-outline-path-4\" /><polygon points=\"20,22 22,22 22,13 15,13 15,28 17,28 17,15 20,15 \t\" class=\"clr-i-outline clr-i-outline-path-5\" /><path d=\"M6,20h7v-7H6V20z M8,15h3v3H8V15z\" class=\"clr-i-outline clr-i-outline-path-6\" /><path d=\"M9.5,24C7.6,24,6,25.6,6,27.5S7.6,31,9.5,31c0,0,0,0,0,0c1.9,0,3.5-1.6,3.5-3.5c0,0,0-0.1,0-0.1C13,25.5,11.4,24,9.5,24z\"\n\t\t class=\"clr-i-solid clr-i-solid-path-1\" /><circle cx=\"23.5\" cy=\"27.5\" r=\"3.5\" class=\"clr-i-solid clr-i-solid-path-2\" /><path d=\"M29.5,14.5C31,13.6,32,12,32,10.2V9.7c0,0,0,0,0-0.1C32,7,29.9,5,27.3,5h-8.5c-1.9,0-3.7,1.2-4.4,3H5c-1.7,0-3,1.3-3,3v17\n\t\th2V11c0-0.6,0.4-1,1-1h10.9L16,9.2C16.3,7.9,17.4,7,18.7,7h8.5C28.8,7,30,8.2,30,9.7v0.5c0,1.5-1.2,2.7-2.7,2.7H27h-3v9h7.8\n\t\tl0.2,0.3V25c0,0.6-0.4,1-1,1h-2v2h2c1.7,0,3-1.3,3-3v-3.3L29.5,14.5z\" class=\"clr-i-solid clr-i-solid-path-3\" /><rect x=\"19\" y=\"9\" width=\"7.9\" height=\"2\" class=\"clr-i-solid clr-i-solid-path-4\" /><polygon points=\"20,22 21.9,22 21.9,13 15,13 15,28 16.9,28 16.9,15 20,15 \t\" class=\"clr-i-solid clr-i-solid-path-5\" /><rect x=\"6\" y=\"13\" width=\"6.9\" height=\"7\" class=\"clr-i-solid clr-i-solid-path-6\" />");
exports.ClrShapeCaravan = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M13.5,21C11,21,9,23,9,25.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5C18,23,16,21,13.5,21z M13.5,28c-1.4,0-2.5-1.1-2.5-2.5\n\t\ts1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S14.9,28,13.5,28z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M33,24h-2v-7.5c0-0.5-0.1-1-0.4-1.5l-4.2-7.5c-0.5-1-1.5-1.5-2.6-1.5H5C3.3,6,2,7.3,2,9v14c0,1.7,1.3,3,3,3h2v-2H5\n\t\tc-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h18.8c0.4,0,0.7,0.2,0.9,0.5l4.2,7.5c0.1,0.1,0.1,0.3,0.1,0.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13\n\t\tc0.6,0,1-0.4,1-1S33.6,24,33,24z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M16,12H7v6h9V12z M14,16H9v-2h5V16z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M13.5,30C11,30,9,28,9,25.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5C18,28,16,30,13.5,30z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M33,24h-2v-7.5c0-0.5-0.1-1-0.4-1.5l-4.2-7.5c-0.5-1-1.5-1.5-2.6-1.5H5C3.3,6,2,7.3,2,9v14c0,1.7,1.3,3,3,3h2v-2H5\n\tc-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h18.8c0.4,0,0.7,0.2,0.9,0.5l4.2,7.5c0.1,0.1,0.1,0.3,0.1,0.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13\n\tc0.6,0,1-0.4,1-1S33.6,24,33,24z\" class=\"clr-i-solid clr-i-solid-path-2\" /><path d=\"M16,18H7v-6h9V18z\" class=\"clr-i-solid clr-i-solid-path-3\" />");
exports.ClrShapeFerry = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M29,25.1c-1.2,0-2.3,0.4-3.3,1.1c0,0,0,0,0,0c-1.1,1.1-3,1.1-4.1,0c-0.9-0.8-2.1-1.2-3.3-1.2c-1.2,0-2.3,0.4-3.2,1.2\n\t\tc-1.2,1.1-3,1.1-4.2,0C10,25.4,8.8,25,7.6,25c-1.2,0-2.4,0.4-3.4,1.1C3.6,26.7,2.8,27,2,27v2c1.3,0.1,2.5-0.4,3.4-1.2\n\t\tC6.1,27.3,6.9,27,7.7,27c0.8,0,1.5,0.3,2.1,0.8c1.9,1.6,4.7,1.6,6.5,0c0.6-0.5,1.3-0.8,2.1-0.8c0.8,0,1.5,0.3,2.1,0.8\n\t\tc1.9,1.6,4.6,1.6,6.5,0c0.5-0.5,1.3-0.8,2-0.8c0.7,0,1.5,0.3,2,0.8c0.9,0.7,2,1.1,3.1,1.2v-1.9c-0.7,0-1.4-0.3-1.9-0.9\n\t\tC31.3,25.4,30.1,25,29,25.1z\" class=\"clr-i-outline clr-i-outline-path-1\" /><path d=\"M5.9,23.2V20H32l-3.5,3h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2c0.5-0.6,0.5-1.4,0.2-2.1c-0.4-0.7-1-1-1.8-1h-4.4\n\t\tL22.5,11H17c-1.7,0-3,1.3-3,3h-2V8.1H6v6.1c-1.2,0.4-2,1.5-2,2.8v1.1V20v4.3l0.1-0.1C4.6,23.7,5.2,23.4,5.9,23.2z M8,10h2v4H8V10z\n\t\t M6,17c0-0.6,0.4-1,1-1h9v-2c0-0.6,0.4-1,1-1h5l0.6,1H18v2h5.8l1.2,2.1H6V17z\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M28.2,25c-1.2,0-2.4,0.4-3.3,1.2c-1.2,1.1-3,1.1-4.1,0c-1.9-1.6-4.6-1.6-6.5,0c-1.2,1.1-2.9,1.1-4.1,0\n\t\tc-0.9-0.8-2-1.2-3.2-1.2c-1.2,0-2.3,0.4-3.2,1.2C3.4,26.7,2.7,27,2,27v2c1.1-0.1,2.2-0.5,3.1-1.2C5.6,27.3,6.3,27,7,27\n\t\tc0.7,0,1.5,0.3,2,0.8c1.9,1.6,4.7,1.6,6.6,0c0.6-0.5,1.3-0.8,2.1-0.8c0.8,0,1.5,0.3,2.1,0.8c1.9,1.6,4.7,1.6,6.5,0\n\t\tc0.6-0.5,1.3-0.8,2.1-0.8c0.8,0,1.6,0.3,2.1,0.8c0.9,0.8,2.2,1.3,3.4,1.2v-2c-0.8,0-1.6-0.3-2.2-0.8C30.7,25.4,29.5,25,28.2,25z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M5.8,23.2v-3.3h26.1L28.4,23h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.1-0.2c0.7-0.9,0.5-2.1-0.4-2.8c-0.3-0.3-0.8-0.4-1.2-0.4\n\t\th-4.1l-5.4-7h-5.5c-1.7,0-3,1.3-3,3h-2V8H6v6.2c-1.2,0.4-2.1,1.5-2.1,2.8l0,7.2l0.1,0C4.5,23.7,5.1,23.4,5.8,23.2z M17.9,14h4.2\n\t\tl1.4,2h-5.7V14z M7.9,10h2v4h-2V10z\" class=\"clr-i-solid clr-i-solid-path-2\" />");
exports.ClrShapeTrailer = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M15,19.2c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8S18.2,19.2,15,19.2z M15,29.2c-2.3,0-4.2-1.9-4.2-4.2\n\t\ts1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S17.3,29.2,15,29.2z\" class=\"clr-i-outline clr-i-outline-path-1\" /><rect x=\"14\" y=\"24\" width=\"2\" height=\"2\" class=\"clr-i-outline clr-i-outline-path-2\" /><path d=\"M33,9H2v13.1c0,0,0,0,0,0C2,24.3,3.7,26,5.9,26H7v-2H5.9c-1,0-1.8-0.8-1.9-1.9V15h22v7.1c0,1-0.8,1.8-1.9,1.9H23v2h1.1\n\t\tc0,0,0,0,0,0c2.1,0,3.8-1.7,3.8-3.9V11h5c0.6,0,1-0.4,1-1S33.6,9,33,9z M26,13H4v-2h22V13z\" class=\"clr-i-outline clr-i-outline-path-3\" /><path d=\"M33,9H2v13.1c0,0,0,0,0,0C2,24.3,3.7,26,5.9,26H7v-2H5.9c-1,0-1.8-0.8-1.9-1.9V15h22v7.1c0,1-0.8,1.8-1.9,1.9H23v2h1.1\n\tc0,0,0,0,0,0c2.1,0,3.8-1.7,3.8-3.9V11h5c0.6,0,1-0.4,1-1S33.6,9,33,9z\" class=\"clr-i-solid clr-i-solid-path-1\" /><path d=\"M15,19.2c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8l0,0C20.8,21.8,18.2,19.2,15,19.2z M16,26h-2v-2h2V26z\" class=\"clr-i-solid clr-i-solid-path-2\" />");
exports.ClrShapeOnHoliday = (0, svg_tag_generator_1.clrIconSVG)("<path d=\"M18.08,2.34c-8.82,0-16,6.28-16,14s7.18,14,16,14A17.91,17.91,0,0,0,23,29.66l5.53,3.52a1,1,0,0,0,1.38-.3,1,1,0,0,0,.16-.54V25.61a13,13,0,0,0,4-9.27C34.08,8.62,26.9,2.34,18.08,2.34ZM28.37,24.45a1,1,0,0,0-.32.73v5.34l-4.38-2.79a1,1,0,0,0-.83-.11,16,16,0,0,1-4.76.72c-7.72,0-14-5.38-14-12s6.28-12,14-12,14,5.38,14,12A11.1,11.1,0,0,1,28.37,24.45Z\" class=\"clr-i-outline clr-i-outline-path-1\"/>\n  <path d=\"M31.1,15.82,31,15.67,28.5,13.44a3.25,3.25,0,0,0-2.39-.84l-5.38.34-3.59-3a.81.81,0,0,0-.52-.19H13.56a.78.78,0,0,0-.69.4.77.77,0,0,0,0,.79l1.36,2.44-4.71.29,1.31,1.52,15.39-1a1.65,1.65,0,0,1,1.22.43l2.36,2.13a.11.11,0,0,1,0,.07c0,.06-.09.05-.1.06H21.82l-.35.37-5.19,5.53H14.64l2.73-5.9H8.54L7.13,14.16,6.51,13a.8.8,0,0,0-1-.2A.81.81,0,0,0,5.2,13.9l2,3.94a1.21,1.21,0,0,0,1.08.65h6.57l-1.94,4.18A1.2,1.2,0,0,0,13,23.83a1.22,1.22,0,0,0,1,.56h2.43a1.17,1.17,0,0,0,.88-.39l5.18-5.51h7.16a1.65,1.65,0,0,0,1.52-.91A1.74,1.74,0,0,0,31.1,15.82ZM14.92,11.31h1.41l2.09,1.77L16,13.23Z\" class=\"clr-i-outline clr-i-outline-path-2\"/>\n  \n  <path d=\"M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a17.91,17.91,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.38-.3A1,1,0,0,0,30,32.5V25.77a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM29.84,18H21.51a.42.42,0,0,0-.3.13l-5.3,5.64a.39.39,0,0,1-.29.13H13.19a.41.41,0,0,1-.37-.58l2.47-5.32H7.46a.42.42,0,0,1-.36-.22l-2.7-5H6.24a.53.53,0,0,1,.39.18l1.56,1.69a.38.38,0,0,0,.33.14l6.18-.38-2-3.55h2.89a.47.47,0,0,1,.31.11L19.63,14l6.69-.35a2.44,2.44,0,0,1,1.81.63l2.47,2.23A.92.92,0,0,1,29.84,18Z\" class=\"clr-i-solid clr-i-solid-path-1\"/>\n  ");
exports.TravelShapes = {
    truck: exports.ClrShapeTruck,
    airplane: exports.ClrShapeAirplane,
    car: exports.ClrShapeCar,
    map: exports.ClrShapeMap,
    compass: exports.ClrShapeCompass,
    'map-marker': exports.ClrShapeMapMarker,
    bicycle: exports.ClrShapeBicycle,
    boat: exports.ClrShapeBoat,
    campervan: exports.ClrShapeCampervan,
    caravan: exports.ClrShapeCaravan,
    ferry: exports.ClrShapeFerry,
    trailer: exports.ClrShapeTrailer,
    'on-holiday': exports.ClrShapeOnHoliday,
};
Object.defineProperty(exports.TravelShapes, 'plane', (0, descriptor_config_1.descriptorConfig)(exports.TravelShapes.airplane));
Object.defineProperty(exports.TravelShapes, 'auto', (0, descriptor_config_1.descriptorConfig)(exports.TravelShapes.car));
if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
    window.ClarityIcons.add(exports.TravelShapes);
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
//# sourceMappingURL=travel-shapes.js.map