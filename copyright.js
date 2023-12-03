document.addEventListener("DOMContentLoaded", function () {
    // Создаем элемент div
    var copyrightDiv = document.createElement("div");
    copyrightDiv.className = "copyright";
    copyrightDiv.id = "copyright";

    // Создаем элементы p
    var firstParagraph = document.createElement("p");
    firstParagraph.textContent = "Дизайн сайта от Codemax Studios © 2023";

    var secondParagraph = document.createElement("p");
    var link1 = document.createElement("a");
    link1.href = "#";
    link1.textContent = "CodemaxStd";

    var link2 = document.createElement("a");
    link2.href = "#";
    link2.textContent = "VK";

    var link3 = document.createElement("a");
    link3.href = "#";
    link3.textContent = "TG";

    // Собираем второй параграф с ссылками
    secondParagraph.appendChild(document.createTextNode("Связаться: "));
    secondParagraph.appendChild(link1);
    secondParagraph.appendChild(document.createTextNode(" "));
    secondParagraph.appendChild(link2);
    secondParagraph.appendChild(document.createTextNode(" "));
    secondParagraph.appendChild(link3);

    // Получаем цвет текста на странице
    var bodyTextColor = window.getComputedStyle(document.body).color;

    // Получаем цвет текста заголовков h1-h3
    var headerTextColor;
    var headers = document.querySelectorAll('h1, h2, h3, h4');

    if (headers.length > 0) {
        // Если есть заголовки, берем цвет первого
        headerTextColor = window.getComputedStyle(headers[0]).color;
    } else {
        // Или используем цвет по умолчанию
        headerTextColor = "#000000"; // Черный цвет
    }

    // Получаем цвет фона страницы
    var bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

    // Добавляем стили с использованием цвета фона и текста страницы
    var styleElement = document.createElement("style");
    styleElement.textContent = `
        #copyright {
            background-color: ${bodyBackgroundColor};
            padding: 10px;
            text-align: center;
            color: ${bodyTextColor};
        }

        #copyright a {
            color: ${headerTextColor};
        }

        #copyright a:hover {
            color: ${bodyTextColor};
        }

    `;

    // Добавляем созданные элементы в DOM
    document.body.appendChild(copyrightDiv);
    copyrightDiv.appendChild(firstParagraph);
    copyrightDiv.appendChild(secondParagraph);
    document.head.appendChild(styleElement); // Добавлено в head, чтобы стили были применены корректно
});
