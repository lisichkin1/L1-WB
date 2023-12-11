// Класс Node представляет узел связанного списка.
class Node {
  constructor(data, next = null) {
    this.data = data; // Значение узла
    this.next = next; // Ссылка на следующий узел
  }
}
// Класс LinkedList представляет связанный список.
class LinkedList {
  constructor() {
    this.head = null; // Начальный узел списка
  }

  // Добавление элемента в конец списка
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode; // Если список пуст, новый узел становится начальным
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next; // Переходим к последнему узлу
    }

    current.next = newNode; // Добавляем новый узел в конец
  }
  // Метод toArray возвращает массив, содержащий значения всех узлов списка.
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data); // Добавляем значение текущего узла в массив
      current = current.next; // Переходим к следующему узлу
    }
    return result;
  }
  // Метод fromJSON создает связанный список из массива данных.
  static fromJSON(jsonArray) {
    const linkedList = new LinkedList();
    for (const item of jsonArray) {
      linkedList.append(item); // Добавляем каждый элемент массива в список
    }
    return linkedList;
  }
}

const data = [
  { имя: 'Иван', возраст: 25, город: 'Москва' },
  { имя: 'Анна', возраст: 30, город: 'Санкт-Петербург' },
  { имя: 'Максим', возраст: 28, город: 'Новосибирск' },
  { имя: 'Елена', возраст: 35, город: 'Казань' },
  { имя: 'Дмитрий', возраст: 32, город: 'Екатеринбург' },
  { имя: 'Ольга', возраст: 27, город: 'Владивосток' },
  { имя: 'Сергей', возраст: 31, город: 'Сочи' },
  { имя: 'Татьяна', возраст: 29, город: 'Краснодар' },
  { имя: 'Александр', возраст: 26, город: 'Уфа' },
  { имя: 'Марина', возраст: 33, город: 'Ростов-на-Дону' },
];

const linkedListFromJSON = LinkedList.fromJSON(data);
console.log(linkedListFromJSON.toArray());
