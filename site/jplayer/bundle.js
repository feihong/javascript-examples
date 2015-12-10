(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  initPlayer({
    player: '#jquery_jplayer_1',
    container: '#jp_container_1',
    title: '每个人都是颗流星',
    file: 'liuxing.m4a',
    ready: function ready() {
      return console.log('ready');
    },
    timeupdate: function timeupdate(e) {
      return console.log(e.jPlayer.status.currentTime);
    }
  });
});

function initPlayer(config) {
  $(config.player).jPlayer({
    ready: function ready() {
      $(this).jPlayer('setMedia', {
        title: config.title,
        m4a: window.site + 'audio/' + config.file
      });
      config.ready();
    },
    timeupdate: config.timeupdate,
    cssSelectorAncestor: config.container,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzaXRlL2pwbGF5ZXIvYXBwLmJhYmVsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxDQUFDLENBQUMsWUFBTTtBQUNOLFlBQVUsQ0FBQztBQUNULFVBQU0sRUFBRSxtQkFBbUI7QUFDM0IsYUFBUyxFQUFFLGlCQUFpQjtBQUM1QixTQUFLLEVBQUUsVUFBVTtBQUNqQixRQUFJLEVBQUUsYUFBYTtBQUNuQixTQUFLLEVBQUU7YUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztLQUFBO0FBQ2pDLGNBQVUsRUFBRSxvQkFBQyxDQUFDO2FBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7S0FBQTtHQUM3RCxDQUFDLENBQUE7Q0FDSCxDQUFDLENBQUE7O0FBRUYsU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQzFCLEdBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3ZCLFNBQUssRUFBRSxpQkFBVztBQUNoQixPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUMxQixhQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7QUFDbkIsV0FBRyxFQUFLLE1BQU0sQ0FBQyxJQUFJLGNBQVMsTUFBTSxDQUFDLElBQUksQUFBRTtPQUMxQyxDQUFDLENBQUE7QUFDRixZQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7S0FDZjtBQUNELGNBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtBQUM3Qix1QkFBbUIsRUFBRSxNQUFNLENBQUMsU0FBUztBQUNyQyxXQUFPLEVBQUUsK0RBQStEO0FBQ3hFLFlBQVEsRUFBRSxLQUFLO0FBQ2YscUJBQWlCLEVBQUUsSUFBSTtBQUN2QixZQUFRLEVBQUUsS0FBSztBQUNmLGlCQUFhLEVBQUUsSUFBSTtBQUNuQixjQUFVLEVBQUUsSUFBSTtBQUNoQixxQkFBaUIsRUFBRSxJQUFJO0FBQ3ZCLGtCQUFjLEVBQUUsSUFBSTtHQUNyQixDQUFDLENBQUE7Q0FDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbiQoKCkgPT4ge1xuICBpbml0UGxheWVyKHtcbiAgICBwbGF5ZXI6ICcjanF1ZXJ5X2pwbGF5ZXJfMScsXG4gICAgY29udGFpbmVyOiAnI2pwX2NvbnRhaW5lcl8xJyxcbiAgICB0aXRsZTogJ+avj+S4quS6uumDveaYr+mil+a1geaYnycsXG4gICAgZmlsZTogJ2xpdXhpbmcubTRhJyxcbiAgICByZWFkeTogKCkgPT4gY29uc29sZS5sb2coJ3JlYWR5JyksXG4gICAgdGltZXVwZGF0ZTogKGUpID0+IGNvbnNvbGUubG9nKGUualBsYXllci5zdGF0dXMuY3VycmVudFRpbWUpLFxuICB9KVxufSlcblxuZnVuY3Rpb24gaW5pdFBsYXllcihjb25maWcpIHtcbiAgJChjb25maWcucGxheWVyKS5qUGxheWVyKHtcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLmpQbGF5ZXIoJ3NldE1lZGlhJywge1xuICAgICAgICB0aXRsZTogY29uZmlnLnRpdGxlLFxuICAgICAgICBtNGE6IGAke3dpbmRvdy5zaXRlfWF1ZGlvLyR7Y29uZmlnLmZpbGV9YFxuICAgICAgfSlcbiAgICAgIGNvbmZpZy5yZWFkeSgpXG4gICAgfSxcbiAgICB0aW1ldXBkYXRlOiBjb25maWcudGltZXVwZGF0ZSxcbiAgICBjc3NTZWxlY3RvckFuY2VzdG9yOiBjb25maWcuY29udGFpbmVyLFxuICAgIHN3ZlBhdGg6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcGxheWVyLzIuOS4yL2pwbGF5ZXIvJyxcbiAgICBzdXBwbGllZDogJ200YScsXG4gICAgdXNlU3RhdGVDbGFzc1NraW46IHRydWUsXG4gICAgYXV0b0JsdXI6IGZhbHNlLFxuICAgIHNtb290aFBsYXlCYXI6IHRydWUsXG4gICAga2V5RW5hYmxlZDogdHJ1ZSxcbiAgICByZW1haW5pbmdEdXJhdGlvbjogdHJ1ZSxcbiAgICB0b2dnbGVEdXJhdGlvbjogdHJ1ZVxuICB9KVxufVxuIl19
