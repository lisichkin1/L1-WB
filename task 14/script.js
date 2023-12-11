function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    // Обработчик успешной загрузки изображения
    image.onload = function () {
      resolve({
        width: image.width,
        height: image.height,
        src: image.src,
      });
    };

    // Обработчик ошибки загрузки изображения
    image.onerror = function () {
      reject(new Error('Failed to load the image'));
    };

    // Начинаем загрузку изображения
    image.src = url;
  });
}

const imageUrl =
  'https://application.mcs.st/master/static/c2fcecaf/images/vkcs_full_logo_black.svg';

loadImage(imageUrl)
  .then((imageData) => {
    console.log('Изображение успешно загружено:', imageData);
  })
  .catch((error) => {
    console.error('Ошибка загрузки изображения:', error.message);
  });
