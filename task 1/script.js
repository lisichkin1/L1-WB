//1 способ
//1.1 Приводим текст к нижнему регистру(так как тест может начинаться с большой буквы)
//1.2 Удаляем пробелы у строки
//1.3 Разделяем строку на массив символов
//1.4 Переворачиваем и объединяем массив
//1.5 Сравниваем с начальной срокой, у которой тоже удалены пробелы
const Palindrome = (str) => {
  return str.toLowerCase().replaceAll(' ', '').split('').reverse().join('') ==
    str.toLowerCase().replaceAll(' ', '')
    ? 'палиндром'
    : 'нет';
};
Palindrome('Аргентина манит негра'); //?

//2 способ
//Начало такое же, но здесь для проверки используется цикл. Мы перебираем буквы с конца и  в итоге сравниваем с начальной строкой
const PalindromeSecond = (str) => {
  let reversStr = '';
  let strRepalce = str.toLowerCase().replaceAll(' ', '');
  for (let index = strRepalce.length - 1; index >= 0; index--) {
    reversStr += strRepalce[index]; //?
  }
  return reversStr == strRepalce ? 'палиндром' : 'нет';
};
PalindromeSecond('аргентина манит негра'); //?

//3 способ
//Начало такое же, но здесь в использовании цикла используется оптимизация, которая позволяет не проходиться по полной строке, а только по половине
const PalindromeThird = (str) => {
  let strRepalce = str.toLowerCase().replaceAll(' ', '');
  let firstStr = '';
  let secondStr = '';
  for (let index = 0; index < Math.ceil(strRepalce.length / 2); index++) {
    firstStr += strRepalce[index];
    secondStr += strRepalce[strRepalce.length - index - 1];
  }
  return firstStr == secondStr;
};
PalindromeThird('аргентина манит негра');

//Общая сложность всех алгоритмов O(n).В 3 случае цикл имеет сложность O(n/2),
//но так как есть оперции удаления пробелов и приведение к нижнему регистру, то общая сложность тоже составляет O(n)
