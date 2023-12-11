export function caseChange(number, words) {
  // Преобразуем число в строку
  let srtNum = number.toString();
  // Получаем последние две цифры числа
  let lastTwoDigits = Number(srtNum.slice(-2));
  // Получаем последнюю цифру числа
  let lastOneDigits = Number(srtNum.slice(-1));

  // Проверяем условия для выбора правильного склонения
  if (11 <= lastTwoDigits && lastTwoDigits <= 19) {
    return number + ' ' + words[2];
  } else if (lastOneDigits == 1) {
    return number + ' ' + words[0];
  } else if (lastOneDigits == 2 || lastOneDigits == 3 || lastOneDigits == 4) {
    return number + ' ' + words[1];
  } else if ((5 <= lastOneDigits && lastOneDigits <= 9) || lastOneDigits == 0) {
    return number + ' ' + words[2];
  }
}

export function caseChangeSecond(number, words) {
  // Получаем последние две цифры числа
  const lastTwoDigits = number % 100;
  // Получаем последнюю цифру числа
  const lastDigit = number % 10;

  // Проверяем условия для выбора правильного склонения
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return number + ' ' + words[2];
  }
  if (lastDigit === 1) {
    return number + ' ' + words[0];
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return number + ' ' + words[1];
  }
  return number + ' ' + words[2];
}
//Оба алгоритма имеют константную временную сложность O(1), так как количество операций не зависит от размера входных данных
