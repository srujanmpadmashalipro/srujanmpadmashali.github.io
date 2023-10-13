const expandButtons = document.querySelectorAll('.expand-menu');

for (const button of expandButtons) {
  button.addEventListener('click', () => {
    const menuItems = button.nextElementSibling.querySelector('.menu-items');
    menuItems.classList.toggle('hidden');
  });
}
