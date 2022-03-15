// run all functions
-1 < window.location.href.indexOf("admin") || -1 < window.location.href.indexOf("127") ? (carouselSelector(), brandSelect()) : (insertCarousel(), removeAddons())

// remove html addons content from the web
function removeAddons() {
	$('#celek .ppAddons').remove()
}