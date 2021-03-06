// settings for admin
function carouselSelector() {
    let errorText, validText, button, statusMessage, text, carouselId, removeText
    text = 'Vložte ID skupiny produktů'
    errorText = 'Špatné ID. Musí obsahovat pouze číslice a mít alespoň 5 znaků!'
    validText = 'Skupina produktů úspěšně nastavena.'
    removeText = 'Kolotoč byl odstraněn!'
    statusMessage = $('#celek .ppAddCarousel .statusMsg')
    button = $('#celek .ppAddCarousel .btn')
    carouselId = $('#celek')

    // on click
    $(button).on("click", function () {
        // input target + all letters
        let input = $('#celek .ppAddCarousel .productsGroup')
        let letters = /[a-zA-Z]/g
        let inputLength = input.val().length

        inputLength >= 1 ? checkString() : carouselRemoved()

        // check if string contain letters
        function checkString() {
            letters.test(input.val()) ? inputFail() : inputValid() 
        }

        // remove carousel = empty input
        function carouselRemoved() {
            statusMessage.text(removeText).css({'color' : 'green'})
            input.val('')
            carouselId.attr('data-carousel', 'none')
        }

        // input is not valid
        function inputFail() {
            statusMessage.text(errorText).css({'color' : 'red'})
            input.val('')
            carouselId.attr('data-carousel', 'none')
        } 

        // input is valid
        function inputValid() {
            inputLength >= 5 ? (statusMessage.text(validText).css({'color' : 'green'}), carouselId.attr('data-carousel', input.val()), input.val('')) : inputFail()
        } 
    });
} 