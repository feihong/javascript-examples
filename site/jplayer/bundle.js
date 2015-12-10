(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  initPlayer({
    playerId: 'jquery_jplayer_1',
    containerId: 'jp_container_1',
    title: '每个人都是颗流星',
    file: 'liuxing.m4a'
  });
});

function initPlayer(config) {
  $('#' + config.playerId).jPlayer({
    ready: function ready() {
      $(this).jPlayer('setMedia', {
        title: config.title,
        m4a: window.site + 'audio/' + config.file
      });
    },
    cssSelectorAncestor: '#' + config.containerId,
    swfPath: 'https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/',
    supplied: 'm4a',
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2pwbGF5ZXIvYXBwLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxDQUFDLENBQUMsWUFBTTtBQUNOLFlBQVUsQ0FBQztBQUNULFlBQVEsRUFBRSxrQkFBa0I7QUFDNUIsZUFBVyxFQUFFLGdCQUFnQjtBQUM3QixTQUFLLEVBQUUsVUFBVTtBQUNqQixRQUFJLEVBQUUsYUFBYTtHQUNwQixDQUFDLENBQUE7Q0FDSCxDQUFDLENBQUE7O0FBRUYsU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQzFCLEdBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMvQixTQUFLLEVBQUUsaUJBQVc7QUFDaEIsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDMUIsYUFBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO0FBQ25CLFdBQUcsRUFBSyxNQUFNLENBQUMsSUFBSSxjQUFTLE1BQU0sQ0FBQyxJQUFJLEFBQUU7T0FDMUMsQ0FBQyxDQUFBO0tBQ0g7QUFDRCx1QkFBbUIsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVc7QUFDN0MsV0FBTyxFQUFFLCtEQUErRDtBQUN4RSxZQUFRLEVBQUUsS0FBSztBQUNmLHFCQUFpQixFQUFFLElBQUk7QUFDdkIsWUFBUSxFQUFFLEtBQUs7QUFDZixpQkFBYSxFQUFFLElBQUk7QUFDbkIsY0FBVSxFQUFFLElBQUk7QUFDaEIscUJBQWlCLEVBQUUsSUFBSTtBQUN2QixrQkFBYyxFQUFFLElBQUk7R0FDckIsQ0FBQyxDQUFBO0NBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4kKCgpID0+IHtcbiAgaW5pdFBsYXllcih7XG4gICAgcGxheWVySWQ6ICdqcXVlcnlfanBsYXllcl8xJyxcbiAgICBjb250YWluZXJJZDogJ2pwX2NvbnRhaW5lcl8xJyxcbiAgICB0aXRsZTogJ+avj+S4quS6uumDveaYr+mil+a1geaYnycsXG4gICAgZmlsZTogJ2xpdXhpbmcubTRhJyxcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGluaXRQbGF5ZXIoY29uZmlnKSB7XG4gICQoJyMnICsgY29uZmlnLnBsYXllcklkKS5qUGxheWVyKHtcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLmpQbGF5ZXIoJ3NldE1lZGlhJywge1xuICAgICAgICB0aXRsZTogY29uZmlnLnRpdGxlLFxuICAgICAgICBtNGE6IGAke3dpbmRvdy5zaXRlfWF1ZGlvLyR7Y29uZmlnLmZpbGV9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIGNzc1NlbGVjdG9yQW5jZXN0b3I6ICcjJyArIGNvbmZpZy5jb250YWluZXJJZCxcbiAgICBzd2ZQYXRoOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanBsYXllci8yLjkuMi9qcGxheWVyLycsXG4gICAgc3VwcGxpZWQ6ICdtNGEnLFxuICAgIHVzZVN0YXRlQ2xhc3NTa2luOiB0cnVlLFxuICAgIGF1dG9CbHVyOiBmYWxzZSxcbiAgICBzbW9vdGhQbGF5QmFyOiB0cnVlLFxuICAgIGtleUVuYWJsZWQ6IHRydWUsXG4gICAgcmVtYWluaW5nRHVyYXRpb246IHRydWUsXG4gICAgdG9nZ2xlRHVyYXRpb246IHRydWVcbiAgfSlcbn1cbiJdfQ==
