const paginationList = document.querySelector('.pagination__list');
const mainContainer = document.querySelector('.container');
const paginationDiv = document.querySelector('.pagination');
const btnPrev = document.querySelector('.btn1');
const btnNext = document.querySelector('.btn2');
const fetchData = async () => {
  const apiUtl =
    'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
  try {
    const response = await fetch(apiUtl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};
const main = async () => {
  const data = await fetchData();
  let currentPage = 1;
  let rows = 50;
  let currentSortKey = null;
  let isSortAscending = true;
  let sortedData = [];
  const tableHead = document.querySelector('.table__head');
  const tableHeadRow = tableHead.insertRow();
  tableHeadRow.className = 'table__head__row';
  const sortData = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (isSortAscending) {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    return sortedData;
  };

  const handleSortClick = (key, svg) => {
    if (key === currentSortKey) {
      isSortAscending = !isSortAscending;
    } else {
      currentSortKey = key;
      isSortAscending = true;
    }

    sortedData = sortData(currentSortKey);
    displayList(sortedData, rows, currentPage);
  };
  for (let key in data[0]) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('class', 'w-6 h-6');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('d', 'M4.5 15.75l7.5-7.5 7.5 7.5');

    svg.appendChild(path);
    const tableHeadCell = document.createElement('th');
    const tableHeadCellText = document.createElement('span');
    tableHeadCell.className = 'table__head__cell';
    tableHeadCellText.innerText = key;
    tableHeadCell.appendChild(tableHeadCellText);
    tableHeadCell.appendChild(svg);
    tableHeadRow.appendChild(tableHeadCell);
    svg.addEventListener('click', () => handleSortClick(key, svg));
  }
  const displayList = (arrData, rowPage, page) => {
    const tableBody = document.querySelector('.table__body');
    tableBody.innerHTML = '';
    const start = rowPage * (page - 1);
    const end = start + rowPage;
    const sliceData = arrData.slice(start, end);
    sliceData.forEach((item) => {
      const tableRow = tableBody.insertRow();
      tableRow.className = 'table__body__row';
      for (let key in item) {
        const tableCell = tableRow.insertCell();
        tableCell.innerText = item[key];
        tableCell.className = 'table__body__cell';
      }
    });
  };

  const displayPagination = (arrData, rowPage) => {
    let pageCount = Math.ceil(arrData.length / rowPage);
    const setActiveItem = (index) => {
      document.querySelectorAll('.list__item').forEach((item) => {
        item.classList.remove('active__item');
      });

      document.querySelector(`.list__item:nth-child(${index})`).classList.add('active__item');
    };

    for (let i = 0; i < pageCount; i++) {
      const listItem = document.createElement('li');
      listItem.className = i == 0 ? 'list__item active__item' : 'list__item';
      listItem.innerText = i + 1;
      paginationList.appendChild(listItem);
      listItem.addEventListener('click', () => {
        setActiveItem(i + 1);
        currentPage = i + 1;
        displayList(sortedData.length > 0 ? sortedData : data, rows, currentPage);
      });
    }
    btnPrev.addEventListener('click', () => {
      if (currentPage > 1) {
        setActiveItem(currentPage - 1);
        currentPage -= 1;
        displayList(sortedData.length > 0 ? sortedData : data, rows, currentPage);
        console.log(currentPage);
      }
    });
    btnNext.addEventListener('click', () => {
      if (currentPage < pageCount) {
        setActiveItem(currentPage + 1);
        currentPage += 1;
        console.log(sortedData);

        displayList(sortedData.length > 0 ? sortedData : data, rows, currentPage);
        console.log(currentPage);
      }
    });
  };

  displayList(data, rows, currentPage);
  displayPagination(data, rows);
};

main();
