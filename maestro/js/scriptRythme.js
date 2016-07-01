var tableRythme = document.querySelector("table"),
	playRythme = document.getElementById("playRythme"),
	colorRythme="",
	sequenceRythme= new Array();;

tableRythme.addEventListener("click", function(e) {
	var td = e.target,
		tr = td.parentNode,
		tdNum = td.getAttribute("data-col-num"),
		trNum = tr.getAttribute("data-row-num"),
		puceDisplay = td.children[0];
	//console.log(td.children[0].style);

	//puceDisplay = (imgOpacity.style.opacity == "1") ? "0" : "1";
	if(trNum==9){
		colorRythme= "color1";
	}else if(trNum==10){
		colorRythme= "color2";
	}else{
		colorRythme= "color3";
	}
	td.classList.toggle(colorRythme);
	puceDisplay.classList.toggle("DisplayNone");
	td.classList.toggle("active");
});


playRythme.addEventListener("click", function(e) {
	 sequenceRythme=[];
	for (var i = 0; i < 6; i++) {
		var tds = document.querySelectorAll("[data-col-num='"+i+"']");
		sequenceRythme[i]= new Array()
		for (var j = 0; j < tds.length; j++) {
			if(tds[j].classList.contains("active")){
				sequenceRythme[i].push(tds[j].parentNode.getAttribute("data-row-num"));
			};			
		};
		console.log(sequenceRythme[i]);
	};
	for (var i = 0, deb=0; i < sequenceRythme.length; i++) {
        var durations = [];

        for (var j = 0; j < sequenceRythme[i].length; j++) {
            audioCtx = new AudioContext;
            source = audioCtx.createBufferSource();
            source.buffer = orderedBuffers[(sequenceRythme[i][j])];
            source.connect(audioCtx.destination);
            source.start(deb);
            durations.push(orderedBuffers[sequenceRythme[i][j]].duration);
        }
        deb += Math.max.apply(this, durations);
    };
});