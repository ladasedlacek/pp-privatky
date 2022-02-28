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

	// if admin is active
	-1 < window.location.href.indexOf("admin") ? brandChanger() : brandChanger()
});

// only admin - brand switcher + input for carousel to set new group of products
// vendor changer
function brandChanger() {
	$("#celek .vendorSelector").css('display', 'block');

	var brandsList = {
		alzaPower: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/alzapower.svg",
			"name" : "AlzaPower",
			"width" : 240,
			"height" : 48
		},
		alzaErgo: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/alzaergo.svg",
			"name" : "AlzaErgo",
			"width" : 240,
			"height" : 62
		},
		alzaGuard: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/alzaguard.svg",
			"name" : "AlzaGuard",
			"width" : 240,
			"height" : 46
		},
		blackmont: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/blackmont.svg",
			"name" : "Blackmont",
			"width" : 240,
			"height" : 30
		},
		eternico: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/eternico.svg",
			"name" : "Eternico",
			"width" : 240,
			"height" : 39
		},
		ferrida: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/ferrida.svg",
			"name" : "Ferrida",
			"width" : 200,
			"height" : 33
		},
		laProromance: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/laproromance.svg",
			"name" : "La Proromance",
			"width" : 142,
			"height" : 150
		},
		alzaCafe: {
			"logo" : "https://cdn.alza.cz/Foto/LegendFoto/EN/Files/sablona/alza-privatky/img/logos/cafe.svg",
			"name" : "AlzaCafé",
			"width" : 200,
			"height" : 40
		}
	} 

	// create html tile for every brand
	if ($("#celek .vendorSelector__box").length < 1) {
		for (const [key, value] of Object.entries(brandsList)) {
			let target = $("#celek .vendorSelector__wrapper")
			let box = $("<div class='vendorSelector__box' data-vendor='" + [key] + "'></div>")
			let image = $("<img src='" + [value.logo] + "' class='vendorSelector__box--logo' data-width='" + [value.width] + "' data-height='" + [value.height] + "'>")
			let name = $("<p class='vendorSelector__box--name'>" + [value.name] + "</p>")
			target.append(box)
			box.append(image, name)
		}
	}

	// change vendor
	$("#celek .vendorSelector__box").on("click", function () {
		let vendorActive = $("#celek").attr('data-brand')
		let vendorName = $(this).attr('data-vendor')
		let vendorLogo = $(this).find("img").attr('src')
		let vendorWidth = $(this).find("img").attr('data-width')
		let vendorHeight = $(this).find("img").attr('data-height')

		// vendor
		$("." + vendorActive).removeClass(vendorActive).addClass(vendorName).attr('data-brand', vendorName)

		// logo
		$("#celek .ppHeader .ppHeader__logoWrapper--imageWrapper img").attr({
			"src": vendorLogo,
			"width": vendorWidth,
			"height": vendorHeight
		})
	});
}