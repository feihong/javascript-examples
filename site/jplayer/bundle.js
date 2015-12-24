webpackJsonp([3],[
/* 0 */
/***/ function(module, exports) {

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

/***/ }
]);