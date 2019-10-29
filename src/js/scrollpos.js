document.addEventListener('DOMContentLoaded', function() {
    (function() {
        let scroll_pos = window.pageYOffset || window.scrollY,
            out = false;
        
        const el = document.getElementsByClassName('js-top')[0];
        
        let down;
        let lastScrollTop = 0;
        let narrow = false;
    
        window.addEventListener("scroll", function() {
           let st = window.pageYOffset || document.documentElement.scrollTop;
           
           if (st > lastScrollTop){
               down = true;
           } else {
               down = false;
           }
    
           lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    
        }, false);
        
        const action = function() {
            
            scroll_pos = window.pageYOffset || window.scrollY;
            
            
            if (down === true) {
                
                if (scroll_pos >= 0) {
                    if (out === false) {
                        el.classList.add('is-out');
                        out = true;
                    }
                } 

              

            } else {

                if (out === true) {
                    el.classList.remove('is-out');
                    out = false;
                }

            }
            
           /*
 
            if (scroll_pos >= 150) {
                
            } else if (scroll_pos < 150) {
                if (status === true) {
                    el.classList.remove('is-narrow');
                    el.classList.remove('is-out');
                    console.log('a');
                }
                
            } else {
                if (status === true) {
                    el.classList.remove('is-out');
                    status = false;
                }
            }
            
*/
            
            
            /*
if (scroll_pos >= 150) {
                if (down === true) {
                    if (status === false) {
                        
                        el.classList.add('is-narrow');
                        el.classList.add('is-out');
                        status = true;
                    }
                } else {
                    if (status === true) {
                        el.classList.remove('is-out');
                        status = false;
                    }
                }
            } else if (scroll_pos < 150) {
                //if (status === true) {
                    el.classList.remove('is-narrow');
               // }
                
            } else {
                if (status === true) {
                    el.classList.remove('is-out');
                    status = false;
                }
            }
*/
        }
        
        el ? window.addEventListener('scroll', action) : false;
        
        
    })();
}, false);