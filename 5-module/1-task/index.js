function hideSelf() {
  let buttonForHide = document.body.querySelector (`.hide-self-button`);

  buttonForHide.onclick = function () {
    buttonForHide.hidden = true;
  }

}
