// Show hide JavaScript Answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change Icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.classList.contains('uil-plus')) {
            icon.classList.remove('uil-plus');
            icon.classList.add('uil-minus');
        } else {
            icon.classList.remove('uil-minus');
            icon.classList.add('uil-plus');
        }
    });
});
