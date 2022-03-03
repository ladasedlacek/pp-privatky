// settings for admin
function carouselAdmin() {
    let errorText, validText, button, input, par, text, carouselId
    text = 'Vložte ID skupiny produktů'
    errorText = 'Špatné ID. Musí obsahovat pouze číslice a mít alespoň 5 znaků!'
    validText = 'Skupina produktů úspěšně nastavena.'
    par = $('#celek .ppAddCarousel .statusMsg')
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
            par.text(errorText).css({'color' : 'red'})
            input.val('')
            carouselId.attr('data-carousel', 'none')
        } 

        // input is valid
        function inputValid() {
            let inputLength = input.val().length
            inputLength >= 5 ? (par.text(validText).css({'color' : 'green'}), carouselId.attr('data-carousel', input.val()), input.val('')) : inputFail()
        } 
    });
}