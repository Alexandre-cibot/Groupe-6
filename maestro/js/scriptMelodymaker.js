
    var svg = document.querySelector("#Desktop-HD"),
        planets = [],
        alire=[],
        playMelodyMaker = document.getElementById("playMelodyMaker");

    svg.onmouseover = function(e) {
        if (e.target.tagName == "image" && !planets.some(function(value) {return value == e.target.id})) {
            e.target.style.opacity = ".5";
        }
    }

    svg.onmouseout = function(e) {
        if (e.target.tagName == "image" && !planets.some(function(value) {return value == e.target.id})) {
            e.target.style.opacity = "0";
        }
    }

    svg.onclick = function(e) {
        if (e.target.tagName == "image") {
            if (!planets.some(function(value) {return value == e.target.id})) {
                e.target.style.opacity = "1";
                var id = "";
                id = planets.filter(function(value) {
                    return value.substring(6,7) == e.target.id.substring(6,7);
                })[0];
                console.log(id);
                if (id) {
                    document.getElementById(id).style.opacity = "0";
                }
                planets = planets.filter(function(value) {
                    return value.substring(6,7) != e.target.id.substring(6,7);
                });
                planets.push(e.target.id);
            } else {
                e.target.style.opacity = ".5";
                planets = planets.filter(function(value) {return value != e.target.id});
            }
        }
    }

    playMelodyMaker.addEventListener("click", function() {
        alire=[];
        for (var i = 0; i < planets.length; i++) {
            alire[(planets[i].substring(6,7))-1]=planets[i].substring(4,5);
        };

        for (var i = 0, deb=0; i < orderedBuffers.length; i++) {
           // console.log(planets.substring(5,6));
           // alire.push(planets[i].substring(4,5));
          audioCtx = new AudioContext;
          source = audioCtx.createBufferSource();
          source.buffer = orderedBuffers[alire[i]];
          source.connect(audioCtx.destination);
            //console.log(buffers[i].duration);
          source.start(deb);
          deb += orderedBuffers[i].duration;
        };
        console.log(alire);
    });
