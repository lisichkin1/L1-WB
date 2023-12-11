//В этом алгоритме используется цикл, который идет до n и проверяет делители. Сложность этого алгоритма  O(n).

const dividerFirst = (n) => {
  let list = [];
  if (n <= 1) {
    return false;
  }
  for (let index = 0; index < n; index++) {
    if (n % index == 0) {
      list.push(index);
    }
  }
  list;
  return list.reduce((a, b) => a + b, 0) == n;
};

//Этот алгоритм также имеет сложность O(n), но сделана оптимизация в цикле, который проходит только до половины числа n.
//Это улучшает производительность, но всё равно оставляет алгоритм линейным.
const dividerSecond = (n) => {
  let list = [];
  if (n <= 1) {
    return false;
  }
  for (let index = 0; index <= Math.ceil(n / 2); index++) {
    if (n % index == 0) {
      list.push(index);
    }
  }
  list;
  return list.reduce((a, b) => a + b, 0) == n;
};

//Этот алгоритм использует оптимизацию, уменьшая количество итераций до √n. Сложность этого алгоритма O(√n)
//что делает его более эффективным, особенно для больших чисел.
const dividerThird = (n) => {
  let list = [1];
  if (n <= 1) {
    return false;
  }
  for (let index = 2; index <= Math.round(Math.sqrt(n)) + 1; index++) {
    if (n % index == 0) {
      list.push(index);
      list.push(Math.round(n / index));
    }
  }
  return [...new Set(list)].reduce((a, b) => a + b, 0) == n;
};
console.log(dividerFirst(28)); // true
console.log(dividerSecond(28)); // true
console.log(dividerThird(28)); // true
console.log(dividerFirst(12)); // false
console.log(dividerSecond(12)); // false
console.log(dividerThird(12)); // false
console.log(dividerFirst(6)); // true
console.log(dividerSecond(6)); // true
console.log(dividerThird(6)); // true
console.log(dividerFirst(1)); // false
console.log(dividerSecond(1)); // false
console.log(dividerThird(1)); // false
