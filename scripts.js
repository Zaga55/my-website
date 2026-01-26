// Простая анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление элементов
    const elements = document.querySelectorAll('.logo, .title-section, .description-section, .contacts-section, .action-buttons, .footer-section');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Обновляем год в копирайте (если добавите)
    const yearElement = document.querySelector('.copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Клик по логотипу (просто для интереса)
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
});