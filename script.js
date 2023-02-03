let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');

btn.onclick = function () {
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  } else {
    sidebar.classList.add('active');
  }
};

searchBtn.onclick = function () {
  sidebar.classList.toggle('active');
};
//
