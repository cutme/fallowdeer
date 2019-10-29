import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const opinions = document.getElementById('opinionsCarousel'),
          instagram = document.getElementById('instagramCarousel');
    
    const opinionsCarousel = function() {
    
        const glide = new Glide(opinions, {
            type: 'carousel',
            animationDuration: 600,
            autoplay: false,
            hoverpause: true,
            gap: 0
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };

    const instagramCarousel = function() {
    
        const glide = new Glide(instagram, {
	        type: 'carousel',
	        animationDuration: 600,
            autoplay: 5000,
            startAt: 1,
            perView: 5,
            gap: 20,
            peek: {
				after: 50,
				before: 0
			},
			breakpoints: {
				1024: {
					perView: 4
				},
				768: {
					perView: 3
				},
				500: {
					perView: 2
				}
			}
        })

        setTimeout(function() {
            glide.mount();
        }, 1000)
    };
    
            
	instagram ? instagramCarousel() : false;
    opinions ? opinionsCarousel() : false;
    

}, false)