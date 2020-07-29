/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  elem = document.createElement('table');
  
  constructor(rows) {
    let thead = document.createElement('thead');
    this.elem.prepend(thead);

    let trHead = document.createElement('tr');
    thead.appendChild(trHead);

    let th1 = document.createElement('th');
    th1.innerHTML = 'Имя';
    trHead.appendChild(th1);

    let th2 = document.createElement('th');
    th2.innerHTML = 'Возраст';
    trHead.appendChild(th2);

    let th3 = document.createElement('th');
    th3.innerHTML = 'Зарплата';
    trHead.appendChild(th3);

    let th4 = document.createElement('th');
    th4.innerHTML = 'Город';
    trHead.appendChild(th4);

    let th5 = document.createElement('th');
    th5.innerHTML = '';
    trHead.appendChild(th5);

    let tbody = document.createElement('tbody');
    this.elem.append(tbody);
    
    for (let key of rows) {
      let tr = document.createElement('tr');
      tbody.appendChild(tr);

      let td1 = document.createElement('td');
      td1.innerHTML = key.name;
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      td2.innerHTML = key.age;
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      td3.innerHTML = key.salary;
      tr.appendChild(td3);

      let td4 = document.createElement('td');
      td4.innerHTML = key.city;
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      td5.innerHTML = '<button>X</button>';
      tr.appendChild(td5);
    }
    tbody.addEventListener('click', function(evt){
      if(evt.target.closest('button')) {
        evt.target.closest('tr').remove()
      }
    })
  }


}
