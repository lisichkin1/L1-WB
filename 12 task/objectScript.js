// Определяем методы вне объекта
export function getTitle() {
  return this.title;
}

export function setTitle(newTitle) {
  this.title = newTitle;
}

export function getAuthor() {
  return this.author;
}

export function setAuthor(newAuthor) {
  this.author = newAuthor;
}

export function getYear() {
  return this.year;
}

export function setYear(newYear) {
  this.year = newYear;
}
