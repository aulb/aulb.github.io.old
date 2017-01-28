(function() { 
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var randBackgroundDegree = function() {
	var sunset = document.getElementsByClassName("sunset")[0]; // Uhh, only one

	var rand = getRandomInt(1, 360);
	var bg = 'linear-gradient(' + rand + 'deg, #fde6b1, #f8bbb1, #d0a8b9, #9a8daf, #6f749e)';
	sunset.setAttribute('background', bg);
	console.log(sunset);
	console.log(bg);
};

randBackgroundDegree();
})();
/*
@-webkit-keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
@-o-keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
@keyframes AnimationName { 
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}

    background: linear-gradient(242deg, #fde6b1, #f8bbb1, #d0a8b9, #9a8daf, #6f749e);
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 25s ease infinite;
    -moz-animation: AnimationName 25s ease infinite;
    -o-animation: AnimationName 25s ease infinite;
    animation: AnimationName 25s ease infinite; */