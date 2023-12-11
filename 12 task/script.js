import * as objectScript from './objectScript';

const methods = ['getTitle', 'setTitle', 'getAuthor', 'setAuthor', 'getYear', 'setYear'];

const book = {
  title: 'Мартин иден',
  author: 'Джек Лондон',
  year: 1909,
};

// Присваиваем методы объекту с использованием цикла
for (const method of methods) {
  book[method] = objectScript[method].bind(book);
}

console.log('Название книги:', book.getTitle());
console.log('Автор книги:', book.getAuthor());
console.log('Год издания:', book.getYear());

// Изменяем значения свойств с помощью методов
book.setTitle('Грокаем алгоритмы');
book.setAuthor('Адитья Бхаргава');
book.setYear(2022);

// Выводим обновленные значения свойств
console.log('Название книги:', book.getTitle());
console.log('Автор книги:', book.getAuthor());
console.log('Год издания:', book.getYear());
