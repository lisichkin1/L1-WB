let counter = 0;
function recursiveDocumentWrite() {
  counter += 1;
  console.log(counter);
  document.write();
  recursiveDocumentWrite();
}

recursiveDocumentWrite();
//11418 вызовов
//Сначала я хотел опереться на статью https://habr.com/ru/articles/305366/, где проводили такой же эксперемент
//Данная статья 2016 года и автор говорит, что document.write() можно вызвать в Firefox и internet explorer 20 раз, а в Chrome 21 раз
//На деле же совсем другая ситуация. Как я считаю - количество вызовов ограничено размером коллстэка. А несходство со тсатьей - изменение работы браузера с тех времён.
