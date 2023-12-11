// Подключаем созданный модуль
const dateModule = require('./script.js');

// Используем функции модуля
console.log('Текущая дата:', dateModule.getCurrentDate());

const formattedDate = dateModule.formatDate('2023-01-01', 'MMMM Do YYYY');
console.log('Отформатированная дата:', formattedDate);

const newDate = dateModule.addDays('2023-01-01', 5);
console.log('Новая дата (после добавления 5 дней):', newDate);
