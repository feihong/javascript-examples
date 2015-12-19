(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _lazy = require('lazy.js');

var _lazy2 = _interopRequireDefault(_lazy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function print(obj) {
  var para = $('<p></p>');
  para.text(JSON.stringify(obj));
  $('#output').append(para);
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

},{"lazy.js":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NS4yLjAvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic2l0ZS9sYXp5LWpzL2FwcC5iYWJlbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDRUEsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFO0FBQ2xCLE1BQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN2QixNQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUM5QixHQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0NBQzFCOztBQUVELElBQUksTUFBTSxHQUFHLGVBQUssS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3NCQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7Q0FBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDbkUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztBQUViLElBQUksSUFBSSxHQUFHLG9CQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzFCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBQ3ZDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTs7QUFFYixJQUFJLElBQUksR0FBRyxvQkFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDekMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBMYXp5IGZyb20gJ2xhenkuanMnXG5cbmZ1bmN0aW9uIHByaW50KG9iaikge1xuICBsZXQgcGFyYSA9ICQoJzxwPjwvcD4nKVxuICBwYXJhLnRleHQoSlNPTi5zdHJpbmdpZnkob2JqKSlcbiAgJCgnI291dHB1dCcpLmFwcGVuZChwYXJhKVxufVxuXG5sZXQgYXJyYXkxID0gTGF6eS5yYW5nZSgxLCA4KS5tYXAoeCA9PiBgb3B0aW9uICR7eCArIDF9YCkudG9BcnJheSgpXG5wcmludChhcnJheTEpXG5cbmxldCBzZXExID0gTGF6eShbMSwgMiwgM10pXG5sZXQgYXJyYXkyID0gc2VxMS5jb25jYXQoWzRdKS50b0FycmF5KClcbnByaW50KGFycmF5MilcblxubGV0IHNlcTIgPSBMYXp5KFs0LCA1LCA2LCA3XSlcbmxldCBhcnJheTMgPSBzZXEyLndpdGhvdXQoNSwgNykudG9BcnJheSgpXG5wcmludChhcnJheTMpXG4iXX0=
