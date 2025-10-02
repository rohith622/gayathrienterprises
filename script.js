
const SCROLL_THRESHOLD = 100;

document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.body;

    function handleScroll() {
        if (window.scrollY > SCROLL_THRESHOLD) {
            
            if (!body.classList.contains('scrolled')) {
                body.classList.add('scrolled');
            }
        } else {
           
            if (body.classList.contains('scrolled')) {
                body.classList.remove('scrolled');
            }
        }
    }

    
    window.addEventListener('scroll', handleScroll);

    
    handleScroll();
});