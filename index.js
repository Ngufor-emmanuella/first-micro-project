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

const projects =[
  {
    title: 'tonic',
    image: "images/face-crop-port.png",
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required',
  },
  {
    title: 'multi-post stories',
    image: "images/SnapshootPortfolio(1).png",
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required', 
  },
  {
    title: 'tonic',
    image: "images/orange-crop2.png",
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required',
  },
  {
    title: 'multi-post stories',
    image: "images/Snapshootportfolio(3).png",
    paragraph: 'A daily selection of privately personalised reads: no accounts or sign-ups required', 
  }
];

const project_container = document.querySelector('.project-container')

const project_html = projects.map((project) => (
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
      <button class="active button" type="button"> See Project</button>
  </div>
</div>
  `
));

project_container.innerHTML = project_html;

const project_buttons = document.querySelectorAll('.button')

const popup_container = document.querySelector('.popup')

project_buttons.forEach((button) => {
  button.addEventListener('click', () => {
    popup_container.innerHTML = `
    <div class="project1">
    <img class="popupx" src="images/Icon.png" alt="an x">
    <h2>Tonic</h2>
    <img class="cancel" src="images/Icon.png" alt="cancel">
    <ul class="list1">
        <li>CANOPY</li>
        <li><img src="images/Counter.png" alt="counter"></li>
        <li>Back End Dev</li>
        <li><img src="images/Counter(2).png" alt="counter"></li>
        <li>2015</li>
    </ul>
    <div class="my-img1">
        <img class="mobile-image1" src="images/SnapshootPortfolio(1).png" alt="picture identity of a lady">
    </div>
    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essent</p>
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
    `
    const cancel = document.querySelector('.popupx')
    cancel.addEventListener('click', () => {
      popup_container.innerHTML = ''
    });
  });
})
