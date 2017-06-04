$(document).ready(function() {

document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('purpleButton').onclick = switchPurple;
document.getElementById('pinkButton').onclick = switchPink;
document.getElementById('turqButton').onclick = switchTurq;
document.getElementById('grayscaleButton').onclick = switchGrayscale;
document.getElementById('blueButton').onclick = switchBlue;


function switchYellow() {
	hideEverything();
	$(".skillbar-bar").addClass("yellow-background");
	$("button").addClass("yellow-background");
	$(".menu li").addClass("yellow-background");
	$("li a").addClass("white-color");
	$(".opacity").addClass("yellow-opacity");
	$("dt").addClass("yellow-color");
	$("label").addClass("yellow-color");
}

function switchPurple() {
	hideEverything();
	$(".skillbar-bar").addClass("purple-background");
	$("button").addClass("purple-background");
	$(".menu li").addClass("purple-background");
	$("li a").addClass("white-color");
	$(".opacity").addClass("purple-opacity");
	$("dt").addClass("purple-color");
	$("label").addClass("purple-background white-color");
}

function switchGrayscale() {
	hideEverything();
	$(".skillbar-bar").addClass("grayscale-background");
	$("button").addClass("grayscale-background");
	$(".menu li").addClass("grayscale-background");
	$("a").addClass("white-color");
	$(".opacity").addClass("grayscale-opacity");
	$("dt").addClass("grayscale-color");
	$("label").addClass("grayscale-background white-color");

}
function switchPink() {
	hideEverything();
	$(".skillbar-bar").addClass("pink-background");
	$("button").addClass("pink-background");
	$(".menu li").addClass("pink-background");
	$("li a").addClass("white-color");
	$(".opacity").addClass("pink-opacity");
	$("dt").addClass("pink-color");
	$("label").addClass("pink-color");

}
function switchTurq() {
	hideEverything();
	$(".skillbar-bar").addClass("turq-background");
	$("button").addClass("turq-background");
	$(".menu li").addClass("turq-background");
	$("li a").addClass("white-color");
	$(".opacity").addClass("turq-opacity");
	$("dt").addClass("turq-color");
	$("label").addClass("turq-color");

}

function switchBlue() {
	hideEverything();
	$(".skillbar-bar").addClass("blue-background");
	$("button").addClass("blue-background");
	$(".menu li").addClass("blue-background");
	$("li a").addClass("white-color");
	$(".opacity").addClass("blue-opacity");
	$("dt").addClass("blue-color");
	$("label").addClass("blue-color");
}


function hideEverything() {
	$(".switcher-first").hide(1000);
	$(".switcher-second").hide(1000);
	$("#choose").hide(1000);
}

});



//FILTER FUNCTIONS //

function hideItems() {
	$(".items").hide();
};

$("#writing").click(function(){
	hideItems();
	$(".items.writing").show(3000);

});

$("#graphics").click(function(){
	hideItems();
	$(".items.graphics").show(3000);
});

$("#layout").click(function(){
	hideItems();
	$(".items.layout").show(3000);

});

$("#reset").click(function(){
	hideItems();
	$(".items").show(3000);

});



// ANIMATE SKILL BARS:

$(window).scroll(function() {
    if ($('#skills-section').is(':visible')) {

    	$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
			},6000);
		});
    }
});







