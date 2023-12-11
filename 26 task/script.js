function DOM(element, action) {
  // Выполнить действие с текущим узлом
  action(element);

  // Рекурсивно обойти дочерние узлы
  for (let i = 0; i < element.children.length; i++) {
    DOM(element.children[i], action);
  }
}

const rootElement = document.querySelector('body');
DOM(rootElement, function (node) {
  console.log(node.tagName);
});
