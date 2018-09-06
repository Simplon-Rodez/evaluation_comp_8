(function() {
    var navBtn = document.getElementById( 'head-navbutton' ),
        nav = document.getElementById( navBtn.getAttribute('aria-controls') );
    
    navBtn.onclick = function() {
        if(navBtn.getAttribute( 'aria-selected' ) == 'true') {
            navBtn.setAttribute( 'aria-selected', 'false' );
            nav.setAttribute( 'aria-hidden', 'true' );
        } else {
            navBtn.setAttribute( 'aria-selected', 'true' );
            nav.setAttribute( 'aria-hidden', 'false' );
        }
    };
})();