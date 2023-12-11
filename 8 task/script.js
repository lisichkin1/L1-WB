const executeFunctionsAndReturnResults = (functions) => {
  return () => {
    // Создаем пустой массив для хранения результатов выполнения функций
    const results = [];
    // Проходимся по каждой функции в массиве и вызываем ее, сохраняя результаты
    for (const func of functions) {
      results.push(func());
    }
    // Возвращаем массив результатов выполнения всех функций
    return results;
  };
};

const funcArr = [() => 1 + 1, () => 'Hello, ' + 'world!', () => Math.random()];
// Создаем функцию, которая выполнит все функции из массива functionsArray
const executeAllFunctions = executeFunctionsAndReturnResults(funcArr);

const results = executeAllFunctions();
console.log(results);
//сложность O(n), она зависит от количества функций в массиве.
