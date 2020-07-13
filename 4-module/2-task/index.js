/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(parametr) {
    let result = document.body.firstElementChild;
    for (let i = 0; i < parametr.rows.length; i++) {
      parametr.rows[i].cells[i].style.backgroundColor = 'red';
    }
    return result;
}
