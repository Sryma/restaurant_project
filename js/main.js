$(".coffee").hover(function () {
	$(this).fadeOut(2000);
	$(this).fadeIn(2000);
});
$(".flex-container h2").hover(function () {
	$(this).fadeOut(2000);
	$(this).fadeIn(2000);
});
$(".image h1").animateText([
            {
                offset: 0,
                duration: 1000,
                animation: "explode"
            }
    ]);