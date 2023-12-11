// Принимаем массив объектов и сортируем его сначала по возрасту (в порядке возрастания),
// а затем по имени (в алфавитном порядке). Используется метод sort() массива с функцией сравнения.
//сложность  O(n * log(n))
const sortAge = (data) => {
  return data.sort((a, b) => (a.age !== b.age ? a.age - b.age : a.name.localeCompare(b.name)));
};
sortAge([
  { name: 'John', age: 25 },
  { name: 'Zak', age: 28 },
  { name: 'Eva', age: 28 },
  { name: 'Ira', age: 28 },
]);

// Функция стабильной сортировки
// Она создает массив объектов, каждый из которых содержит элемент массива и его индекс.
// Затем сортируем этот массив объектов сначала по значениям, полученным сравнением элементов,
// а затем по исходным индексам.
//сложность  O(n * log(n))
const stableSort = (array, compare) => {
  return array
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
};

// Функция использует стабильную сортировку
//сложность  O(n * log(n))
const sortAgeSecon = (data) => {
  return stableSort(data, (a, b) => a.age - b.age || a.name.localeCompare(b.name));
};

sortAgeSecon([
  { name: 'John', age: 25 },
  { name: 'Zak', age: 28 },
  { name: 'Eva', age: 28 },
  { name: 'Ira', age: 28 },
]); //?
