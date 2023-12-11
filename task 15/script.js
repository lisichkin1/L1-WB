async function asyncFunction() {
  try {
    // Ожидаем выполнение асинхронной операции
    const result1 = await someAsyncOperation1();

    // Ожидаем выполнение второй асинхронной операции
    const result2 = await someAsyncOperation2(result1);

    // Возвращаем результат выполнения
    return result2;
  } catch (error) {
    // Обработка ошибок
    console.error('Произошла ошибка:', error);
    throw error;
  }
}

// Пример асинхронной операции, возвращающей Promise
function someAsyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Результат операции 1');
    }, 1000);
  });
}

// Пример второй асинхронной операции
function someAsyncOperation2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Результат операции 2 с вводом: ${previousResult}`);
    }, 500);
  });
}

// Вызываем асинхронную функцию
asyncFunction()
  .then((result) => {
    console.log('Конечный результат:', result);
  })
  .catch((error) => {
    console.error('Ошибка в асинхронной функции:', error);
  });
