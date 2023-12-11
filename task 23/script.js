function analyzePassword(password) {
  let minLength = 12;
  let upperCase = /[A-Z]/.test(password);
  let lowerCase = /[a-z]/.test(password);
  let digits = /\d/.test(password);
  let chars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  let strength = 0;

  if (password.length >= minLength) {
    strength++;
  }

  if (upperCase && lowerCase) {
    strength++;
  }

  if (digits) {
    strength++;
  }

  if (chars) {
    strength++;
  }

  if (strength === 4) {
    return 'Отличный пароль!';
  } else if (strength >= 2) {
    return 'Средний пароль. Добавьте числа,специальные символы или разный регистр';
  } else {
    return 'Слабый пароль. Увеличьте длину пароля и используйте разные регистры, числа и специальные символы.';
  }
}

function checkPassword() {
  var password = document.getElementById('password').value;
  var result = analyzePassword(password);
  document.getElementById('result').textContent = result;
}
