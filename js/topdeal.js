document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('list1');
    let items = document.querySelectorAll('.item-slider1');
    let dots = document.querySelectorAll('.dots1 li');
    let prev = document.getElementById('prev1');
    let next = document.getElementById('next1');

    if (!list || items.length === 0 || dots.length === 0 || !prev || !next) {
        console.error('Một hoặc nhiều phần tử không tồn tại trong DOM.');
        return;
    }

    let active = 0;
    let lengthItems = items.length - 1;

    next.onclick = function() {
        if (active + 1 > lengthItems) {
            active = 0;
        } else {
            active += 1;
        }
        reloadSlider();
    }

    prev.onclick = function() {
        if (active - 1 < 0) {
            active = lengthItems;
        } else {
            active -= 1;
        }
        reloadSlider();
    }

    // let refreshSlider = setInterval(() => { next.click() }, 5000);
    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.dots1 li.active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
        }

        if (dots[active]) {
            dots[active].classList.add('active');
        } else {
            console.error('Phần tử dot tại vị trí active không tồn tại.');
        }

        // clearInterval(refreshSlider);
        // refreshSlider = setInterval(() => { next.click() }, 5000);
    }
});
