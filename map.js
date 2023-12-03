function loadYandexMap() {
    // Параметры для карты
    var mapOptions = {
        center: [52.69782415, 41.45699444427083], // Координаты центра карты
        zoom: 15, // Уровень масштабирования карты (по умолчанию 15)
        controls: ['zoomControl', 'fullscreenControl'], // Управление картой
    };

    // Создаем карту
    var yandexMap = new ymaps.Map('yandexMapContainer', mapOptions);

    // Путь к вашей иконке
    var iconPath = 'img/map/location-pin.svg';

    // HTML-контент для балуна
    var balloonContent = '<span style="color: var(--gold-color);">Наб. реки Фонтанки 10-15 <br>+8 (906) 123-45-67</span>'; //задали цвет из переменной в css

    // Создаем метку (пример)
    var placemark = new ymaps.Placemark(mapOptions.center, {
        balloonContent: balloonContent,
        iconCaption: 'Элитные квартиры',     
    }, {
        iconLayout: 'default#image',
        iconImageHref: iconPath,
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42],
        
    });

    // Добавляем метку на карту
    yandexMap.geoObjects.add(placemark);

    // Открываем балун при загрузке карты
    placemark.balloon.open();
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU';
    script.async = true;
    script.charset = 'utf-8';

    script.onload = function () {
        ymaps.ready(loadYandexMap);
    };

    document.body.appendChild(script);
}

window.onload = loadScript;
