// Write your code here
let gallery = [
  'https://holidaysarthi.com/wp-content/uploads/2019/10/Cheap-tour-Da-Nang-10-most-beautiful-places-to-visit-vietnam-holiday-destination.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Skydive-Dubai-UAE-Best-Places-for-Skydiving-in-the-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/03/Kazan-Moscow-Best-Cities-of-Russia-for-Travelling-and-Living.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2019/12/Christ-Redeemer-Rio-de-Janerio-Top-10-Best-Cities-of-Brazil-Tour.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2019/03/Chichen-Itza-Mexico-seven-wonders-of-world-the-best-monuments-in-world-for-traveller-7-worders-holiday-sarthi.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Schonbrunn-Palace-Famous-Monuments-Most-Visited-Places-in-the-World.png',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Wilanow-Palace-Famous-Monuments-Most-Visited-Places-in-the-World-scaled.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Musee-dOrsay-Famous-Monuments-Most-Visited-Places-in-the-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/National-Palace-Museum-Famous-Monuments-Most-Visited-Places-in-the-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Sagrada-Familia-Famous-Monuments-Most-Visited-Places-in-the-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Statue-of-Liberty-Famous-Monuments-Most-Visited-Places-in-the-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/World-War-II-Memorial-and-Vietnam-Veterans-Memorial-Famous-Monuments-Most-Visited-Places-in-the-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/01/Statue_of_Unity_Tallest_Statues_of_World_The_Most_Beautiful_Monuments.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Peterhof-Palace-Famous-Monuments-Most-Visited-Places-in-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Cologne-Cathedral-Famous-Monuments-Most-Visited-Places-in-the-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/06/Eiffel-Tower-Famous-Monuments-Most-Visited-Places-in-World.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2020/01/Forbidden-City-Beijing-15-biggest-palace-of-world-beautiful-attaraction-in-China-scaled.jpg',
  'https://holidaysarthi.com/wp-content/uploads/2019/03/Taj-Mahal-India-seven-wonders-of-world-the-best-monuments-in-world-for-traveller-7-worders-holiday-sarthi.jpg',
];

let box = document.getElementById ('child1');
let img = document.createElement ('img');
let count = 0;
img.src = gallery[count];
box.appendChild (img);
img.style.width = '900px';
let fwd = document.getElementById ('btnfwd');
let backwd = document.getElementById ('btnback');
let autofwd = document.getElementById ('autobtnfwd');
let autoback = document.getElementById ('autobtnback');
let counter = document.getElementById ('counter');
let stopEl = document.getElementById ('btnstop');
let interv;
counter.innerText = `${count}`;

fwd.addEventListener ('click', function () {
  if (count < gallery.length - 1) {
    img.src = gallery[++count];
    img.style.width = '900px';
    counter.innerText = `${count}`;
  } else {
    count = -1;
    img.src = gallery[++count];
    img.style.width = '900px';
    counter.innerText = `${count}`;
  }
});

backwd.addEventListener ('click', function () {
  if (count > 0) {
    img.src = gallery[--count];
    img.style.width = '900px';
    counter.innerText = `${count}`;
  } else {
    count = gallery.length;
    img.src = gallery[--count];
    img.style.width = '900px';
    counter.innerText = `${count}`;
  }
});

autofwd.addEventListener ('click', function () {
  interv = setInterval (function () {
    if (count < gallery.length - 1) {
      img.src = gallery[++count];
      img.style.width = '900px';
      counter.innerText = `${count}`;
    } else {
      count = -1;
      img.src = gallery[++count];
      img.style.width = '900px';
      counter.innerText = `${count}`;
    }
  }, 2000);
});

autoback.addEventListener ('click', function () {
  interv = setInterval (function () {
    if (count > 0) {
      img.src = gallery[--count];
      img.style.width = '900px';
      counter.innerText = `${count}`;
    } else {
      count = gallery.length;
      img.src = gallery[--count];
      img.style.width = '900px';
      counter.innerText = `${count}`;
    }
  }, 2000);
});
stopEl.addEventListener ('click', function () {
  clearInterval (interv);
});
