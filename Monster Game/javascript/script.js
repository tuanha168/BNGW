$(document).ready(function(){
	var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

	lightningone();
	lightningtwo();
	lightningthree();

	$(".headsstrip").click(function () {
		if (headclix < 9) {
			$(".headsstrip").animate({left:"-=367px"},500);
			headclix += 1;
		}
		else {	
			$(".headsstrip").animate({left:"0px"},500);
			headclix = 0;
		}
	});
	$(".eyesstrip").click(function () {
		if (eyeclix < 9) {
			$(".eyesstrip").animate({left:"-=367px"},500);
			eyeclix += 1;
		}
		else {	
			$(".eyesstrip").animate({left:"0px"},500);
			eyeclix = 0;
		}
	});
	$(".nosesstrip").click(function () {
		if (noseclix < 9) {
			$(".nosesstrip").animate({left:"-=367px"},500);
			noseclix += 1;
		}
		else {	
			$(".nosesstrip").animate({left:"0px"},500);
			noseclix = 0;
		}
	});
	$(".mouthsstrip").click(function () {
		if (mouthclix < 9) {
			$(".mouthsstrip").animate({left:"-=367px"},500);
			mouthclix += 1;
		}
		else {	
			$(".mouthsstrip").animate({left:"0px"},500);
			mouthclix = 0;
		}
	});
});


function lightningone() {
	$("#content #light1").fadeIn("250").fadeOut("250");

	setTimeout("lightningone()", 3275);
};

function lightningtwo() {

	$("#content #light2").fadeIn("250").fadeOut("250");

	setTimeout("lightningtwo()", 5837);
};

function lightningthree() {
	$("#content #light3").fadeIn("250").fadeOut("250");

	setTimeout("lightningthree()", 8917);
};
