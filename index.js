import BookCollection from './modules/bookCollection.js';
import getCurrentDate from './modules/dateUtils.js';

const bookCollection = new BookCollection();
bookCollection.showBookData();

const addBtn = document.getElementById('add');
const navItems = document.querySelectorAll('.nav-items a');
const dateDiv = document.getElementById('dateTime');

const currentDate = getCurrentDate();
dateDiv.innerHTML = currentDate;

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (event) => {
    const target = event.target.parentElement.getAttribute('data-target');
    bookCollection.navigateSection(target, event.target);
  });
});

addBtn.addEventListener('click', () => {
  if (bookCollection.title.value === '' || bookCollection.author.value === '') {
    bookCollection.errorMsg.style.display = 'block';
    bookCollection.errorMsg.style.color = 'red';
  } else {
    bookCollection.errorMsg.style.display = 'none';
    bookCollection.addBook(bookCollection.title.value, bookCollection.author.value);
  }
});