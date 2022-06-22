const ham = document.getElementById('ham');

const div = document.querySelector('#nav3');

ham.addEventListener('click', () => {
  div.classList.remove('hide');
  ham.classList.add('hide');
});

const markx = document.getElementById('markx');

markx.addEventListener('click', () => {
  div.classList.add('hide');
  ham.classList.remove('hide');
});
