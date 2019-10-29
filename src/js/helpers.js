//import customSelect from 'custom-select';
import { TweenLite, ScrollToPlugin } from "gsap/all";
const scrollPlugin = ScrollToPlugin;
//import ScrollToPlugin from 'gsap/ScrollToPlugin';
 
(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	isInView: isInView,
        	scrollTo: scrollTo,
        	setInputFilter: setInputFilter
        };
    };
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
    
    const scrollTo = function (target, speed, offset) {    
		TweenLite.to(window, speed, {
			scrollTo: {
				y: target - offset,
				autoKill: false
			},
			ease: Power1.easeInOut
		});
	};
    
    const thisindex = function(elm) {
        let nodes = elm.parentNode.childNodes, node, i = 0, count = 0;
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;            
        }
        return count;
    };
    
    // Restricts input for the given textbox to the given inputFilter.
    const setInputFilter = function(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            textbox.addEventListener(event, function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        });
    };

    cutme.Helpers = new Helpers();


    
    
    // Filter inputs
    
    (function() {
    
        const digits = document.getElementsByClassName('js-digits');

        const digitsOnly = function() {
            for (let i = 0; i < digits.length; i ++) {
                setInputFilter(digits[i], function(value) {
                    return /^\d*\.?\d*$/.test(value);
                });
            }
        };

        digits ? digitsOnly() : false;
    
    })();
    
    
    
    

}(window, document, window.cutme = window.cutme  || {}));