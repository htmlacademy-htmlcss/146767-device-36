// Появляющийся по клику блок
const navButtonDisplay = document.getElementsByClassName('navigation-item-button') [0]
const hiddenCatalogList = document.getElementsByClassName('hidden-catalog-list') [0]

// Добавляет обработчик на событие клик
navButtonDisplay.addEventListener('click', function () {
  hiddenCatalogList.classList.toggle('hidden')
  navButtonDisplay.classList.toggle('show')
});
