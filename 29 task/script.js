function submitForm() {
  // Получаем данные из формы
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Выполняем действия с данными (в данном случае, просто отображаем их во всплывающем окне)
  const result = `Имя: ${name}\nПочта: ${email}`;
  alert(result);
}
