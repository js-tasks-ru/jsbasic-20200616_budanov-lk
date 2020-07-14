/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[3].getAttribute('data-available') == 'true' ? table.rows[i].classList.add('available') : 
        table.rows[i].cells[3].getAttribute('data-available') == 'false' ? table.rows[i].classList.add('unavailable') : 
        table.rows[i].setAttribute('hidden', 'text') ;
        table.rows[i].cells[2].innerHTML == 'm' ? table.rows[i].classList.add('male') : table.rows[i].classList.add('female');
        if (table.rows[i].cells[1].innerHTML < 18) {
          table.rows[i].style.textDecoration = 'line-through';
        }   
       }
}
