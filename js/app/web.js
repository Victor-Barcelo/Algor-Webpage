define(['jquery', 'TweenMax', 'webFrag', 'sso'], function ($, TweenMax, webFrag) {

    return {

        controller: $.superscrollorama(),

        initWeb: function () {

            var scrollTopOffset = 300;

            $('header a img').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: 0}, 500,
                    function () {
                    }
                );
            });

            $('.nav li:nth-child(1) a').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: $('#marketing-explanation').offset().top - scrollTopOffset}, 1000,
                    function () {
                    }
                );
            });

            $('.nav li:nth-child(2) a').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: $('#benefits').offset().top - 100}, 1000,
                    function () {
                    }
                );
            });

            $('.nav li:nth-child(3) a').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: $('#why-algor').offset().top - scrollTopOffset}, 1000,
                    function () {
                    }
                );
            });

            $('.nav li:nth-child(4) a').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: $('#how-works').offset().top - 150}, 1000,
                    function () {
                    }
                );
            });

            $('.nav li:nth-child(5) a').click(function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: $('#spv').offset().top - 150}, 1000,
                    function () {
                    }
                );
            });


        }
    }

});

 