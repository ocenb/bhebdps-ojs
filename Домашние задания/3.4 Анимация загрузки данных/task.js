const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

function renderCourses(valutes) {
  itemsContainer.innerHTML = '';
  for (const key in valutes) {
    const valute = valutes[key];
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
      <div class="item__code">
        ${valute.CharCode}
      </div>
      <div class="item__value">
        ${valute.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    `;
    itemsContainer.appendChild(item);
  }
}

const cachedData = localStorage.getItem('courses');

if (cachedData) {
  loader.classList.remove('loader_active');
  renderCourses(JSON.parse(cachedData));
}

const xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://students.netoservices.ru/nestjs-backend/slow-get-courses',
);
xhr.send();
xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const valutes = response.response.Valute;
    localStorage.setItem('courses', JSON.stringify(valutes));
    renderCourses(valutes);
    loader.classList.remove('loader_active');
  }
};
