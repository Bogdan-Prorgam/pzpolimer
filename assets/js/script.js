var swiper = new Swiper(".swiper_one", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper_2 = new Swiper(".swiper_two", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper_3_per = 4;
var swiper_4_per = 3;
var dinamic_page = false;

if (window.innerWidth < 1170) {
	swiper_3_per = 3;
}
if (window.innerWidth < 1100) {
	swiper_4_per = 2;
}
if (window.innerWidth < 910) {
	swiper_3_per = 2;
}
if (window.innerWidth < 735) {
	swiper_4_per = 1;
}
if (window.innerWidth < 550) {
	swiper_3_per = 1;
}
if (window.innerWidth < 500) {
	dinamic_page = true;
}

$(window).click(function(){ 
	$('#request_id').fadeOut(500);});
$('.button_request').click(function(event){ 
	event.stopPropagation();
	$('#request_id').fadeIn(500);});
$('.request').click(function(event){ 
	event.stopPropagation();});
$(".close").click(function(){
	$('#request_id').fadeOut(500);
});

var swiper_3 = new Swiper(".swiper_free", {
	slidesPerView: swiper_3_per,
	spaceBetween: 35,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper_4 = new Swiper(".swiper_fore", {
	slidesPerView: swiper_4_per,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var array_pag = [
	"Полистирол",
	"Полиэтилен",
	"Сэвилен",
	"Полипропилен",
	"Поликарбонат",
	"Полиамид",
	"AБС-пластик",
];

var swiper = new Swiper(".swiper_materials", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: dinamic_page,
		renderBullet: function (index, className) {
			return (
				'<span class="' +
				className +
				' custom_bullet_des">' + 
				array_pag[index] +
				"</span>"
			);
		},
	},
});

$(function () {
	$(".container_img").click(function (event) {
		var i_path = $(this).children("img").attr("src");
		$("body").append(
			'<div id="overlay"></div><div id="magnify"><img src="' +
				i_path +
				'"><div id="close-popup"><i></i></div></div>'
		);
		$("#magnify").css({
			left: ($(document).width() - $("#magnify").outerWidth()) / 2,
			top: ($(window).height() - $("#magnify").outerHeight()) / 2,
		});
		$("#overlay, #magnify").fadeIn("fast");
	});

	$("body").on("click", "#close-popup, #overlay", function (event) {
		event.preventDefault();

		$("#overlay, #magnify").fadeOut("fast", function () {
			$("#close-popup, #magnify, #overlay").remove();
		});
	});
	$(".minimiz").click(function (event) {
		console.log("dwdwdwdw");
	});
});
