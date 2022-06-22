const ham = document.getElementById('ham');

const div = document.querySelector('#nav3');

ham.addEventListener('click', () => {
  div.classList.remove('hide');
  ham.classList.add('hide');
  document.querySelector('.body').classList.add('blur');
  document.querySelector('.logo').classList.add('blur');
});

const markx = document.getElementById('markx');

markx.addEventListener('click', () => {
  div.classList.add('hide');
  ham.classList.remove('hide');
  document.querySelector('.body').classList.remove('blur');
  document.querySelector('.logo').classList.remove('blur');
});

const links = document.querySelectorAll('.navlink2');

links.forEach((link) => {
  link.addEventListener('click', () => {
    div.classList.add('hide');
    ham.classList.remove('hide');
    document.querySelector('.body').classList.remove('blur');
    document.querySelector('.logo').classList.remove('blur');
  });
});
