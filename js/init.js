requirejs.config({
    baseUrl: 'js',
    paths  : {
        'web'     : 'app/web',
        'webFrag' : 'app/webFrag',
        'jquery'  : 'lib/jquery-1.11.0',
        'TweenMax': 'lib/TweenMax.min',
        'sso'     : 'lib/jquery.superscrollorama',
        'bs'      : 'lib/bootstrap'
    },
    shim   : {

        'TweenMax': {
            deps   : ['jquery'],
            exports: 'TweenMax'
        },

        'sso': {
            deps   : ['jquery', 'TweenMax'],
            exports: 'sso'

        },

        'jquery': {
            exports: '$'
        },

        'bs': {
            deps: ["jquery"]
        }
    }

});

requirejs(['app/main','bs']);