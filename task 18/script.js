// Очистить все данные в localStorage
localStorage.clear();

for (let index = 0; index < 1710; index++) {
  try {
    // Читаем существующие данные (если они есть)
    var existingData = localStorage.getItem('myKey') || '';

    // Генерируем строку данных для записи (в примере, строка из 3072 символов 'a')
    var newData = new Array(1024 * 3).fill('a').join('');

    // Объединяем существующие данные с новыми
    var combinedData = existingData + newData;

    // Записываем обновленные данные в localStorage
    localStorage.setItem('myKey', combinedData);

    console.log('Данные успешно записаны в localStorage!');
  } catch (e) {
    var currentSize = JSON.stringify(localStorage).length;
    console.log('Текущий размер localStorage: ' + currentSize + ' байт');
    console.error('Ошибка при записи в localStorage:', e);
  }
}
//итог 1706 итераций, погрешность может быть в 3 кб
// итоговый размер 5240844 байт
