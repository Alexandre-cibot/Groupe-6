var audioCtx = new (window.AudioContext || window.webkitAudioContext)(),
    source,
    buffers = [],
    promises=[],
    unorderedBuffers = [],
    orderedBuffers = [],
    sons=["ff-001.wav","ff-002.wav","ff-003.wav","ff-004.wav","ff-005.wav","ff-006.wav","ff-007.wav","ff-008.wav","ff-009.wav","ff-010.wav","ff-011.wav","ff-012.wav"];

function getData(src) {
  //source = audioCtx.createBufferSource();
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', "piano/"+src, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      var audioData = request.response;

      //resolve(request.response);

      audioCtx.decodeAudioData(audioData, function(buffer) {
          // source.buffer = buffer;
          // source.connect(audioCtx.destination);
          //source.loop = true;
          unorderedBuffers.push(src);
          console.log("buffer " + src);
          resolve(buffer);

        },
        function(e){
          reject(Error("Error with decoding audio data" + e.err));
          //"Error with decoding audio data" + e.err
        });
    }
    request.send();
  });
}

// wire up buttons to stop and play audio
for (var i = 0; i < sons.length; i++) {
  
  promises[i] = getData(sons[i]).then(function(buffer) {
    buffers.push(buffer);
    
  });

};

  Promise.all(promises).then(function(values) {


    for (var i = 0; i < unorderedBuffers.length; i++) {
      //var pos = parseInt(unorderedBuffers[i].split(".")[0].split("").reverse().join());
      var pos = parseInt(unorderedBuffers[i].substring(3,6));
      console.log(pos);
      orderedBuffers[pos-1] = buffers[i];
    }

    console.log("buffers ready!");
    //console.dir(buffers);
    
  });








