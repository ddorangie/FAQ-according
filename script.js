const buttons = document.querySelectorAll('.img-plus');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const block  = button.closest('.block-question');
    const answer = block.querySelector('.answer');

    answer.classList.toggle('show');
    button.classList.toggle('minus');
  });
});