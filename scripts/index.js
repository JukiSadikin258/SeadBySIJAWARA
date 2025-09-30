// Tombol menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});


// Logika sectino FAQ
function initFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');
    let currentlyOpen = null;
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            if (currentlyOpen === button) {
                answer.style.maxHeight = '0px';
                icon.classList.remove('rotate-180');
                button.classList.remove('text-primary');
                currentlyOpen = null;
                return;
            }
            
            if (currentlyOpen) {
                const openAnswer = currentlyOpen.nextElementSibling;
                const openIcon = currentlyOpen.querySelector('svg');
                openAnswer.style.maxHeight = '0px';
                openIcon.classList.remove('rotate-180');
                currentlyOpen.classList.remove('text-primary');
            }
            
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.add('rotate-180');
            button.classList.add('text-primary');
            currentlyOpen = button;
        });
    });
    
    window.addEventListener('resize', () => {
        if (currentlyOpen) {
            const openAnswer = currentlyOpen.nextElementSibling;
            openAnswer.style.maxHeight = openAnswer.scrollHeight + 'px';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
});


// PopUp Newslatter
    const form = document.getElementById('newsletterForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopup');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // biar nggak reload halaman
        popup.classList.remove('hidden'); // tampilkan popup
    });

    closeBtn.addEventListener('click', function() {
        popup.classList.add('hidden'); // sembunyikan popup
    });
