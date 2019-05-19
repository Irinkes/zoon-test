(function(){

    function switchCompany(e) {

        /*Show popover on click */

        let switchParent = e.target.closest('.switch-btn');
        let currentPopover;
        if(switchParent) {
            currentPopover = switchParent.querySelector('.switch-popover');
        }


        if(e.target.classList.contains('switch-target')) {

            if(currentPopover.style.display === 'none') {
                currentPopover.style.display = 'block';
            }
        }

        /*Turn on/off company card */
        if(e.target.classList.contains('popover-content') && e.target.classList.contains('text-on')) {
            e.target.innerHTML = 'Выключить';
            e.target.classList.remove('text-on');
            e.target.classList.add('text-off');
            e.target.closest('.company-block').classList.add('active');
            currentPopover.style.display = 'none';
        } else if(e.target.classList.contains('popover-content') && e.target.classList.contains('text-off')) {
            e.target.innerHTML = 'Включить';
            e.target.classList.remove('text-off');
            e.target.classList.add('text-on');
            e.target.closest('.company-block').classList.remove('active');
            currentPopover.style.display = 'none';
        }
    }

    /*Outside click */
    function hidePopup(e) {
        let popover = [...document.querySelectorAll('.switch-popover')];

        if (e.target.closest('.switch-popover') || e.target.closest('.switch-target')) return;

        popover.map(item => {
            if(item.style.display==='block') {
                item.style.display = 'none';
            }
        })
    }
    let content = document.querySelector('.content');

    content.addEventListener('click', switchCompany);
    document.addEventListener('click', hidePopup);


}())