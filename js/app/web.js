define(['jquery', 'TweenMax', 'webFrag', 'sso'], function ($, TweenMax, webFrag) {

    return {

        controller       : $.superscrollorama(),
        currentActiveLink: null,

        initWeb: function () {
            this.configureNavScroll();
            this.configureHeader();
            this.configureSectionEffects();
        },

        configureSectionEffects: function () {

            var controller = this.controller;

            controller.addTween($('#benefits'),
                TweenMax.from($('#benefits img'), 0.5,
                    {
                        left: '-400px'
                    }
                ), 0, -300
            );

            controller.addTween($('#why-algor'),
                TweenMax.to($('#why-algor img'), 0.5,
                    {
//                        opacity: 0.5,
                        scale: 1.4
                    }
                ), 0
            );

            controller.addTween($('#marketing-explanation'),
                TweenMax.from($('#marketing-explanation img'), 0.5,
                    {
                        opacity: 0.5,
                        scale  : 0
                    }
                ), 0
            );

            controller.addTween($('#how-works'),
                TweenMax.from($('#how-works img'), 0.5,
                    {
                        height: 0
                    }
                ), 0
            );

            var staggerTween = new TimelineMax();

            staggerTween.append(
                function () {
                    $('#spv li span').addClass('hidden');
                }
            );

            staggerTween.append(TweenMax.staggerTo($('#spv li span'), 0.1,
                {
                    scale      : 1.5,
                    marginRight: '20px',
                    onStart    : function () {
                        $(this.target).removeClass('hidden');
                    }
                }
                , 0.1));

            controller.addTween($('#spv'), staggerTween);

        },

        checkList: function (lis) {
            function animate() {
                function fadeTo(lis, duration, opacity, callback) {
                    if (!lis.length) {
                        callback();
                    }

                    var $lis = $(lis.shift());
                    $lis.delay(1000).fadeTo(duration, opacity, function () {
                        fadeTo(lis, duration, opacity, callback);
                    })
                }

                fadeTo($('#fds li').get(), 500, 1, function () {
                    setTimeout(function () {
                        fadeTo($('#fds li').get(), 500, 0, function () {
                            setTimeout(animate, 5000);
                        })
                    }, 5000);
                })
            }
        },

        configureNavScroll: function () {
            var scrollTopOffset = 250,
                self = this;


            $('header a img').click(function (event) {

                event.preventDefault();
                self.clearActiveNavLink();
                $('html, body').animate({ scrollTop: 0}, 500,
                    function () {
                    }
                );
            });

            $('.nav#my-nav-top li:nth-child(1) a').click(function (event) {

                event.preventDefault();
                self.updateActiveNavLink($(this).parent('li'));
                $('html, body').animate({ scrollTop: $('#marketing-explanation p').offset().top - scrollTopOffset}, 1000,
                    function () {
                    }
                );
            });

            $('.nav#my-nav-top li:nth-child(2) a').click(function (event) {

                event.preventDefault();
                self.updateActiveNavLink($(this).parent('li'));
                $('html, body').animate({ scrollTop: $('#benefits img').offset().top - scrollTopOffset + 120}, 1000,
                    function () {
                    }
                );
            });

            $('.nav#my-nav-top li:nth-child(3) a').click(function (event) {

                event.preventDefault();
                self.updateActiveNavLink($(this).parent('li'));
                $('html, body').animate({ scrollTop: $('#why-algor p').offset().top - scrollTopOffset}, 1000,
                    function () {
                    }
                );
            });

            $('.nav#my-nav-bottom li:nth-child(1) a').click(function (event) {

                event.preventDefault();
                self.updateActiveNavLink($(this).parent('li'));
                $('html, body').animate({ scrollTop: $('#how-works p').offset().top - scrollTopOffset + 90}, 1000,
                    function () {
                    }
                );
            });

            $('.nav#my-nav-bottom li:nth-child(2) a').click(function (event) {

                event.preventDefault();
                self.updateActiveNavLink($(this).parent('li'));
                $('html, body').animate({ scrollTop: $('#spv ul').offset().top - scrollTopOffset}, 1000,
                    function () {
                    }
                );
            });
        },

        updateActiveNavLink: function (li) {
            if (this.currentActiveLink) {
                this.currentActiveLink.removeClass('active');
            }
            this.currentActiveLink = li;
            li.addClass('active');
        },

        clearActiveNavLink: function () {
            if (this.currentActiveLink) {
                this.currentActiveLink.removeClass('active');
            }
        },

        configureHeader: function () {
            //this.configureHeaderAnim();
            this.configureHeaderHoverLinks()

        },

        configureHeaderHoverLinks: function () {
//            $( 'header li' ).hover(
//                function() {
//                    $( this ).append( $( "<span> ***</span>" ) );
//                }, function() {
//                    $( this ).find( "span:last" ).remove();
//                }
//            );

            $('header li').hover(function () {

                    if ($(this).hasClass('active')) return;
                    TweenMax.to($(this), 0.2, {
                            scale     : 1.02,
                            fontWeight: 'bold'
                        }
                    )

                },
                function () {
                    TweenMax.to($(this), 0.2, {
                            scale     : 1,
                            fontWeight: 'normal'
                        }
                    )

                });
        },

        configureHeaderAnim: function () {
            $(window).scroll(function () {
                return;

                var delay = 0.5,
                    imgScaleMax = 1,
                    imgScaleMini = 0.6;

                if ($(".navbar").offset().top > 50) {

                    TweenMax.to($('.navbar img'), delay - 0.2,
                        {
                            css: {
                                width    : '150px',
                                marginTop: '0px'
                            }
                        }
                    );

                    TweenMax.to($('.navbar li'), delay,
                        {
                            css: {
                                fontSize: '14px'
                            }
                        }
                    );

                    TweenMax.to($('.navbar li a'), delay,
                        {
                            css: {
                                paddingTop   : '5px',
                                paddingBottom: '5px'
                            }
                        }
                    );

                } else {

                    TweenMax.to($('.navbar img'), delay - 0.2,
                        {
                            css: {
                                width    : '200px',
                                marginTop: '10px'
                            }
                        }
                    );

                    TweenMax.to($('.navbar li'), delay,
                        {
                            css: {
                                fontSize: '16px'
                            }
                        }
                    );

                    TweenMax.to($('.navbar li a'), delay,
                        {
                            css: {
                                paddingTop   : '15px',
                                paddingBottom: '15px'
                            }
                        }
                    );
                }
            });

        }
    }

});

 