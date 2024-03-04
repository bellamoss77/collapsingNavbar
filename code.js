const expandCollapseBtn = document.querySelector('.expand-collapse-btn');
const header = document.querySelector('#expanded-navbar');
let isExpanded = false;

function toggleHeader() {
    if (!isExpanded) {
        gsap.to(header, { x: '-100%', duration: 0.5, display: 'flex', ease: 'elastic' });
        gsap.to('#LOWER_L, #UPPER_R', {rotation: 180, transformOrigin: '50% 50%', duration: 0.5 });
    } else {
        gsap.to(header, { x: '0%', duration: 0.5, ease: 'elastic' });
        gsap.to('#LOWER_L, #UPPER_R', { rotation: 0, transformOrigin: '50% 50%', duration: 0.5 });
    }
    isExpanded = !isExpanded;
}

expandCollapseBtn.addEventListener('click', toggleHeader);