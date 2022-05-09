/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Duplicate plugin/preset detected.\nIf you'd like to use two separate instances of a plugin,\nthey need separate names, e.g.\n\n  plugins: [\n    ['some-plugin', {}],\n    ['some-plugin', {}, 'some unique name'],\n  ]\n\nDuplicates detected are:\n[\n  {\n    \"alias\": \"/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/preset-env/lib/index.js\",\n    \"dirname\": \"/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem\",\n    \"ownPass\": false,\n    \"file\": {\n      \"request\": \"@babel/preset-env\",\n      \"resolved\": \"/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/preset-env/lib/index.js\"\n    }\n  },\n  {\n    \"alias\": \"/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/preset-env/lib/index.js\",\n    \"options\": {\n      \"forceAllTransforms\": true,\n      \"useBuiltIns\": \"entry\",\n      \"corejs\": 3,\n      \"modules\": false,\n      \"exclude\": [\n        \"transform-typeof-symbol\"\n      ]\n    },\n    \"dirname\": \"/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem\",\n    \"ownPass\": false,\n    \"file\": {\n      \"request\": \"@babel/preset-env\",\n      \"resolved\": \"/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/preset-env/lib/index.js\"\n    }\n  }\n]\n    at assertNoDuplicates (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-descriptors.js:239:13)\n    at createDescriptors (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-descriptors.js:147:3)\n    at createDescriptors.next (<anonymous>)\n    at createPresetDescriptors (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-descriptors.js:134:17)\n    at createPresetDescriptors.next (<anonymous>)\n    at presets (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-descriptors.js:73:26)\n    at presets.next (<anonymous>)\n    at mergeChainOpts (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-chain.js:420:34)\n    at mergeChainOpts.next (<anonymous>)\n    at /mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-chain.js:378:14\n    at Generator.next (<anonymous>)\n    at loadFileChain (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-chain.js:232:24)\n    at loadFileChain.next (<anonymous>)\n    at buildRootChain (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/config-chain.js:95:27)\n    at buildRootChain.next (<anonymous>)\n    at loadPrivatePartialConfig (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/partial.js:103:62)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at /mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/@babel/core/lib/config/partial.js:149:25\n    at Generator.next (<anonymous>)\n    at step (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/gensync/index.js:261:32)\n    at /mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/gensync/index.js:223:11)\n    at /mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/gensync/index.js:50:45\n    at step (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/gensync/index.js:287:14)\n    at /mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/mnt/c/My Personal Projects/Microverse/week_30/practice-using-rails-react-gem/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=application-8c068864dd244d5340bd.js.map