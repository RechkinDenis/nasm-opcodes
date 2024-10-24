document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM полностью загружен");

    document.querySelectorAll('.opcode-button').forEach(button => {
        button.addEventListener('click', function () {
            const opcode = this.getAttribute('data-opcode'); // Получаем значение опкода с data-атрибута
            console.log(`Нажата кнопка с опкодом: ${opcode}`);
            
            const targetElement = document.getElementById(opcode); // Используем ID для поиска
            console.log(`Ищем элемент с id: ${opcode}`, targetElement);

            if (targetElement) {
                // Скроллим к элементу плавно
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Скроллим к элементу, но с отступом
                console.log(`Элемент найден и скроллим к нему: ${opcode}`);

                // Подсветим элемент на время
                targetElement.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    targetElement.style.backgroundColor = ''; // Убираем подсветку через 1 секунду
                }, 1000);
            } else {
                console.error(`Элемент с id ${opcode} не найден`);
            }
        });
    });
});
