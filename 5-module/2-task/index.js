function toggleText() {
  const txt = document.querySelector('#text');
  function hideShowText() {
    txt.getAttribute('hidden') == '' ? txt.removeAttribute('hidden') : txt.setAttribute('hidden', '');
  }
  
  document.querySelector('.toggle-text-button').addEventListener('click', hideShowText);
  
}

