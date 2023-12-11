obj = {
  num: 0,
  string: 'string',
  emptyString: '',
  null: null,
  undefined: undefined,
};

function customStringify(obj) {
  // Используется метод Object.entries() для получения массива пар [ключ, значение] из объекта.
  // Затем используется метод reduce() для сбора строкового представления объекта.
  str =
    Object.entries(obj)
      .reduce((acc, item) => {
        acc += `"${item[0]}" : "${item[1]}", `;
        return acc;
      }, '`{')
      .slice(1, -2) + '}';
  return str;
}
console.log(customStringify(obj));
//сложность O(n)
