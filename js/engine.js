$(document).ready(function () {
	// if admin is active
	-1 < window.location.href.indexOf("admin") ? carouselAdmin() : carouselAdmin()
});

function carouselAdmin() {
    let errorText, validText, button, input, paragraph, text, carouselId
    text = 'Vložte ID skupiny produktů'
    errorText = 'Špatné ID. Musí obsahovat pouze číslice a mít alespoň 5 znaků!'
    validText = 'Skupina produktů úspěšně nastavena.'
    paragraph = $('#celek .ppAddCarousel .par--small')
    button = $('#celek .ppAddCarousel .btn')
    carouselId = $('#celek')

    // on click
    $(button).on("click", function () {
        // input target + all letters
        input = $('#celek .ppAddCarousel .productsGroup')
        let letters = /[a-zA-Z]/g

        // check if string contain letters
        letters.test(input.val()) ? inputFail() : inputValid() 

        // input is not valid
        function inputFail() {
            paragraph.text(errorText).css({'color' : 'red'})
            input.val('')
            carouselId.attr('data-carousel', 'none')
        } 

        // input is valid
        function inputValid() {
            let inputLength = input.val().length
            inputLength >= 5 ? (paragraph.text(validText).css({'color' : 'green'}), carouselId.attr('data-carousel', input.val()), input.val('')) : inputFail()
        } 
	});
}