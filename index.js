const ham = document.getElementById('ham');

const div = document.querySelector('#nav3');

const form = document.querySelector('#form');

const email = document.querySelector('#mail');

const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value
    !== email.value.toLowerCase()) {
    e.preventDefault();
    errorElement.style.display = 'block';
    errorElement.textContent = 'invalid email, please use lowerCase';
  }
});

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

const projects = [
  {
    title: 'tonic',
    image: 'images/face-crop-port.png',
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required',
  },
  {
    title: 'multi-post stories',
    image: 'images/SnapshootPortfolio(1).png',
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required',
  },
  {
    title: 'tonic',
    image: 'images/orange-crop2.png',
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required',
  },
  {
    title: 'multi-post stories',
    image: 'images/Snapshootportfolio(3).png',
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required',
  },
];

const projectContainer = document.querySelector('.project-container');

const projectHtml = projects.map((project) => (
  `
  <div class="project">
  <div class="my-img">
      <img class="mobile-image" src=${project.image} alt="picture identity of a lady">
  </div>
  <div class="my-text">
      <h2>${project.title}</h2>
      <ol>
          <li>CANOPY</li>
          <li><img src="images/Counter.png" alt="counter"></li>
          <li>Back End Dev</li>
          <li><img src="images/Counter(2).png" alt="counter"></li>
          <li>2015</li>
      </ol>
      <p>${project.paragraph} </p><br>
      <ul class="show">
          <li>html</li>
          <li>css</li>
          <li class="ok">Ruby on rails</li>
          <li>javascrpt</li>
      </ul>
      <button class="active button" type="button" id=${projects.indexOf(project)}> See Project</button>
  </div>
</div>
  `
));

projectContainer.innerHTML = projectHtml;

const projectButtons = document.querySelectorAll('.button');

const popupContainer = document.querySelector('.popup');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentProject = projects[button.id];
    popupContainer.innerHTML = `
    <div class="project1">
    <img class="popupx" src="images/Iconx-popup.png" alt="an x">
    <h2>${currentProject.title}</h2>
    <ul class="list1">
        <li>CANOPY</li>
        <li><img src="images/Counter.png" alt="counter"></li>
        <li>Back End Dev</li>
        <li><img src="images/Counter(2).png" alt="counter"></li>
        <li>2015</li>
    </ul>
    <div class="my-img1">
        <img class="mobile-image1" src=${currentProject.image} alt="picture identity of a lady">
    </div>
    <div class="my-img2">
    <img class="mobile-image2" src=${currentProject.image} alt="nature picture">
    </div>
    <p>
    ${currentProject.paragraph}</p>
    <ul class="show1">
        <li>html</li>
        <li>css</li>
        <li class="ok1">Ruby on rails</li>
        <li>javascrpt</li>
    </ul>
    <div class="house">
        <div class="button1a">
            <button type="button" class="button1">See live <img src="images/Icon-popup.png" alt="a clock"></button>
        </div>
        <div class=" button1a">
            <button type="button" class="button2">See Source <img src="images/Vector-popup.png" alt="github">
            </button>
        </div>
    </div>
</div>
    `;
    const cancel = document.querySelector('.popupx');
    cancel.addEventListener('click', () => {
      popupContainer.innerHTML = '';
    });
  });
});
const myName = document.getElementById('name');

const message = document.getElementById('msg');

form.addEventListener('input', () => {
  const inputs = {
    myName:myName.value,
    myEmail:email.value,
    myMessage:message.value,
  };
  localStorage.setItem('inputs', JSON.stringify(inputs));
});
const fetchData = JSON.parse(localStorage.getItem('inputs'));
myName.value=fetchData.myName;
email.value = fetchData.myEmail;
message.value = fetchData.myMessage;
