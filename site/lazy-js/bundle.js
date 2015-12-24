webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lazy = __webpack_require__(159);

	var _lazy2 = _interopRequireDefault(_lazy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function print(obj) {
	  var para = document.createElement('p');
	  para.textContent = JSON.stringify(obj);
	  document.getElementById('output').appendChild(para);
	}

	var array1 = _lazy2.default.range(1, 8).map(function (x) {
	  return 'option ' + (x + 1);
	}).toArray();
	print(array1);

	var seq1 = (0, _lazy2.default)([1, 2, 3]);
	var array2 = seq1.concat([4]).toArray();
	print(array2);

	var seq2 = (0, _lazy2.default)([4, 5, 6, 7]);
	var array3 = seq2.without(5, 7).toArray();
	print(array3);

	var set = new Set([44, 55, 66, 77]);
	print([].concat(_toConsumableArray(set))); // [44,55,66,77]
	print((0, _lazy2.default)(set).toArray()); // []

/***/ }
]);