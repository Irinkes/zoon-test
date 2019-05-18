(function(){

    function switchCompany(e) {

        if(e.target.classList.contains('switch-target')) {
            console.log('clicked');
            var switchParent = e.target.closest('.switch-btn');

            var currentPopover = switchParent.querySelector('.switch-popover');
            console.log('currentPopover: ', currentPopover);

            if(currentPopover.style.display === 'none') {
                currentPopover.style.display = 'block';

            } else  {
                currentPopover.style.display = 'none';
            }
        }
    }

    function hidePopup(e) {

    }
    var content = document.querySelector('.content');
    content.addEventListener('click', switchCompany);
    document.activeElement('click', hidePopup);

    /*Завернуть тут в функцию */



}())