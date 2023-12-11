function customJsonParse(jsonString) {
  let index = 0;
  // Функция для разбора значения JSON
  function parseValue() {
    const char = jsonString[index];
    // В зависимости от типа значения вызываем соответствующую функцию
    if (char === '"') {
      return parseString();
    } else if (char === '{') {
      return parseObject();
    } else if (char === '[') {
      return parseArray();
    } else if (char === 't') {
      return parseTrue();
    } else if (char === 'f') {
      return parseFalse();
    } else if (char === 'n') {
      return parseNull();
    } else {
      return parseNumber();
    }
  }
  // Функция для разбора строки JSON
  function parseString() {
    let result = '';
    index++; // Пропускаем открывающую кавычку
    while (jsonString[index] !== '"') {
      result += jsonString[index];
      index++;
    }
    index++; // Пропускаем закрывающую кавычку
    return result;
  }
  // Функция для разбора объекта JSON
  function parseObject() {
    const result = {};
    index++; // Пропускаем открывающую фигурную скобку
    while (jsonString[index] !== '}') {
      const key = parseString();
      index++; // Пропускаем двоеточие
      const value = parseValue();
      result[key] = value;
      if (jsonString[index] === ',') {
        index++; // Пропускаем запятую
      }
    }
    index++; // Пропускаем закрывающую фигурную скобку
    return result;
  }
  // Функция для разбора массива JSON
  function parseArray() {
    const result = [];
    index++; // Пропускаем открывающую квадратную скобку
    while (jsonString[index] !== ']') {
      const value = parseValue();
      result.push(value);
      if (jsonString[index] === ',') {
        index++; // Пропускаем запятую
      }
    }
    index++; // Пропускаем закрывающую квадратную скобку
    return result;
  }
  // Функции для разбора  true, false и null
  function parseTrue() {
    index += 4; // Пропускаем "true"
    return true;
  }

  function parseFalse() {
    index += 5; // Пропускаем "false"
    return false;
  }

  function parseNull() {
    index += 4; // Пропускаем "null"
    return null;
  }
  // Функция для разбора числовых значений
  function parseNumber() {
    let result = '';
    while (
      jsonString[index] &&
      (/[0-9eE.+\-]/.test(jsonString[index]) || (result.includes('e') && jsonString[index] === '-'))
    ) {
      result += jsonString[index];
      index++;
    }
    return parseFloat(result);
  }

  return parseValue();
}

// Пример использования
const str =
  '{"fName":"Alex","city":"Saratov","lessons":[{"mathematics":"5"},{"geometry":4}],"sportsman":true,"typesOfSports":{"football":5}}';
const jsonObject = customJsonParse(str); //?
console.log(jsonObject);
