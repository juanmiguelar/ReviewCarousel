import "./styles.css";

// local reviews data
const reviews = [
  {
    id: 1,
    name: "Luigi Hidalgo",
    job: "Full Stack web developer",
    img:
      "https://scontent.fsjo7-1.fna.fbcdn.net/v/t1.6435-9/158608401_10227409436640528_8683176417125136492_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hmS_Ek77dxoAX-XauUD&tn=HlCY3L_Fz5XMo9W-&_nc_ht=scontent.fsjo7-1.fna&oh=14460788c59afde94d8d3999b9a16a05&oe=60D3854B",
    text: "I am a legal compliance analyst with experience in Code solutions"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson();
  //   const item = reviews[currentItem];
  //   img.src = item.img;
  //   author.textContent = item.name;
  //   job.textContent = item.job;
  //   info.textContent = item.text;
});

//show person based on item

function showPerson(person) {
  console.log(currentItem);
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show previous person
prevBtn.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.lenght - 1;
  }
  showPerson();
});

//Challenge** Ramdom Person by clicking on "Surprise me" button
randomBtn.addEventListener("click", function() {
  console.log(reviews.length);
  currentItem = Math.floor(Math.random() * reviews.length);

  console.log(currentItem);
  showPerson();
});
