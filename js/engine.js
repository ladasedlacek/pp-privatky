$(document).ready(function () {
	// if admin is active
	-1 < window.location.href.indexOf("admin") ? addCarousel() : addCarousel()
});

function addCarousel() {
    let errorText, okText, button, input, text
    errorText = 'Špatný kód. Musí obsahovat pouze číslice a mít aspoň 5 znaků!'
    okText = 'Skupina produktů úspěšně nastavena.'
    text = $('#celek .ppAddCarousel .par--small')
    button = $('#celek .ppAddCarousel .btn')
    input = $('#celek .ppAddCarousel .productsGroup').val()

    // on click
    $(button).on("click", function () {
        if (input.length >= 5) {
            text.text(okText)
        } else {
            text.text(errorText)
        }
	});
}