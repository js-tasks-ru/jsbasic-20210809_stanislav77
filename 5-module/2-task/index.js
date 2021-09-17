function toggleText() {
  let buttonForHideText = document.body.querySelector (`.toggle-text-button`);

  buttonForHideText.onclick = function () {
    text.hidden = !text.hidden;
  }
}
