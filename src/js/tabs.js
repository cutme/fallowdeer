document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementById('tabs');

    const init = function() {
        const content = el.getElementsByClassName('js-content')[0],
              contentItem = content.getElementsByClassName('js-tab'),
              nav = el.getElementsByClassName('js-nav')[0],
              navItem = nav.getElementsByClassName('js-tab');

        const showTab = function(idx) {

            for (let i = 0; i < contentItem.length; i ++) {
            
                contentItem[i].classList.remove('is-active');
            
                if (i === idx) {
                    contentItem[i].classList.add('is-active');
                }
            }
            
            
            for (let j = 0; j < navItem.length; j ++) {
                navItem[j].classList.remove('is-active');
            }
        }

        for (let i = 0; i < navItem.length; i ++) {
            navItem[i].addEventListener('click', function() {
    
                showTab(cutme.Helpers.thisindex(this));                
                this.classList.add('is-active');
            });
        }
    }

    el ? init() : false;


}, false);
