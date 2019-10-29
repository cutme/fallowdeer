const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-nav')[0],
          menu = document.getElementsByClassName('js-menu')[0],
          hamburger = document.getElementsByClassName('js-hamburger')[0]
          link = el.getElementsByTagName('a');


    const init = function() {

        let ww = 0;

        const checkWindowWidth = function() {
            ww = window.innerWidth;

            //if (ww > 1340) {

              //  el.classList.remove('is-visible');
           // }
        }
        
        const hideMenu = function() {
            //if (ww <= 1340) {
                enableBodyScroll(menu);
                el.classList.remove('is-visible');
                hamburger.classList.remove('is-active');
            //}
        };

        const showMenu = function(e) {
        
            if (e.currentTarget.classList.contains('is-active')) {
            
                hideMenu();            
            
            } else {
            
                disableBodyScroll(menu);
                el.classList.add('is-visible');
                hamburger.classList.add('is-active');
            }
        };
      
/*
		for (let i = 0; i < link.length; i++) {			
			link[i].addEventListener('click', hideMenu);
		}
*/
        

        window.addEventListener('resize', checkWindowWidth);

        checkWindowWidth();

        hamburger.addEventListener('click', showMenu);
  

        // Hide menu on ESC

        document.addEventListener('keydown', function(evt) {
            // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });

    };

    el ? init() : false;

}, false);