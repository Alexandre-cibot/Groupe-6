/**
 * Created by Alexandre on 29/06/2016.
 */
function getWindowHeight() {
    var windowHeight = 0;
    if (typeof(window.innerHeight) == 'number') {
        windowHeight = window.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body && document.body.clientHeight) {
                windowHeight = document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}
function getWindowWidth() {
    var windowWidth = 0;
    if (typeof(window.innerWidth) == 'number') {
        windowWidth = window.innerWidth;
    } else {
        if (document.documentElement && document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            if (document.body && document.body.clientWidth) {
                windowWidth = document.body.clientWidth;
            }
        }
    }
    return windowWidth;
}

ny = getWindowHeight();
nx = getWindowWidth();
var screen_resolution = nx + "x" + ny;
//console.log(screen_resolution);

    $.ajax({
        type: "POST",
        url: 'transfert-resolution.php',
        data: 'screen_resolution=' + screen_resolution,
        dataType : 'html',
        success : function(data){
            console.log(data)
        }
    });

