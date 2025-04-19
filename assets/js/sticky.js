document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.as_toggle');
  const menu = document.querySelector('.as_menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  }
});
