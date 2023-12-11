localStorage.clear();
let wall = document.querySelector('.widget');
let wallData = {
  response: {
    items: [],
  },
};
let offset = 0;
let isFetching = false;
let scrollPosition = 0;
function fetchDataAndProcess() {
  // Создаем элемент SCRIPT и добавляем его в HEAD
  isFetching = true;
  var script = document.createElement('SCRIPT');
  script.src = `https://api.vk.com/method/wall.get?owner_id=-29534144&offset=${offset}&count=100&access_token=a64a1c3aa64a1c3aa64a1c3a3aa558f94baa64aa64a1c3ac24a848bdae484e071684a71&v=5.199&callback=processData`;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function processData(data) {
  if (data.response && data.response.items) {
    wallData = data;
    isFetching = false;
    updateLocalStorage(wallData); // Сохраняем данные в localStorage
    onDataProcessed();
    logStorageUsage(); // Логирование использования памяти в консоль
  } else {
    console.error('Некорректные данные от API:', data);
    isFetching = false; // Обрабатываем ошибку и устанавливаем isFetching в false
  }
}

function createArticle(data) {
  data.forEach((item) => {
    let sizes = [];

    const date = new Date(item.date * 1000);
    if (item.attachments && item.attachments.length > 0) {
      // Проверяем наличие вложения
      const attachment = item.attachments[0];

      if (attachment.type === 'photo') {
        sizes = attachment.photo.sizes;
      } else if (attachment.type === 'link') {
        sizes = attachment.link.photo.sizes;
      } else if (attachment.type === 'video') {
        sizes = attachment.video.image;
      } else if (attachment.type === 'doc') {
        sizes = attachment.doc.preview.photo.sizes;
      }
    }
    let sizesLength = sizes.length;

    let svgElementLike = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElementLike.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElementLike.setAttribute('fill', 'none');
    svgElementLike.setAttribute('viewBox', '0 0 24 24');
    svgElementLike.setAttribute('stroke-width', '1.5');
    svgElementLike.setAttribute('stroke', 'currentColor');
    svgElementLike.classList.add('w-6', 'h-6');

    let pathElementLike = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElementLike.setAttribute('stroke-linecap', 'round');
    pathElementLike.setAttribute('stroke-linejoin', 'round');
    pathElementLike.setAttribute(
      'd',
      'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    );

    let svgElementComment = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElementComment.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElementComment.setAttribute('fill', 'none');
    svgElementComment.setAttribute('viewBox', '0 0 24 24');
    svgElementComment.setAttribute('stroke-width', '1.5');
    svgElementComment.setAttribute('stroke', 'currentColor');
    svgElementComment.classList.add('w-6', 'h-6');

    let pathElementComment = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElementComment.setAttribute('stroke-linecap', 'round');
    pathElementComment.setAttribute('stroke-linejoin', 'round');
    pathElementComment.setAttribute(
      'd',
      'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z',
    );

    let articleContainer = document.createElement('article');
    articleContainer.className = 'widget__item';

    let itemTextElement = document.createElement('p');
    itemTextElement.className = 'widget__item__text';

    let itemImgElement = document.createElement('img');
    itemImgElement.className = 'widget__item__img';

    let itemFeaturesContainer = document.createElement('div');
    itemFeaturesContainer.className = 'widget__item__container';

    let itemLikeContainer = document.createElement('div');
    itemLikeContainer.className = 'widget__item__features widget__item__features__like';

    let itemCommentsContainer = document.createElement('div');
    itemCommentsContainer.className = 'widget__item__features';

    let itemDataContainer = document.createElement('div');
    itemDataContainer.className = 'widget__item__features';

    let itemDataElement = document.createElement('span');
    itemDataElement.className = 'widget__item__data';

    let itemLikeElement = document.createElement('span');
    itemLikeElement.className = 'widget__item__like';

    let itemCommentsElement = document.createElement('span');
    itemCommentsElement.className = 'widget__item__comments';

    itemTextElement.innerText = item.text;
    itemImgElement.src = sizes[sizesLength - 1]?.url || sizes[sizesLength - 1]?.src;
    itemDataElement.innerText = date.toLocaleString();
    itemLikeElement.innerText = item?.likes?.count;
    itemCommentsElement.innerText = item?.comments?.count;

    articleContainer.appendChild(itemTextElement);
    articleContainer.appendChild(itemImgElement);
    articleContainer.appendChild(itemFeaturesContainer);

    itemFeaturesContainer.appendChild(itemLikeContainer);
    itemFeaturesContainer.appendChild(itemCommentsContainer);
    itemFeaturesContainer.appendChild(itemDataContainer);

    itemLikeContainer.appendChild(itemLikeElement);
    svgElementLike.appendChild(pathElementLike);
    itemLikeContainer.appendChild(svgElementLike);

    itemCommentsContainer.appendChild(itemCommentsElement);
    svgElementComment.appendChild(pathElementComment);
    itemCommentsContainer.appendChild(svgElementComment);

    itemDataContainer.appendChild(itemDataElement);
    wall.appendChild(articleContainer);
  });
}

function onDataProcessed() {
  console.log(wallData.response.items);
  createArticle(wallData.response.items);
}
function updateLocalStorage(data) {
  const maxLocalStorageSize = 5 * 1024 * 1024; // Максимальный размер localStorage в байтах (например, 5 MB)

  // Получаем текущие данные из localStorage (если они есть)
  const storedData = JSON.parse(localStorage.getItem('wallData')) || [];

  // Объединяем новые данные с теми, что уже есть в localStorage
  const newData = storedData.concat(data.response.items);
  let byteNewData = new TextEncoder().encode(JSON.stringify(newData)).length;

  // Удаляем старые элементы, пока не уложимся в лимит
  while (byteNewData > maxLocalStorageSize) {
    console.log('удаление!!!');
    newData.shift(); // Удаляем первый элемент
    byteNewData = new TextEncoder().encode(JSON.stringify(newData)).length;
  }

  // Обновляем wallData.response.items
  wallData.response.items = data.response.items;

  // Сохраняем обновленные данные в localStorage
  localStorage.setItem('wallData', JSON.stringify(newData));
}

function getMaxLocalStorageSize() {
  // Определяем максимальный размер хранилища в байтах (5MB)
  const maxStorageSizeMB = 5;
  const maxStorageSizeBytes = maxStorageSizeMB * 1024 * 1024;
  return maxStorageSizeBytes;
}

function logStorageUsage() {
  // Получаем данные из localStorage

  const storedData = JSON.parse(localStorage.getItem('wallData')) || [];

  // Получаем размер данных в байтах, используя JSON.stringify
  const dataSize = new TextEncoder().encode(JSON.stringify(storedData)).length;

  // Получаем максимальный размер хранилища в байтах
  const maxStorageSize = getMaxLocalStorageSize();

  // Выводим информацию в консоль
  console.log(`Объем занятой памяти: ${dataSize} байт`);
  console.log(`Максимальный размер хранилища: ${maxStorageSize} байт`);
  console.log(`Использовано: ${((dataSize / maxStorageSize) * 100).toFixed(2)}%`);
}
wall.addEventListener('scroll', function () {
  // Прерываем повтороное получение данных
  if (isFetching) {
    return;
  }
  // Проверяем, долистал ли пользователь до конца
  if (wall.scrollHeight - wall.scrollTop <= 800) {
    console.log('Долистал до конца');
    offset += 100;
    fetchDataAndProcess();
    scrollPosition = wall.scrollHeight - wall.scrollTop;
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const storedData = JSON.parse(localStorage.getItem('wallData'));

  if (storedData) {
    wallData.response.items = storedData;
    onDataProcessed();
  } else {
    fetchDataAndProcess();
  }

  logStorageUsage(); // Логирование использования памяти в консоль
  console.log(wallData);
});
