// Подключаем библиотеку Moment.js
const moment = require('moment');

// Экспортируем функцию для работы с датами
module.exports = {
  getCurrentDate: function () {
    // Используем Moment.js для получения текущей даты
    return moment().format('YYYY-MM-DD HH:mm:ss');
  },

  formatDate: function (date, format) {
    // Используем Moment.js для форматирования даты
    return moment(date).format(format);
  },

  addDays: function (date, days) {
    // Используем Moment.js для добавления дней к дате
    return moment(date).add(days, 'days').format('YYYY-MM-DD');
  },
};
