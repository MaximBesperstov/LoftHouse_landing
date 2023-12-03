// Находим все ссылки внутри меню
var menuLinks = document.querySelectorAll('.nav__list a');

// Добавляем обработчик события клика для каждой ссылки
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Закрываем меню
        document.querySelector('.toggler').checked = false;
    });
});
