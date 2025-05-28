const buttons = document.querySelectorAll('.icon-button');
const questions = document.querySelectorAll('.question')

function showAnswer (element) {
    const block = element.closest('.block-question');
    const answer = block.querySelector('.answer');
    const icon = block.querySelector('.icon-button');

    answer.classList.toggle('show');
    icon.classList.toggle('opened');
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => showAnswer(btn));
    
});

questions.forEach(ques => {
    ques.addEventListener('click', () => showAnswer(ques));
    
});

