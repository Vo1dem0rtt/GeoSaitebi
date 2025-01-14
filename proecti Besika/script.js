// ძიების ღილაკის და ველის კონტეინერის პოვნა
const searchToggle = document.querySelector('.search-toggle');
const searchContainer = document.querySelector('.search-container');

// ღილაკზე დაწკაპუნების ფუნქცია
searchToggle.addEventListener('click', () => {
    searchContainer.classList.toggle('hidden'); // "hidden" კლასის დამატება ან ამოღება
});
    