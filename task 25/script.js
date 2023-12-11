function createElement() {
  const newParagraph = document.createElement('p');

  newParagraph.innerText = 'Новый элемент';

  newParagraph.classList.add('text'); //1 вариант добавить стили
  newParagraph.style.textDecoration = 'underline'; //2 вариант добавить стили

  document.body.appendChild(newParagraph);
}
const button = document.querySelector('button');
button.addEventListener('click', createElement);
