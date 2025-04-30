const buttons = document.querySelectorAll('.icon-button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('opened');

        const block = btn.closest('.block-question');
        const answer = block.querySelector('.answer');

        answer.classList.toggle('show');
    });
})
   

