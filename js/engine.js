$(document).ready(function () {
	// if admin is active
	-1 < window.location.href.indexOf("admin") ? carouselAdmin() : carouselAdmin()

    // settings for admin
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

    // if admin is active & data-carousel is not contain none
    let carouselDataId = $('#celek').attr('data-carousel')
    -1 < window.location.href.indexOf("admin") && carouselDataId.includes('none') == false ? 0 : addCarousel()

    // add carousel html to the page
    function addCarousel() {
        let chnageCarouselId = $('#celek').attr('data-carousel')
        let carouselWrapper = $('#celek .lp-container__carousel')
        let carouselHtml = `<div class="lp-products swiper-container" data-products="sp` + chnageCarouselId + `-20" data-settings="shuffle show-disabled console">
        <div class="swiper-wrapper">
            <div class="swiper-slide" data-prod="" data-prod-url="">
                <img class="swiper-product-img" data-prod-img="" src="/img/blank.gif" alt="" />
                <p class="swiper-product-name" data-prod-name="short-35">&nbsp;</p>
                <p class="swiper-product-cprice" data-prod-cprice="">&nbsp;</p>
                <p class="swiper-product-price" data-prod-price="">&nbsp;</p>
            </div>
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="26.791" height="26.791" viewbox="0 0 26.791 26.791" class="swiper-button-img">
            <path id="l-arrow" d="M2.944,4.423a1.682,1.682,0,0,0-1.62,1.62A1.482,1.482,0,0,0,2.861,7.581l14.207-.372L16.7,21.416a1.483,1.483,0,0,0,1.537,1.537,1.682,1.682,0,0,0,1.62-1.62l.413-15.786A1.482,1.482,0,0,0,18.73,4.01Z" transform="translate(11.496 30.563) rotate(-135)" fill="#0094e7"></path>
        </svg>
    </div>
    <div class="swiper-button-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="28.93" height="28.93" viewbox="0 0 28.93 28.93" class="swiper-button-img">
            <path id="l-arrow" d="M1.693.014A1.658,1.658,0,0,0,.014,1.693,1.728,1.728,0,0,0,1.722,3.4l15.234.13.13,15.234a1.728,1.728,0,0,0,1.707,1.707,1.658,1.658,0,0,0,1.678-1.678L20.327,1.866A1.728,1.728,0,0,0,18.619.159Z" transform="translate(14.465 -0.02) rotate(45)" fill="#0094e7"></path>
        </svg>
    </div>`

        // add carousel html into carousel wrapper
        carouselWrapper.append(carouselHtml)

        // run carousel
        runCarousel()
    } 
});

