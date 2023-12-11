function createAndAppendElement(templateId, parentSelector) {
  // Найти шаблон по его ID
  const template = document.getElementById(templateId);

  // Клонировать содержимое шаблона
  const clone = document.importNode(template.content, true);

  // Найти родительский элемент, к которому мы добавим новый элемент
  const parentElement = document.querySelector(parentSelector);

  // Добавить клонированный элемент в DOM
  parentElement.appendChild(clone);
}

createAndAppendElement('myTemplate', 'body');
