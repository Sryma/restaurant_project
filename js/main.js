//slick carousel
 $('.carousel').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });


$(".coffee").hover(function () {
	$(this).fadeOut(2000);
	$(this).fadeIn(2000);
});
$(".flex-container h2").hover(function () {
	$(this).fadeOut(2000);
	$(this).fadeIn(2000);
});

		$(function(){
	$(".shop").typed({
		strings: ["Come ", "with.", "US" , "Come with us"],
		typeSpeed: 2,
	});
});