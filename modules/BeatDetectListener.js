module.exports = {
	init: function (coreAudio) {
		var engine = coreAudio.createNewAudioEngine();

		function processAudio( inputBuffer ) {
		    console.log( "%d channels", inputBuffer.length );
		    console.log( "Channel 0 has %d samples", inputBuffer[0].length );

		    return inputBuffer;
		}

		engine.addAudioCallback( processAudio );
	}
}
