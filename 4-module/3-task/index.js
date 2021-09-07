function highlight(table) {
  let tTr = table.children[1].rows;
  let iStatus = 3;
  let iGender = 2;
  let iAge = 1;
  for (let i = 0; i < tTr.length; i++) {
    // - Проставить класс `available/unavailable`
    if (tTr[i].children[iStatus].getAttribute('data-available') === `true`) {
      tTr[i].classList.add('available');
    } else if (tTr[i].children[iStatus].getAttribute('data-available') === `false`) {
      tTr[i].classList.add('unavailable');
    } else tTr[i].hidden = 'true'; // - Проставить атрибут `hidden`

    // - Проставить класс `male/female`
    if (tTr[i].children[iGender].textContent === "m") tTr[i].classList.add('male');
    else if (tTr[i].children[iGender].textContent === "f") tTr[i].classList.add('female');

    // Добавить inline-стиль
    if (+(tTr[i].children[iAge].textContent) < 18) {
      tTr[i].setAttribute("style", "text-decoration: line-through");
    }
  }
}
