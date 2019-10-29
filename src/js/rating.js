import raterJs from 'rater-js';

document.addEventListener('DOMContentLoaded',function() {

    const rating = document.getElementsByClassName('js-rater');
    
    const init = function() {
        const ratings = [];
        
        for (let i = 0; i < rating.length; i ++) {
            ratings[i] = raterJs( {
                element: rating[i],
                starSize: 32,
                rateCallback: function rateCallback(rating, done) {
                    this.setRating(rating); 
                    done(); 
                }
            });
        }
    };
    

    rating.length > 0 ? init() : false;

}, false)