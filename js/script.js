/* jshint esversion:6 */
$(document).ready(function () {
	// toggle layouts (desktop only)
	$("#layout_switch button").on("click", function () {
		$("#body2").removeClass("layout-0").removeClass("layout-1");
		$("body").addClass("mobile");
	});
	$("#layout_switch button:nth-child(2)").on("click", function () {
		$("#body2").addClass("layout-0");
		$("body.mobile").removeClass("mobile");
	});
	$("#layout_switch button:nth-child(3)").on("click", function () {
		$("#body2").addClass("layout-1");
		$("body.mobile").removeClass("mobile");
	});

	// run all functions
	-1 < window.location.href.indexOf("admin") || -1 < window.location.href.indexOf("127") ? (carouselSelector(), brandSelect(), addAddons()) : (insertCarousel(), removeAddons())

	// remove html addons content from the web
	function removeAddons() {
		$('#celek .ppAddons').remove()
	}

	// show addons 
	function addAddons() {
		$("#celek .ppAddons").css({'display' : 'block'});
	}
});