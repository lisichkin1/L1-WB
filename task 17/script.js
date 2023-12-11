document.addEventListener('DOMContentLoaded', function () {
  let inputElement = document.querySelector('input');
  let select = document.querySelector('select');

  // Добавляем обработчик события input с дебаунсингом
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, arguments), delay);
    };
  };
  // Функция обработки ввода с дебаунсингом
  const handleInput = debounce(function () {
    let inputValue = inputElement.value;
    const apiKey = 'd3824217-a19a-4adb-97dd-1b385fc548d4';
    let apiUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${encodeURIComponent(
      inputValue,
    )}&format=json`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const result = data.response.GeoObjectCollection.featureMember.map(
          (address) => address.GeoObject.metaDataProperty.GeocoderMetaData.text,
        );

        // Проверка наличия данных перед отображением выпадающего списка
        if (result.length > 0) {
          selectPush(result);
          select.style.opacity = '1';
          let optionsCount = select.options.length;
          select.size = optionsCount + optionsCount / 2;
        } else {
          // Если данных нет, скрываем выпадающий список
          select.style.opacity = '0';
          select.size = 0;
        }
      });
  }, 300);

  // Добавляем обработчик события focus для показа выпадающего списка
  inputElement.addEventListener('focus', function () {
    handleInput();
  });

  // Добавляем обработчик события input для обработки изменения значения
  inputElement.addEventListener('input', handleInput);

  // Обработчик события click для копирования выбранного значения из выпадающего списка в поле ввода
  select.addEventListener('click', function () {
    inputElement.value = select.options[select.selectedIndex].textContent;
  });

  // Обработчик события change для скрытия выпадающего списка после выбора значения
  select.addEventListener('change', function () {
    select.style.opacity = '0';
    select.size = 0;
  });
  // Функция заполнения выпадающего списка данными
  const selectPush = (data) => {
    select.innerHTML = '';
    data.map((item) => {
      let optionItem = document.createElement('option');
      optionItem.innerText = item;
      optionItem.value = item;
      select.appendChild(optionItem);
    });
    select.value = '0';
  };
});
