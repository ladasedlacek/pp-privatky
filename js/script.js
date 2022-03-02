/* jshint esversion:6 */
$(document).ready(function () {
	// Toggle layouts
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
});

