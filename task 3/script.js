function MathX() {
  // Используется мемоизация для хранения результатов предыдущих вызовов функции fibonacciDynamic
  const memo = {};
  // Возвращается объект с методами для работы с числами Фибоначчи и простыми числами
  return {
    nthNumberInTheFibonacci: function (n) {
      // Вызывается функция для вычисления N-го числа Фибоначчи с использованием мемоизации
      return fibonacciDynamic(n, memo);
    },
    allNumbersInTheFibonacci: function (N) {
      // Создается массив, содержащий все числа Фибоначчи, не превышающие N
      const fibonacciNumbers = [];
      for (let i = 0; fibonacciDynamic(i, memo) <= N; i++) {
        fibonacciNumbers.push(fibonacciDynamic(i, memo));
      }
      return fibonacciNumbers;
    },
    isPrime: function (num) {
      // Функция для проверки, является ли число простым
      if (num < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    },
    nthPrimeNumber: function (n) {
      // Реализация для вычисления N-го простого числа
      let count = 0;
      let num = 2;

      while (count < n) {
        if (this.isPrime(num)) {
          count++;
        }
        if (count < n) {
          num++;
        }
      }

      return num;
    },
    allPrimesUpToN: function (N) {
      // Реализация для вычисления всех простых чисел до N
      const primes = [];
      for (let i = 2; i <= N; i++) {
        if (this.isPrime(i)) {
          primes.push(i);
        }
      }
      return primes;
    },
  };
}
// Функция для вычисления чисел Фибоначчи с использованием динамического программирования и мемоизации
function fibonacciDynamic(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (!memo.hasOwnProperty(n)) {
    memo[n] = fibonacciDynamic(n - 1, memo) + fibonacciDynamic(n - 2, memo);
  }

  return memo[n];
}
// Создание экземпляра объекта MathX
const mathXInstance = MathX();
console.log(mathXInstance.allNumbersInTheFibonacci(50));
// Выведет: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log(mathXInstance.nthNumberInTheFibonacci(6)); // Выведет 8
// Выведет 55
console.log(mathXInstance.nthPrimeNumber(5)); // Выведет 11 (пятое простое число)
console.log(mathXInstance.allPrimesUpToN(20)); // Выведет [2, 3, 5, 7, 11, 13, 17, 19] (все простые числа до 20)
