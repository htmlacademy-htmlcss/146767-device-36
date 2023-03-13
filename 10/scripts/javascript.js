// Появляющийся по клику блок
const navButtonDisplay = document.getElementsByClassName('wrapper-navigation-button') [0]
const navButtonIcon = document.getElementsByClassName('navigation-button-icon') [0]
const hiddenCatalogList = document.getElementsByClassName('hidden-catalog-list') [0]

// Добавляет обработчик на событие клик
navButtonDisplay.addEventListener('click', function () {
  hiddenCatalogList.classList.toggle('hidden')
  navButtonIcon.classList.toggle('show')
});
