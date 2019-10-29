//import ScrollToPlugin from 'gsap/ScrollToPlugin';

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-gonext')[0];

	const speed_calculate = function (target) {
    	let base_speed  = 60,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/100;

    	return speed;
	};
	
	const init = function() {
		
		
		const action = function(e) {
			const window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
	
		    let obj = el.parentNode.parentNode.nextElementSibling;    	    
	
		    if (obj) {
		        let transition = 0;
	            let offset = 0;
	
				if (!obj.classList.contains('anim--visible')) {
					transition = 50;
				}
				
		        let target = window_pos + obj.getBoundingClientRect().top - offset - transition;
		        cutme.Helpers.scrollTo(target, speed_calculate(target), offset);
		    }
		    
		    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
		};
		
		el.addEventListener('click', action);
		
		
		
		
	    
/*
        if (window.e) {
            window.e.returnValue = false;
        }
*/
        
	   // e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};
	
	
	el ? init() : false;

    
}, false);
