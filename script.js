const buttons = document.querySelectorAll('.icon-button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {      // событие по клику
        btn.classList.toggle('opened');        // меняем кнопку с плюса на минус

        const block = btn.closest('.block-question');
        const answer = block.querySelector('.answer');

        answer.classList.toggle('show');       // по клику показываем ответ
    });
})
   

