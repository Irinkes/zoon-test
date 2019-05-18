(function(){

    function switchCompany(e) {

        if(e.target.classList.contains('switch-target')) {
            console.log('clicked');
            var switchParent = e.target.closest('.switch-btn');

            var currentPopover = switchParent.querySelector('.switch-popover');
            console.log('currentPopover: ', currentPopover);

            if(currentPopover.style.display === 'none') {
                currentPopover.style.display = 'block';

                if(currentPopover.style.display === 'block') {

                    document.addEventListener('click', function(event) {
                        var isClickInside = currentPopover.contains(event.target);
                        if (isClickInside) {
                            console.log('You clicked inside');
                        }
                        else {
                            console.log('You clicked outside');
                            if(currentPopover.style.display === 'block') {
                                console.log('switch to none');
                                currentPopover.style.display = 'none';
                            } else {
                                console.log('switch to block');
                            }

                        }
                    });
                }

            } else  {
                currentPopover.style.display = 'none';
            }
        }
    }
    var content = document.querySelector('.content');
    content.addEventListener('click', switchCompany);

    /*Завернуть тут в функцию */



}())