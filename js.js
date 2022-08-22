/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');
console.log(button)
/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', () => {
    alert('Этот сайт выполнен моими золотыми руками на HTML, CSS и JS 😎' +
        '\n' +
        'P.s баги не гифка, я анимировала их сама 🪲❤️')
})