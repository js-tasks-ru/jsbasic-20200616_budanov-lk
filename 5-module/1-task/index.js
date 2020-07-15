function hideSelf() {
  function hideButton() {
    document.querySelector('.hide-self-button').setAttribute('hidden', 'text' );
  } 
  document.querySelector('.hide-self-button').addEventListener("click", hideButton);

}
