//сложность O(n)
const executeFunctionsSequentially = (functions, index = 0) => {
  // Проверяем, не достигли ли конца массива функций
  if (index < functions.length) {
    // Получаем текущую функцию из массива
    const currentFunction = functions[index];
    // Выполняем текущую функцию, передавая ей колбэк и порядковый номер
    currentFunction(() => {
      // Рекурсивно вызываем функцию executeFunctionsSequentially для следующей функции в массиве
      executeFunctionsSequentially(functions, index + 1);
    }, index + 1);
  }
};

const functionsArray = [
  (callback, order) => {
    console.log(`Функция  ${order} выполнена`);
    callback();
  },
  (callback, order) => {
    console.log(`Функция  ${order} выполнена`);
    callback();
  },
  (callback, order) => {
    console.log(`Функция  ${order} выполнена`);
    callback();
  },
];

executeFunctionsSequentially(functionsArray);
