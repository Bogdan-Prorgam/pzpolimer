var swiper = new Swiper(".swiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' +
				className +
				' custom_bullet_des"><span class="number_text">0' +
				(index + 1) +
				"</span></span>"
			);
		},
	},
});

var info = document.querySelector("#icon_info");
var navigations = document.querySelector(".swiper-pagination");

if(window.innerWidth < 625){
	info.onmouseout = function() {
		navigations.style.display = "flex"
	}
	info.onmouseover = function() {
		navigations.style.display = "none"
	};
}

var request = document.querySelector(".button_request");
var navigations_arrow = document.querySelector(".navigation_block");

request.onmouseout = function() {
	navigations_arrow.style.display = "block"
}
request.onmouseover = function() {
	navigations_arrow.style.display = "none"
};

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

if (window.innerWidth < 1000) {
	document.querySelectorAll(".swiper-slide")[0].style.backgroundImage =
		"linear-gradient(rgba(1, 22, 59, 0.6), rgba(1, 22, 59, 0.6)), url('./assets/img/slider/img_bg_1.png')";
	document.querySelectorAll(".swiper-slide")[1].style.backgroundImage =
		"linear-gradient(rgba(7, 45, 90, 0.6), rgba(7, 45, 90, 0.6)), url('./assets/img/slider/img_bg_2.png')";
	document.querySelectorAll(".swiper-slide")[2].style.backgroundImage =
		"linear-gradient(rgba(196, 7, 7, 0.6), rgba(196, 7, 7, 0.6)), url('./assets/img/slider/img_bg_3.png')";
}

// window.addEventListener('resize', () => {
// 	// We execute the same script as before
// 	let vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// const appHeight = () => {
//     const doc = document.documentElement
//     doc.style.setProperty('--app-height', '${window.innerHeight}px')
// }
// window.addEventListener('resize', appHeight)
// appHeight()
function resetHeight(){
    document.body.style.height = window.innerHeight + "px";
	let array = document.querySelectorAll(".swiper-wrapper .swiper-slide")
	for (var i = 0; i < array.length; i++) {
		array[i].querySelector(".wrapper_slider_content .top_content .image_slider_right").style.height = window.innerHeight + "px";
		array[i].querySelector(".wrapper_slider_content .left_block_bg").style.height = window.innerHeight + "px";
		array[i].querySelector(".top_content").style.height = window.innerHeight + "px";
		array[i].querySelector(".wrapper_slider_content").style.height = window.innerHeight + "px";
	}
}
window.addEventListener("resize", resetHeight);
resetHeight();