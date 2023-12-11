function outerFunction() {
  // Переменная, к которой нужно создать замыкание
  let outerVariable = 'Эта переменная из внешней функции';

  // Внутренняя функция, которая будет возвращена
  function innerFunction() {
    console.log(outerVariable);
  }

  // Возвращаем внутреннюю функцию (замыкание)
  return innerFunction;
}

// Создаем замыкание
const closure = outerFunction();

// Вызываем внутреннюю функцию из замыкания
closure();
