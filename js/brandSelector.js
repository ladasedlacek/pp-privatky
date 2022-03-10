function brandSelect() {
	console.log('Brand selector is working.')
	
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
	if ($("#celek .brandSelector__box").length < 1) {
		for (const [key, value] of Object.entries(brandsList)) {
			let target = $("#celek .brandSelector__wrapper")
			let box = $("<div class='brandSelector__box' data-vendor='" + [key] + "'></div>")
			let image = $("<img src='" + [value.logo] + "' class='brandSelector__box--logo' data-width='" + [value.width] + "' data-height='" + [value.height] + "'>")
			let name = $("<p class='brandSelector__box--name'>" + [value.name] + "</p>")
			target.append(box)
			box.append(image, name)
		}
	}

    // change vendor
	$("#celek .brandSelector__box").on("click", function () {
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