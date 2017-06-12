
var creative = {};

/**
* Window onload handler.
*/
function preInit() {
	setupDom();

	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT,init);
	}
}

/**
* Initializes the ad components
*/
function setupDom() {
	creative.dom = {};
	creative.dom.mainContainer = document.getElementById('main-panel');
	creative.dom.exit = document.getElementById('bg-exit');
	creative.dom.seeBtn = document.getElementById('cta-see');
}

/**
* Ad initialisation.
*/
function init() {

	addListeners();

	// Polite loading
	if (Enabler.isVisible()) {
		show();
	}
	else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
	}
}

/**
* Adds appropriate listeners at initialization time
*/
function addListeners() {
	creative.dom.exit.addEventListener('click', exitClickHandler, false);
	creative.dom.seeBtn.addEventListener('click', seeClickHandler, false);
}

/**
*  Shows the ad.
*/
function show() {
	creative.dom.exit.style.display = "block";
	showYTPlayer0('feature');
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
	if (creative.dom.ytplayer0 !== null) {
		// creative.dom.ytplayer0.pause();
		// creative.dom.ytplayer0.seek(0);
	}
	Enabler.exit('Background Exit');
}
function seeClickHandler() {
	if (creative.dom.ytplayer0 !== null) {
		creative.dom.ytplayer0.pause();
		// creative.dom.ytplayer0.seek(0);
	}
	Enabler.exitOverride('Clicked Main Video', 'https://www.youtube.com/watch?v=E8Qonb3UHLE&t=342s');
}

/**
* Shows the YT player.
*/
function showYTPlayer0(containerId) {
	if (!creative.dom.ytplayer0) {
		creative.ytplayer0Ended = false;
		creative.dom.ytplayer0 = document.createElement('gwd-youtube');
		var ytp = creative.dom.ytplayer0;
		ytp.setAttribute('id', 'ytp-0');
		// ytp.setAttribute('video-url', 'https://www.youtube.com/embed/06Ibb2Vm1WI');
		// ytp.setAttribute('video-url', 'https://www.youtube.com/watch?v=YgvGx3bhKBI?rel=0');
		ytp.setAttribute('video-url', 'https://www.youtube.com/embed/YgvGx3bhKBI');
		ytp.setAttribute('autoplay', 'preview'); // none, standard, preview, intro.
		ytp.setAttribute('preview-duration', '30');
		ytp.setAttribute('allowfullscreen', '');
		ytp.setAttribute('muted', '');
		// Adformat parameter for Mastheads.
		ytp.setAttribute('adformat', '1_8');
		ytp.setAttribute('controls', 'autohide'); // none, show, autohide.
		document.getElementById(containerId).appendChild(ytp);

		ytp.addEventListener('playpressed', function() {
			if (ytp.a.isMuted()) {
				ytp.toggleMute();
			}
		});

		// ytp.addEventListener('previewed0percent', function() {
		// 	Enabler.counter('YTP 0 previewed 0%');
		// 	if (!ytp.a.isMuted()) {
		// 		ytp.toggleMute();
		// 	}
		// }, false);

		// ytp.addEventListener('viewed0percent', function() {
		// 	Enabler.counter('YTP 0 viewed 0%');
		// 	document.getElementById('preload-bg').style.display = 'none';
		// }, false);

	} else {
		creative.dom.ytplayer0.style.display = 'block';
	}
}

/**
* Removes the YTPlayer from the DOM.
*/
// function hideYTPlayer0(containerId) {
// 	if (creative.dom.ytplayer0 !== null) {
// 		creative.dom.ytplayer0.pause();
// 		creative.dom.ytplayer0.style.display = 'none';
// 	}
// }

/**
*  Main onload handler
*/
window.addEventListener('load', preInit);
