var injector = require('./modules/injector');
var BeatDetectListener = require('./modules/BeatDetectListener');

module.exports = {
	init: function () {
		BeatDetectListener.init(injector.getCoreAudio());
	}
}

module.exports.init();
